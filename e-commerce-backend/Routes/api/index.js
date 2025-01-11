const express = require("express")
const _ = express.Router()
const authRoute = require("./authRoute")
const productRoute = require("./productRoute")
 
_.use("/auth", authRoute)
_.use("/products", productRoute)
module.exports = _