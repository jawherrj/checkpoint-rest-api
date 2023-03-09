const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    firstname:String ,
    lastname:String,
    age:String
})

const usermodule= mongoose.model("user",userschema)

module.exports=usermodule