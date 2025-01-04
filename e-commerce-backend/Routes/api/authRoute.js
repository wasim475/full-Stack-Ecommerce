const express = require("express")
const _ = express.Router()
const registrationcontroller = require('../../controller/registrationController')



_.get("/registration", (req, res)=>{
    res.send("Registration")
})

_.post("/registration", registrationcontroller)

module.exports = _

