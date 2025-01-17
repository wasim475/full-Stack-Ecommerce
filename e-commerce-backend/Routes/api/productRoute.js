const express = require("express")
const _ = express.Router()
const categoryController = require("../../controller/category/categoryController")
const allCategory = require('../../controller/category/AllCategory')
const subCategoryController = require('../../controller/sub category/subCategoryController')
const allSubCategory = require('../../controller/sub category/allSubCategory')
const allSubCategories = require('../../controller/sub category/allSubCategory')
const deleteCategoryController = require('../../controller/category/deleteCategoryController')
const editCategoryController = require('../../controller/category/editCategoryController')
   
_.post("/createcategory", categoryController)
_.post("/create-subcategory", subCategoryController)
_.get("/allcategory", allCategory)
_.get("/allsubcategory", allSubCategories)
_.post("/deleteCategory", deleteCategoryController)
_.post("/editcategory", editCategoryController)
  
module.exports = _