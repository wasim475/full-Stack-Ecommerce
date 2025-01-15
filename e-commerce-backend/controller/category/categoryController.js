
const category = require("../../Model/categorySchema");
const categoryController = async (req, res) => {
  const { name, ownerId } = req.body;
  // const ownerId = new mongoose.Types.ObjectId(userId)     
  const Category = new category({ name, ownerId });
  await Category.save();
  res.send({ success: "Category Created." });
  console.log(name,ownerId); 
};    
      
module.exports = categoryController;
