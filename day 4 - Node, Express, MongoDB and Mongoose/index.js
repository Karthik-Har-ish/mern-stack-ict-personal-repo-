const express = require("express")
const studentModel = require("./model/student.js")
require("./connection.js")

const server = express()
const PORT = 5500

server.use(express.json())

// middleware

// api



server.post('/',(req,res)=>{
    try {
        studentModel(req.body).save()
        res.status(200).send("Data added to database!");
    } catch (err) {
        console.log(err);
    }
})


server.get("/users",async (req,res)=>{
	try {
		const data = await studentModel.find()
		res.status(200).send(data)
	} catch (err) {
		console.log(err)
	}
})


// server.get('/:name',async (req,res)=>{
// 	try {
// 		const data = await studentModel.findOne({sName:req.params.name})
// 		res.send(
// 			`<h2>Your requested data is : ${data}</h2>`
// 		)
// 	} catch (err) {
// 		console.err(err)
// 	}
// })



server.get("/:age", async (req,res)=>{
	try {
		const data = await studentModel.findOne({sAge:req.params.age})
		res.status(200).send(data)
		console.log("Data found!")
	} catch (error) {
		console.err(error)
	}
})
// server.get('/delete?:id',async (req,res)=>{
// 	try {
// 		await studentModel.findByIdAndDelete(req.params.id)
// 		res.status(200).send("Document deleted from database!")
// 	} catch (err) {
// 		console.log(err)
// 	}
// })



server.put("/:id",async (req,res)=>{
	try {
		await studentModel.findByIdAndUpdate(req.params.id,req.body);
		res.send("Data updated!")
	} catch (err) {
		console.err(err)
	}
})

// port assignment
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})