const mongoose = require("mongoose")

const product = mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    }
)
module.exports = mongoose.model("Product",product)