
const categoryController = (req, res)=>{
    const {categoryName} = req.body
    res.send(categoryName)
}

module.exports = categoryController