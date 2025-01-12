const user = require('../../Model/userSchema')

const allUsersController = async (req,res)=>{
    const data = await user.find({})
    if(data.length < 1){
        return res.send({error:"No users yet."})
    } else{
        res.send(data)
    }
}  
    
module.exports = allUsersController