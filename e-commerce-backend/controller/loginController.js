const bcrypt = require("bcrypt");
const userSchema = require('../Model/userSchema')

const loginController = async (req, res)=>{
    const {email, password} = req.body
    const CurrentUser = await userSchema.find({email})
    const userEmail = CurrentUser[0]?.email
    const userPassword = CurrentUser[0]?.password
    const isValidPassword = await bcrypt.compare(password, userPassword)
    if(userEmail===email && isValidPassword){
        res.send({success:"Login Successfull"})
    }else{
        res.send({error:"Invalid Credential."})
    }
    
}

module.exports = loginController