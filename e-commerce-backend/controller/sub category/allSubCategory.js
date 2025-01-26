const subCategory = require("../../Model/subCategoryModel")

    const allSubCategories = async (req, res)=>{
        const allSubcatData = await subCategory.find({}).populate("categoryId")
        res.send(allSubcatData)
    }
    
          
module.exports = allSubCategories