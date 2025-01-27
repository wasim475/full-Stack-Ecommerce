const subCategoryModel = require('../../Model/subCategoryModel')

const subcategoryAproveController = async (req, res)=>{
    const {subcatId}= req.body
    // console.log(catId)
    const catAprove = await subCategoryModel.findByIdAndUpdate({"_id":subcatId}, {"isActive":true})
    res.send({success:"SubCategory Aproved."})
}

module.exports = subcategoryAproveController