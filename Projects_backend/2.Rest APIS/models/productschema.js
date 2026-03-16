const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    enum: [
      'Apple',
      'Samsung',
      'Google',
      'Sony',
      'OnePlus',
      'Lenovo',
      'Microsoft',
      'ASUS',
      'Dell'
    ],
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Product", ProductSchema);