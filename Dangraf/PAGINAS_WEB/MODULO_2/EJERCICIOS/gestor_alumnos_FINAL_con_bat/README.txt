
GESTOR DE ALUMNOS - INSTRUCCIONES ACTUALIZADAS

1. REQUISITOS:
- Node.js y npm instalados.
- MySQL en ejecución.
- Base de datos 'schema_alumnos' creada con la tabla 'alumnos'.

2. INSTALACIÓN:
- Coloca todos los archivos del proyecto en una carpeta local.
- Desde la terminal en esa carpeta, ejecuta:
    npm install express mysql2 cors body-parser

3. EJECUCIÓN:
- Inicia el servidor con:
    node server.js
- Accede a la aplicación desde el navegador en:
    http://localhost:3000

4. FUNCIONES DISPONIBLES:

- ALTAS:
  Inserta nuevos alumnos con todos sus datos personales y de salud.

- BAJAS:
  Busca alumnos por nombre o apellidos (sin usar ID).
  Muestra coincidencias. Permite seleccionar uno, visualizar sus datos
  y exportar su ficha a PDF. Al aceptar la baja, su campo 'situación' pasa a 'B'.

- MODIFICACIONES:
  Permite buscar alumnos por nombre o apellidos, editar todos sus datos
  incluyendo la situación ('A', 'B', 'M') y guardar los cambios sin usar el ID.

- CONSULTAS:
  Muestra lista filtrada por nombre, apellidos o situación.
  Permite exportar un listado general de alumnos a PDF.

- SALIR:
  Cierra la sesión o te redirige al menú principal.

5. DEPENDENCIAS EXTERNAS:
- jsPDF (para exportar a PDF): ya incluida en los archivos HTML necesarios.

Cualquier modificación adicional debe hacerse en los archivos dentro de las carpetas:
- public/js → scripts del cliente
- views → HTML del frontend
- routes → lógica del servidor
