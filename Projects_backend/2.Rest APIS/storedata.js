const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Product = require('./models/productschema');
const products = require('./products.json');
const connectDB = require('./database/connect');
require('dotenv').config();
const start=async ()=>{
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(products.products);

}
start();