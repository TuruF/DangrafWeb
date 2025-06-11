document.addEventListener('DOMContentLoaded', function () {
  // Envío del formulario
  document.getElementById('alumnoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;

    const res = await fetch('/alumnos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, apellidos })
    });

    if (res.ok) {
      alert('Alumno agregado');
      document.getElementById('nombre').value = '';
      document.getElementById('apellidos').value = '';
      cargarAlumnos(); // Recargar lista
    } else {
      alert('Error al agregar alumno');
          
    }
  });

  // Función para cargar alumnos
  async function cargarAlumnos() {
    const res = await fetch('/alumnos');
    const alumnos = await res.json();
    const lista = document.getElementById('listaAlumnos');
    lista.innerHTML = '';
    alumnos.forEach(alumno => {
      const li = document.createElement('li');
      li.textContent = `Nombre: ${alumno.nombre}, Apellidos: ${alumno.apellidos}`;
      lista.appendChild(li);
    });
  }

  cargarAlumnos(); // Carga inicial
});
