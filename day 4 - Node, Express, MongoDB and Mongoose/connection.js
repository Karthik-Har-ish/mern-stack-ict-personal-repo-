const mongoose = require("mongoose")
const DATABASE_URL = require("./env")


main().catch(err=>{console.err(err)});

async function main(){
    await mongoose.connect(DATABASE_URL)

    console.log("database connected")
}