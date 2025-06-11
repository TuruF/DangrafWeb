let datosJSON = []; // Array con los datos
let filaSeleccionada = null; // Para baja

// Leer archivo Excel y convertirlo a JSON
document.getElementById("archivoExcel").addEventListener("change", (evento) => {
  const archivo = evento.target.files[0];
  const lector = new FileReader();

  lector.onload = (e) => {
    const datos = new Uint8Array(e.target.result);
    const libro = XLSX.read(datos, { type: "array" });
    const hoja = libro.Sheets[libro.SheetNames[0]];
    datosJSON = XLSX.utils.sheet_to_json(hoja, { header: 1 });
    mostrarTabla(datosJSON);
  };

  lector.readAsArrayBuffer(archivo);
});

// Mostrar la tabla en el contenedor
function mostrarTabla(datos) {
  const contenedor = document.getElementById("contenedorTabla");
  contenedor.innerHTML = "";

  const tabla = document.createElement("table");

  datos.forEach((fila, i) => {
    const tr = document.createElement("tr");
    tr.dataset.fila = i;

    fila.forEach((celda, j) => {
      const celdaHTML = i === 0 ? document.createElement("th") : document.createElement("td");
      celdaHTML.contentEditable = i !== 0;
      celdaHTML.textContent = celda || "";
      celdaHTML.dataset.fila = i;
      celdaHTML.dataset.columna = j;
      if (i !== 0) {
        celdaHTML.tabIndex = 0;
        celdaHTML.addEventListener("click", () => {
          filaSeleccionada = i;
          celdaHTML.focus();
        });
      }
      tr.appendChild(celdaHTML);
    });

    tabla.appendChild(tr);
  });

  contenedor.appendChild(tabla);
}

// Confirmar modificación actual
document.getElementById("confirmarCambios").addEventListener("click", () => {
  const tabla = document.querySelector("table");
  const nuevasFilas = Array.from(tabla.rows).map(row =>
    Array.from(row.cells).map(cell => cell.textContent)
  );
  datosJSON = nuevasFilas;
  alert("Cambios guardados en memoria.");
});

// Alta de nueva fila vacía
document.getElementById("altaFila").addEventListener("click", () => {
  const columnas = datosJSON[0].length;
  const nuevaFila = new Array(columnas).fill("");
  datosJSON.push(nuevaFila);
  mostrarTabla(datosJSON);

  // Foco automático en la primera celda de la nueva fila
  const tabla = document.querySelector("table");
  const nueva = tabla.rows[tabla.rows.length - 1].cells[0];
  nueva.focus();
});

// Eliminar fila seleccionada
document.getElementById("bajaFila").addEventListener("click", () => {
  if (filaSeleccionada !== null && filaSeleccionada > 0) {
    datosJSON.splice(filaSeleccionada, 1);
    mostrarTabla(datosJSON);
    filaSeleccionada = null;
  } else {
    alert("Selecciona una fila válida para eliminar.");
  }
});

// Guardar en archivo Excel
document.getElementById("guardarArchivo").addEventListener("click", () => {
  const libro = XLSX.utils.book_new();
  const hoja = XLSX.utils.aoa_to_sheet(datosJSON);
  XLSX.utils.book_append_sheet(libro, hoja, "Hoja1");
  XLSX.writeFile(libro, "archivo_modificado.xlsx");
});