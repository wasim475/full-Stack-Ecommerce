const subCategory = require('../../Model/subCategoryModel')

const editSubCategoryController = async (req, res)=>{
 const {name, subCatId}= req.body
 const editsubCat = await subCategory.findByIdAndUpdate({"_id":subCatId}, {"name": name})
 res.send({success:"Update Successfully"})
}

module.exports = editSubCategoryController