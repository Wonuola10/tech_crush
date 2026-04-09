//
/*let item1 = "milk";
let item2 = "milo";
let item3 = "rice";

let items = ["milk", "milo", "rice", 1, 2, 3, 4, true];

console.log(items[0]);
console.log(items.lenght);


//forEach 
let fruits = ["apple", "banana", "orange", "grape", "mango"];
let names = ["esther", "john", "doe", "jane", "smith"];

names.forEach(function(name){
    console.log("TECH_CRUSH_2026_COHORT_6" + name); //named function
})

fruits.forEach(function(fruit){
    console.log("i eat " + fruit);
})

//Array Method: Map
let scores = [90, 80, 70, 60, 50];
let newScores = scores.map( (x) => {;
    console.log("as a good teacher , i decided to add 5 marks to all my students");
    return x + 5;
}); 
console.log(newScores);

let students = ["esther", "john", "doe", "jane", "smith"];
let nameTag = students.map(function(tag){
    return "TECH_CRUSH_2026_COHORT_6 " + tag;
})
console.log(nameTag);

//filter method
let jambScores = [200, 250, 300, 150, 180, 280, 290,100];
let passed = jambScores.filter((score)=>{;
    return score >= 200;
})
console.log(passed);

let ages = [18 , 25, 30, 15, 20, 35, 40];
let adults = ages.filter(function(age){
    return age >= 18
})
console.log(adults);
*/
//Find 
const studentsNames = ["john", "john", "Ada", "doe", "jane", "smith", "Bola", "john"]
const found = studentsNames.find((names)=>{
    return names === "john";
})
console.log(found)

//Reduce method
let cartPrices = [1500, 800, 2200, 450, 1000];
let total = cartPrices.reduce(function(accumulator, currentPrice){
    return accumulator + currentPrice;
}, 1000); // 0 is the starting value 

console.log(total); //5950

//Arrow function version
let grandTotal = cartPrices.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice;
}, 0);

console.log(grandTotal);

//Push, Pop, Shift, Unshift
let colors = ["red", "blue", "green"];
colors.push("yello");

let lastColor = colors.pop();
console.log(colors);

console.log(lastColor);

let firstColor = colors.shift();
console.log(colors);
console.log(firstColor);

let  newLength = colors.unshift("purple");
console.log(colors);
console.log(newLength);

/**
 * the return type for push and unshift is the new length of array after the operation
 * while pop and shift return the removed element from the array
 */