import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // Remover opciones deprecated
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    console.log(`📁 Base de datos: ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error.message);
    
    // Información útil para debugging
    if (error.code === 8000) {
      console.log('🔐 Problema de autenticación:');
      console.log('- Verifica usuario y contraseña en MONGODB_URI');
      console.log('- Si usas Atlas, asegúrate de que la IP está whitelisted');
    } else if (error.code === 'ENOTFOUND') {
      console.log('🌐 Problema de red:');
      console.log('- Verifica tu conexión a internet');
      console.log('- Verifica la URL de conexión');
    }
    
    process.exit(1);
  }
};

export default connectDB;
