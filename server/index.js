const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

const app = express();

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Conexion a la base de datos
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente', status: 'OK' });
});

// Manejo de errores básico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
