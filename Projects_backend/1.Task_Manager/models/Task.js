const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxLength:[20,'name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    },
    age:{
        type:Number,
        required:[true,'must provide age'],
    }
})
module.exports = mongoose.model('task',testSchema);