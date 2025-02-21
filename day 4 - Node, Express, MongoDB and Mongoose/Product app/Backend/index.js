const express = require("express")
require("dotenv").config()

require("./connection")
const userModel = require("./models/user.js") 
const productModel = require("./models/product.js")



const app = express();
const PORT = 5000;



// middleware
app.use(express.json())


// Signup api




app.post("/signup",async (req,res)=>{
    try {
        await userModel(req.body).save();
        res.send("Signed up successfully!")
        console.log("signed up successfully!")
    } catch (error) {
        console.log(err)
    }
})


app.post("/login",async (req,res)=>{
    try {
        const user = await userModel.findOne(
            {   
                username:req.body.username
            })
        if(!user){
            return res.json({message:"User not found!"})
        }
        if(req.body.password!=user.password){
            return res.send({message:"You've given the wrong password to this account!"})
        }
        return res.send({message:`Hello ${user.nickname}!`,user})
    } catch (error) {
        console.log(error)
    }
})

// TODO : REMOVE THIS !!!!
app.post("/product",async (req,res)=>{
    try {
        await productModel(req.body).save();
        res.send("Product added!")
        console.log("Product added!")
    } catch (error) {
        console.log(err)
    }
})

// PRODUCT DELETION
app.post("/product-delete", async (req,res)=>{
    try {
        await productModel.findOneAndDelete({id:req.body.id})
        res.send("product deleted!")
    } catch (error) {
        console.log(error)
    }
})

app.get("/shop",async (req,res)=>{
   try{
    res.json({products:await productModel.find()})
   }
   catch(err){
    console.json({error:error})
   }
})


app.listen(PORT,()=>{
    console.log(`Server is up and running at ${PORT}`);
})