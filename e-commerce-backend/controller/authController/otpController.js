const userSchema = require('../../Model/userSchema')


const optController = async (req, res)=>{
    const {email, otp} = req.body
    const CurrentUser = await userSchema.find({email})
    const userOtp = CurrentUser[0]?.otp
    if(userOtp!== otp){
        res.send({error:"invalid Opt."})
    }else{
       await userSchema.findOneAndUpdate({email},{"otp": "", "emailverify": true})
        res.send({success: "email verified"})
    }
}  

module.exports = optController