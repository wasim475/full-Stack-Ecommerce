const user = require("../Model/userSchema");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const {
  emailValidation,
  passwordValidation,
} = require("../Utility/validation");

const registrationcontroller = async (req, res) => {
  const { name, email, password } = req.body;
  const existUser = await user.findOne({ email });

 

 
    const hashPass = await bcrypt.hash(password, 10);
    // console.log(hashPass);
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    const User = new user({
      name,
      email,
      password: hashPass,
      otp,
    });    
   await User.save();
    res.send({ success: "Registration Successfull" });
  

 

  if (user) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.BASE_EMAIL,
        pass: "gfqj kgft hrxf hict",
      },
    });

    const info = await transporter.sendMail({
      from: `"E-commerce 👻" ${process.env.BASE_EMAIL}`, // sender address
      to: email, // list of receivers
      subject: "Verify Your Email", // Subject line
      html: `<div><h1>Verify code: ${otp}</h1></div>`, // html body
    });
  }
};       
  
module.exports = registrationcontroller;
