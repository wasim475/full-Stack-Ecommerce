const subCategory = require('../../Model/subCategoryModel')

const deleteSubCategoryController = async(req,res)=>{
    const {subCatId}= req.body
    const deleteItem = await subCategory.findByIdAndDelete({_id:subCatId})
    // console.log(deleteItem.name) 
    res.send({success: `${deleteItem?.name} has been Deleted.`})
}

module.exports = deleteSubCategoryController