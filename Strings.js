//length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)

//Upper case and Lower case
let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

//Trim start and trim End
let str = "   Hello, World!   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let signupName = " Esther"
let signinName = "Esther"

if((signupName.trim()) === signinName){
    console.log("Welcome back, Esther!")
}else {
    console.log("Invalid Login information")
}

//indexOf amd Includes
let user_email = "wonuolashonde@gmail.com"
let email_index = user_email.indexOf("@")
console.log(email_index)

let email_contains_at = user_email.includes("@")
console.log(email_contains_at)

//startswith and endwith
let userName= "techCrush Esther 6"
let starts = userName.startsWith("techCrush")//return data type : boolean
console.log(starts)

let ends = userName.endsWith("6")// RETURN DATATYPE : BOOLEAN
console.log(ends)

//slice and substring
let testString = "my name is Esther!"
let slicedString = testString.slice(0, 10)
let substringString = testString.substring(0, 10)
console.log(slicedString)
console.log(substringString)

//replace and replaceAll 
let text = "Esther is a techie. Esther loves coding and Esther loves teaching "
let replacedText = text.replace("Esther", "She")
let replacedAllText = text.replaceAll("Esther", "She")
console.log(replacedText)
console.log(replacedAllText)