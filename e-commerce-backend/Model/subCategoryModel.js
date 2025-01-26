const mongoose = require("mongoose")
const {Schema} = mongoose
const subCategorySchema = new Schema({
    name:{
        type: String,
        require: true
    },
    isActive:{
        type: Boolean,
        default: false
    },
    categoryId:{
        type: mongoose.Types.ObjectId,
        ref:"Category"
    }
})

module.exports = mongoose.model("subCategory",subCategorySchema)