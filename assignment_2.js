/*Assignment 1 Substring & Slice
const str = "Nigeria is awesome";
let Nigeria = str.substring(0,7);
console.log(Nigeria);
let awesome = str.slice(11,18);
console.log(awesome);
let is = str.slice(8,10);
console.log(is);
//Assignment 2 Using split
const names = "John,Jane,Doe";
const comma = names.split(",");
console.log(comma);
//Join 
const joined = comma.join("-");
console.log(joined);
const path ="/user/home/docs";
const slash = path.split("/");
const homeIndex = slash[2];
console.log(slash);
console.log(homeIndex);*/
//Assigment 3 Mix
const email = "user@example.com";
const username = email.split("@")[0];
console.log("username:", username); 
//Check if it's a .com domain
let isDotcom = email.endsWith(".com");
console.log("IS .com domain:", isDotcom);
//Replace @ with AT
let replacedEmail = email.replace("@", "AT");
console.log("Replaced Email:", replacedEmail);
