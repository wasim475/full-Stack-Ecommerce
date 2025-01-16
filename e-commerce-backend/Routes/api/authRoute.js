const express = require("express")
const _ = express.Router()
const registrationcontroller = require('../../controller/authController/registrationController')
const optController = require('../../controller/authController/otpController')
const loginController = require('../../controller/authController/loginController')
const forgotPasswordController = require('../../controller/authController/forgotPasswordController')
const resetPassController = require('../../controller/authController/resetPassController')
const allUsersController = require('../../controller/authController/allUsersController')


_.get("/registration", (req, res)=>{
    res.send("Registration")
})

_.post("/registration", registrationcontroller)
_.post("/otp", optController)
_.post("/login", loginController)
_.post("/forgetpassword", forgotPasswordController)
_.post("/resetpassword", resetPassController)
_.get("/users", allUsersController)

module.exports = _

