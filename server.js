const express = require("express");
const conctDB = require("./config/database");
const usermodule = require("./models/user");
const app=express()
require("dotenv").config({path:"./config/.env"})
port = process.env.Port|| 4000
conctDB()
app.use(express.json())

app.post("/", async (req,res)=>{
    const user= new usermodule({
        ...req
    }) 
    console.log(req.body)
    try {
       const newuser= await user.save()
      res.status(201).json(newuser)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

app.listen(port, (e) =>
  e ? console.log(e) : console.log(`server is conected on port ${port}`)
);


