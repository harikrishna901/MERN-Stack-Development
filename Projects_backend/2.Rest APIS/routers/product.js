const express = require('express');
const Route = express.Router();
const {
  getAllProducts,
  getAllProductsStatic
}                    =require('../controllers/product');
Route.route('/').get(getAllProducts);
Route.route('/static').get(getAllProductsStatic);
module.exports = Route;
