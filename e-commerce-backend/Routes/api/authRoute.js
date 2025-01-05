const express = require("express")
const _ = express.Router()
const registrationcontroller = require('../../controller/registrationController')
const optController = require('../../controller/otpController')
const loginController = require('../../controller/loginController')



_.get("/registration", (req, res)=>{
    res.send("Registration")
})

_.post("/registration", registrationcontroller)
_.post("/otp", optController)
_.post("/login", loginController)

module.exports = _

