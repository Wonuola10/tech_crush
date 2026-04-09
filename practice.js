/*
let str = "   John Doe   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()

console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let signupName = "   John Doe   "
let signinName = "John Doe"
if(signupName.trim().toLowerCase === signinName.toLowerCase){
    console.log("Welcome back, John Doe!")
}else {
    console.log("Invalid Login Information")
}

let str = "   esther   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let storedName = "Esther"
let storedPassword = "Pass123"
let inputName = "   esther   "
let inputPassword = "Pass123"
if (inputName.trim().toLowerCase() === storedName.toLowerCase() && inputPassword === storedPassword){
    console.log("Login successful! Welcome Esther")
}else{
    console.log("Invalid login details")
}*/

let str = "   esther   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let storedName = "Esther"
let storedPassword = "Pass123"
let inputName =  "   esther   "
let inputPassword = "Pass123"
//check password length
if(inputPassword.length < 6){
    console.log("Password too short")
}
//check login
else if(inputName.trim().toLowerCase() === storedName.toLowerCase() && inputPassword === storedPassword){
    console.log("Login Successful Welcome Esther!")
    console.log("if password is less than 6 character")
}else{
    console.log("Invalid Login")
   
}