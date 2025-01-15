const subCategory = require("../../Model/subCategoryModel")
const subCategoryController = async (req, res)=>{
    const{name, categoryId}= req.body

    const subCat = new subCategory({name, categoryId})
    const saveSubCategory = await subCat.save()
    res.send(saveSubCategory)
}

module.exports = subCategoryController