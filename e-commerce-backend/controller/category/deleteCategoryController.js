const Category = require('../../Model/categorySchema')

const deleteCategoryController = async (req,res)=>{
    const {categoryId} = req.body
    const category = await Category.findByIdAndDelete({_id: categoryId})
          
    res.send({success:"Delete Successfull"})
}
                
module.exports = deleteCategoryController