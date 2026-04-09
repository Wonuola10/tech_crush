//Remove Extra spaces
let msg = "   Hello, World!   ";
let trimmed = msg.trim();
console.log(trimmed);
//check if it starts with Hello
console.log("Starts with Hello:", trimmed.startsWith("Hello"));
//check if it ends with World!
console.log("Ends with World:", trimmed.endWith("World!"));
//convert to lowercase
let lower = trimmed.toLowerCase();
console.log("Lowercase:, lower");
//Find position of WORLD
console.log("Position of WORLD:", trimmed.indexOf("WORLD"));
//Replace "WORLD" with Nigeria
let replaced = trimmed.replace("WORLD", "Nigeria");
console.log(trimmed.replace("WORLD:", "Nigeria"));
//Replace all L with 1
let replacedAll = trimmed.replacedAll("L", "1");
console.log(trimmed.replaceAll("L","1"));
//Get characters from position 3 to 8
let slice = trimmed.slice(3, 8);
console.log("slice(3-8):", slice);






