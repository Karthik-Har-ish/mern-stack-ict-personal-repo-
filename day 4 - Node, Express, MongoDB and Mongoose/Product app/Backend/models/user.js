const mongoose = require("mongoose")
const {encrypt,decrypt} = require("node-encryption")
require("dotenv").config()





const user = mongoose.Schema({
    username:String,
    nickname:String,
    email:String,
    password:String,
    userType:{type:String, enum:["Admin","User"],default:"User"}
})

module.exports = mongoose.model("User",user)