import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la tienda es requerido'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'La dirección es requerida']
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    city: String,
    state: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Store = mongoose.model('Store', storeSchema);
export default Store;
