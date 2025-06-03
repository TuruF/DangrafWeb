// Obtenemos referencias a los elementos HTML
const inputArchivo = document.getElementById("inputDocumento"); // input para cargar archivo
const visorPDF = document.getElementById("visorPDF");       // iframe para mostrar el PDF

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

function toggleMenu() {
    document.querySelector('.navegar').classList.toggle('active');
    document.querySelector('.ico').classList.toggle('active');
};