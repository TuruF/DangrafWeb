// Obtenemos referencias a los elementos HTML
const inputArchivo = document.getElementById("archivoPDF"); // input para cargar archivo
const visorPDF = document.getElementById("visorPDF");       // iframe para mostrar el PDF
const btnImprimir = document.getElementById("imprimir");    // botón para imprimir

// Evento cuando el usuario carga un archivo PDF
inputArchivo.addEventListener("change", function () {
  const archivo = this.files[0]; // archivo seleccionado
  if (archivo && archivo.type === "application/pdf") {
    const url = URL.createObjectURL(archivo); // crea una URL temporal del archivo
    visorPDF.src = url; // muestra el PDF en el iframe
  } else {
    alert("Por favor, selecciona un archivo PDF válido.");
  }
});

// Evento para imprimir el contenido del iframe (el PDF)
btnImprimir.addEventListener("click", function () {
  visorPDF.contentWindow.focus(); // activa el iframe
  visorPDF.contentWindow.print(); // lanza el diálogo de impresión
});