const express = require("express")
const _ = express.Router()
const categoryController = require("../../controller/category/categoryController")
const allCategory = require('../../controller/category/AllCategory')
   
_.post("/createcategory", categoryController)
_.get("/allcategory", allCategory)

module.exports = _