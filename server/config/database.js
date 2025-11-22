const mongoose = require('mongoose');
require('dotenv').config();

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tienda-deportiva', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
