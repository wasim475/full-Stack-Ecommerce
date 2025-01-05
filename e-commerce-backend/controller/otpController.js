const userSchema = require('../Model/userSchema')


const optController = async (req, res)=>{
    const {email, otp} = req.body
    const CurrentUser = await userSchema.find({email})
    const userOtp = CurrentUser[0]?.otp
    if(userOtp!== otp){
        res.send("invalid Opt.")
    }else{
       await userSchema.findOneAndUpdate({email},{"otp": "", "emailverify": true})
        res.send("email verified")
    }
} 

module.exports = optController