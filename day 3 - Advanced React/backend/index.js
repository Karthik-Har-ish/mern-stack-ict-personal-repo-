// import express

const express = require("express")

// initialization of server

const server = express()
const PORT = 5000
// middle layers

// apis

// assignment of ports

server.get("/",(req,res)=>{
    res.send("Hello world!")
})

server.get("/login",(req,res)=>{
    res.send("<h1>Welcome to Backend</h1>")
})

server.listen(PORT,()=>{
    console.log(`server is up and running at port ${PORT}`)
    
})