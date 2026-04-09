//String Methods Practice Test
let str = "Coding is fun";
//extract the word "coding"
let word = str.slice(0, 6)
console.log(word)
let fun = str.substring(10, 13)
console.log(fun)
let is = str.slice(7, 9)
console.log(is)

//challenge 2
const colors = "red, green, blue, yellow"
const comma = colors.split(",")
console.log(comma)
//Join
const joined = comma.join(" - ")
console.log(joined)
console.log('Ogbu Uzoma Esther'.split('').join(""))
//challenge 3
const url = "/api/v1/users"
const slash = url.split("/")
const v1Index = slash[2]
console.log(slash[2])
console.log(v1Index)
//Challenge 4 extract only "esther"
const matricNumber = "TECHCRUSH-ESTHER-2026"
const splitMatric = matricNumber.split("-")
console.log(splitMatric[1])