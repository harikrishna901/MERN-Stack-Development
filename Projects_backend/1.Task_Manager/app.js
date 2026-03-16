
const express = require('express');
const app = express();
const notFound = require('./middleware/notfound');
const errorHandlerMiddleware = require('./middleware/error-handler');
const routes=require('./routers/tasks');
const connectDB = require('./database/connect');
app.use(express.json());
require('dotenv').config();
app.use(express.static('./public'));
app.use('/api/v1/tasks',routes);
app.use(notFound);
app.use(errorHandlerMiddleware);
const start = async ()=>{
    try{
       await connectDB(process.env.MONGO_URI);
       app.listen(3000,()=>{
           console.log("server running successfully.")
       })
    }catch(error){
        console.log(error);

    }
}
start();

