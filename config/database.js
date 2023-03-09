const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config({path:"./config/.env"})
const conctDB=()=>
{
    try { mongoose.connect(process.env.mongourl)      
        console.log("data base is connected")  
    } catch (error) {
        console.log(error)
    }
}
module.exports=conctDB
