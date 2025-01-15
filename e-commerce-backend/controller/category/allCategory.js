const Category = require("../../Model/categorySchema");
const allCategory = async (req, res) => {
  const allCategories = await Category.find({}).populate("ownerId");
  res.send(allCategories);
};

module.exports = allCategory;
