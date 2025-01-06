const user = require("../Model/userSchema");
const otpGenerator = require('otp-generator')
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const {
  emailValidation,
  passwordValidation,
} = require("../Utility/validation");

const registrationcontroller = async (req, res) => {
  const { name, email, password } = req.body;
  const existUser = await user.find({ email });
  if (existUser.length > 0) {
    return res.send({error:"Email already exist."});
  }    
  if (!name) {
    res.send("Name is required.");
  } else if (!email) {
    res.send("Email is required.");
  } else if (!password) {
    res.send("password is required.");
  } else {
    if (email) {
      if (!emailValidation(email)) {
        res.send("Invalid Email.");
      }
    }
    if (password) {
      if (!passwordValidation(password)) {
        res.send("invalid password");
      }
    }

    const hashPass = bcrypt.hash(password, 10, function(err, hash) {
        if(hash){
            return true
        }else{
            return false
        }
    }); 
    // console.log(hashPass);
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    const User = new user({
      name,
      email,
      password: hashPass,
      otp,
    });
    User.save();
    res.send({success:"Registration Successfull"});

    if (user) {
      const transporter =nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: process.env.BASE_EMAIL,
          pass: "gfqj kgft hrxf hict",
        },
      }); 

      const info = await transporter.sendMail({
        from: `"E-commerce 👻" ${process.env.BASE_EMAIL}`, // sender address
        to: email, // list of receivers
        subject: "Verify Your Email", // Subject line
        html: "<div><h1>Verify Your Email.</h1><a href=https://criccast.netlify.app/ ><button>Verify</button></a></div>", // html body
      });

    }

    

  }
};

module.exports = registrationcontroller;
