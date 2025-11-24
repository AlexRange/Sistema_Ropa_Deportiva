import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre del producto es requerido'],
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: [true, 'El precio es requerido'],
    min: [0, 'El precio no puede ser negativo']
  },
  category: {
    type: String,
    required: true,
    enum: ['ropa', 'calzado', 'equipamiento', 'accesorios']
  },
  brand: {
    type: String,
    required: true
  },
  sizes: [{
    size: String,
    quantity: {
      type: Number,
      default: 0
    }
  }],
  images: [String],
  stores: [{
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store'
    },
    quantity: Number
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;
