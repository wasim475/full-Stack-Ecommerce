const userSchema = require('../Model/userSchema')
const { passwordValidation } = require('../Utility/validation')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const resetPassController = async (req, res)=>{
    const {token, password} = req.body
    const decoded = jwt.verify(token, 'urmi');
    const email = decoded.email
    const existUser = await userSchema.findOne({email})
    if(!existUser){
        return res.send({error:"email does not exist."})
    }
    const userEmail = existUser.email
                  
    
   if(password){
    if(passwordValidation(password)){
        bcrypt.hash(password, 10, async function(err, hash) {
            await userSchema.findOneAndUpdate(
                {email},
                {"password":hash, "token":""},
                {new:true, strict:false}
            )
        });
        res.send({success:"password Updated"})
    }else{
        return res.send({error:"Invalid Password."})
    }
   }      
} 

module.exports = resetPassController