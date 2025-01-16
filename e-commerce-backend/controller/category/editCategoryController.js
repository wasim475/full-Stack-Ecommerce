const Category = require('../../Model/categorySchema')

const editCategoryController = async (req, res)=>{
    const {name, categoryId}= req.body
    const category = await Category.findByIdAndUpdate({"_id":categoryId},{"name":name})
    res.send({success:"Category Name Updated."})
}
  
module.exports = editCategoryController