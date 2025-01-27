const categorySchema = require('../../Model/categorySchema')

const categoryHoldController = async (req,res)=>{
    const {catId}= req.body
    const holdCategory = await categorySchema.findByIdAndUpdate({"_id":catId}, {"isActive":false})
    res.send({success:"catgory has been holded."})
}

module.exports = categoryHoldController