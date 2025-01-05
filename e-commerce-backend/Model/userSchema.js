const mongoose = require("mongoose")
const {Schema} = mongoose

const usersSchema = new Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    otp:{
        type:String
    },
    role:{
        type: String,
        enum: ["admin", "marchant", "user"],
        default: "user"
    },
    emailverify:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("user",usersSchema)