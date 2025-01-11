const express = require("express")
const _ = express.Router()
const categoryController = require("../../controller/category/categoryController")
   
_.post("/createcategory", categoryController)

module.exports = _