const category = require('../../Model/categorySchema')

const categoryAproveController = async (req, res)=>{
    const {catId}= req.body
    console.log(catId)
    const catAprove = await category.findByIdAndUpdate({"_id":catId}, {"isActive":true})
    res.send({success:"Category Aproved."})
}

module.exports = categoryAproveController