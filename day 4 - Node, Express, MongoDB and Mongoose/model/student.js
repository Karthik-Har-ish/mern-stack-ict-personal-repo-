const mongoose=require("mongoose")

const studentSchema = mongoose.Schema({
    sName: String,
    sAddr: String,
    sAge:Number
})


// model = mongoose.model(collection name, schmea nmae) 
module.exports=mongoose.model("student",studentSchema)