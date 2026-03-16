const express = require('express');
const app = express();
require('dotenv').config();
const Routes = require('./routers/product');
const notFound = require('./middlewares/notfound');
const connectDB = require('./database/connect');
app.use(express.json());
app.use('/api/v1/products',Routes);
app.use(notFound);
const start = async ()=>{
    await connectDB(process.env.MONGO_URI);
    app.listen(3000,()=>{
        console.log("Server listening successfully.");
    })

}
start();