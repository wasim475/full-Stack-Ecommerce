const emailValidation = (email)=>{
    const pattern = /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/
    return pattern.test(email)
}
const passwordValidation = (password)=>{
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    return pattern.test(password)
}
module.exports = {emailValidation, passwordValidation}