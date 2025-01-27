const subCategoryModel = require('../../Model/subCategoryModel')

const subCategoryHoldController = async (req,res)=>{
    const {subcatId}= req.body
    const holdCategory = await subCategoryModel.findByIdAndUpdate({"_id":subcatId}, {"isActive":false})
    res.send({success:"Subcatgory has been holded."})
}

module.exports = subCategoryHoldController