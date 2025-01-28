const mongoose = require("mongoose")
const {Schema} = mongoose

const ProductsSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    band:{
        type:String,
    },
    description:{
        type: String,
        require:true
    }
})

module.exports = mongoose.model("Product", ProductsSchema)