const category = require("../../Model/productsSchema.js")
const categoryController = (req, res)=>{
    const {name, ownerId} = req.body
    const Category = new category({name, ownerId})
    Category.save()
    res.send({success:"Category Created."})
    console.log(category)
    
}
     
module.exports = categoryController