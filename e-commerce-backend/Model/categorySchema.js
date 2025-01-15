const mongoose = require("mongoose")
const {Schema} = mongoose
        
const CatergoryModel = new Schema({
    name:{
        type: String,
        require:true
    },
    isActive:{
        type: Boolean,
        default: false
    },
    ownerId:{
        type: mongoose.Types.ObjectId,
        ref:"user"
    }
})
  
module.exports = mongoose.model("Category", CatergoryModel)