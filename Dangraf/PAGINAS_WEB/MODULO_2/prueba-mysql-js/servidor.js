const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Conexión a MySQL
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Marita_1911', // Cambia si es necesario
  database: 'schema_alumnos' // Asegúrate de que esta BD existe
});

conexion.connect(err => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Ruta POST para insertar un alumno
app.post('/alumnos', (req, res) => {
  const { nombre, apellidos } = req.body;
  conexion.query('INSERT INTO alumnos (nombre, apellidos) VALUES (?, ?)', [nombre, apellidos], (err) => {
    if (err) {
      console.error('Error al insertar:', err);
      return res.status(500).json({ error: 'Error al insertar datos' });
    }
    res.json({ message: 'Alumno insertado correctamente' });
  });
});

// Ruta GET para listar todos los alumnos
app.get('/alumnos', (req, res) => {
  conexion.query('SELECT * FROM alumnos', (err, resultados) => {
    if (err) {
      console.error('Error al obtener alumnos:', err);
      return res.status(500).json({ error: 'Error al consultar datos' });
    }
    res.json(resultados);
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
