const mongoose = require('mongoose');
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const connectDB=(url)=>{
    mongoose.connect(url);
    console.log("Successfully connected to DB..");
}
module.exports=connectDB;