const userSchema = require('../Model/userSchema')
const nodemailer = require("nodemailer")
var jwt = require('jsonwebtoken');
const forgotPasswordController = async(req, res)=>{
    const {email}= req.body
    
    const existUser = await userSchema.findOne({email})  
    if(!existUser){
        return res.send({error:"Email does not exist."})
    }
    const userEmail = existUser.email

    const token = jwt.sign({ email:email }, 'urmi');
    console.log(token)
    const existingU = await userSchema.updateOne({email},{$set:{token}},{returnNewDocument: true, new: true, strict:false})

    if(userEmail === email){
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
              user: process.env.BASE_EMAIL,
              pass: "gfqj kgft hrxf hict",
            },
          });  

          const info = await transporter.sendMail({
            from: `"NafiMart 👻" ${process.env.BASE_EMAIL} `, // sender address
            to: email, // list of receivers
            subject: "Reset Password", // Subject line   
            text: "Hello world?", // plain text body
            html: `<h1>To reset your password click on below link.</h1><br/><p> <a href='http://localhost:5173/resetpassword/${token}'><button>Reset</button></a> </p>`, // html body
          });

          res.send({success:"Check your Email To reset your Password"}) 

    }else{
        res.send({error:"Email not found."}) 
    }
} 
 
module.exports = forgotPasswordController