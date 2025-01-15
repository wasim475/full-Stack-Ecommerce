const subCategory = require("../../Model/subCategoryModel")

    const allSubCategories = async (req, res)=>{
        const allSubcatData = await subCategory.find({})
        console.log("hit")
        res.send(allSubcatData)
    }
    
          
module.exports = allSubCategories