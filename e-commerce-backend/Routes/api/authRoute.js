const express = require("express")
const registrationcontroller = require('../../controller/registrationController')
const _ = express.Router()


_.get("/registration", (req, res)=>{
    res.send("Registration")
})
module.exports = _