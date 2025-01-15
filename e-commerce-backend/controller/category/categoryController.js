const  mongoose = require('mongoose');
const category = require("../../Model/categorySchema.js");
const categoryController = async (req, res) => {
  const { name, userId } = req.body;
  const ownerId = new mongoose.Types.ObjectId(userId)
  console.log(ownerId)  
  const Category = new category({ name, ownerId });
  await Category.save();
  res.send({ success: "Category Created." });
  console.log(category); 
};  
         
module.exports = categoryController;
