const bcrypt = require("bcrypt");
const userSchema = require('../Model/userSchema')

const loginController = async (req, res)=>{
    const {email, password} = req.body
    const CurrentUser = await userSchema.findOne({email})
    if(!CurrentUser){
        return res.send({error:"Invalid Credential."})       
    }
    const userEmail = CurrentUser?.email
    const userPassword = CurrentUser?.password
    const isValidPassword = await bcrypt.compare(password, userPassword);         
    console.log(isValidPassword) 
    if(userEmail===email && isValidPassword){
        res.send({success: "Login Successfull", user: {name:CurrentUser.name,email:CurrentUser.email,emailverify:CurrentUser.emailverify,role:CurrentUser.role,id:CurrentUser._id}})
    }else{
        res.send({error:"Invalid Credential."})   
    }   
          
}    
    
module.exports = loginController