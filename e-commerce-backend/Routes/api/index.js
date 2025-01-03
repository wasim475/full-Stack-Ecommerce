const express = require("express")
const _ = express.Router()
const authRoute = require("./authRoute")


_.use("/auth", authRoute)
module.exports = _