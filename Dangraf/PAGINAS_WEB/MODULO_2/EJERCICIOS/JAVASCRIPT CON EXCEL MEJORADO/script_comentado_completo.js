let datosJSON = []; // Almacena los datos leídos desde el archivo Excel como un array de arrays
let filaSeleccionada = null; // Guarda el índice de la fila seleccionada para eliminación

// ✅ Esta función maneja la carga de un archivo Excel
// Se activa automáticamente cuando el usuario selecciona un archivo en el input
document.getElementById("archivoExcel").addEventListener("change", async (evento) => {
  const archivo = evento.target.files[0]; // Obtenemos el archivo desde el input. 'evento.target' es el input, y '.files[0]' es el primer archivo seleccionado
  const lector = new FileReader(); // Creamos un lector para leer el contenido del archivo

  // 📘 Cuando el lector termina de cargar el archivo
  lector.onload = function (e) { // 'e' es el evento que ocurre al terminar la carga del archivo
    const datos = new Uint8Array(e.target.result); // Convertimos los datos cargados a binario usando Uint8Array
    const libro = XLSX.read(datos, { type: "array" }); // Usamos SheetJS para leer el libro Excel desde el array binario
    const nombrePrimeraHoja = libro.SheetNames[0]; // Obtenemos el nombre de la primera hoja del libro
    const hoja = libro.Sheets[nombrePrimeraHoja]; // Obtenemos el contenido de esa hoja
    // 📌 Esta línea convierte los datos de la hoja en un array de arrays (matriz)
    // 'header: 1' indica que la primera fila contiene los nombres de las columnas (cabecera)
    datosJSON = XLSX.utils.sheet_to_json(hoja, { header: 1 });
    mostrarTabla(datosJSON); // Llamamos a la función que muestra los datos en una tabla editable
  };

  lector.readAsArrayBuffer(archivo); // Inicia la lectura del archivo como un buffer binario
});


// ✅ Esta función construye una tabla HTML editable desde los datos del archivo Excel
// Recibe como parámetro el array de arrays que representa los datos de la hoja de cálculo
function mostrarTabla(datos) {
  const contenedor = document.getElementById("contenedorTabla");
  contenedor.innerHTML = ""; // Borra cualquier tabla anterior

  const tabla = document.createElement("table"); // Crea una nueva tabla HTML

  // Recorre todas las filas del array de datos
  datos.forEach((fila, i) => {
    const tr = document.createElement("tr"); // Crea una fila HTML
    tr.dataset.fila = i; // Guarda el índice de la fila como atributo

    // Recorre cada celda de la fila
    fila.forEach((celda, j) => {
      // Si es la primera fila (índice 0), usamos <th> para cabecera; si no, usamos <td>
      const celdaHTML = i === 0 ? document.createElement("th") : document.createElement("td");
      celdaHTML.contentEditable = i !== 0; // Solo se pueden editar las filas que no sean la cabecera
      celdaHTML.textContent = celda || ""; // Mostramos el texto o vacío si no hay valor
      celdaHTML.dataset.fila = i; // Índice de fila
      celdaHTML.dataset.columna = j; // Índice de columna

      // ✅ Detectamos clic en la celda para saber qué fila se ha seleccionado
      celdaHTML.addEventListener("click", () => {
        filaSeleccionada = i; // Guardamos el índice de la fila seleccionada
      });

      tr.appendChild(celdaHTML); // Añadimos la celda a la fila
    });

    tabla.appendChild(tr); // Añadimos la fila completa a la tabla
  });

  contenedor.appendChild(tabla); // Insertamos la tabla en el contenedor del DOM
}


// ✅ Esta función recopila el contenido actual de la tabla y actualiza el array `datosJSON`
document.getElementById("confirmarCambios").addEventListener("click", () => {
  const tabla = document.querySelector("table"); // Seleccionamos la tabla
  const nuevasFilas = Array.from(tabla.rows).map(row =>
    Array.from(row.cells).map(cell => cell.textContent) // Extraemos el contenido de cada celda
  );
  datosJSON = nuevasFilas; // Reemplazamos los datos antiguos por los nuevos
  alert("Cambios confirmados."); // Informamos al usuario
});


// ✅ Esta función agrega una nueva fila vacía al final de la tabla
document.getElementById("altaFila").addEventListener("click", () => {
  const columnas = datosJSON[0].length; // Determina cuántas columnas tiene la tabla (basado en la cabecera)
  const nuevaFila = new Array(columnas).fill(""); // Crea una nueva fila con celdas vacías
  datosJSON.push(nuevaFila); // Añade la fila al array de datos
  mostrarTabla(datosJSON); // Redibuja la tabla con la nueva fila
});


// ✅ Esta función elimina la fila seleccionada (excepto la cabecera)
document.getElementById("bajaFila").addEventListener("click", () => {
  if (filaSeleccionada !== null && filaSeleccionada > 0) { // Validamos que no sea la cabecera
    datosJSON.splice(filaSeleccionada, 1); // Quitamos la fila del array
    mostrarTabla(datosJSON); // Redibujamos la tabla actualizada
    filaSeleccionada = null; // Reiniciamos la selección
  } else {
    alert("Selecciona una fila válida (no cabecera) para eliminar."); // Avisamos al usuario
  }
});


// ✅ Esta función convierte los datos actuales en un archivo Excel y lo descarga
document.getElementById("guardarArchivo").addEventListener("click", () => {
  const libro = XLSX.utils.book_new(); // Creamos un nuevo libro Excel vacío
  const hoja = XLSX.utils.aoa_to_sheet(datosJSON); // Convertimos el array de arrays a hoja de Excel
  XLSX.utils.book_append_sheet(libro, hoja, "Modificado"); // Añadimos la hoja al libro
  XLSX.writeFile(libro, "archivo_modificado.xlsx"); // Guardamos el archivo Excel
});
