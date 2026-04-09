//Section A : forEach()
/*const numbers = [2, 4, 6, 8, 10];
numbers.forEach(function(numbers){
    console.log(numbers * 2)//multiply each numbers by 2
})

//Question 2
const names = ["Esther", "John", "Ada", "Mike"];
let greetings = "Hello";
names.forEach(function(names){
    console.log("Hello " + names + "!")
})*/

//Section B: map()
/*const numbers = [1,2,3,4,5];
let newNumbers = numbers.map((x) => {;
    console.log("Square each numbers");
    return x ** 2;
}) 
console.log(newNumbers);

//Question 4
const prices = [100,200,300];
const discountedprices = prices.map(price => price * 0.9) ;//0.9 is approximated to 10% discount
   console.log(discountedprices);*/

//Questio 5 using filter()
/*const numbers = [5, 12, 8, 20, 3];
let newNumbers = numbers.filter((numbers)=>{
    return numbers > 10;
})
console.log(newNumbers);

//Question 6 using filter to return age above 18
const ages = [15, 22, 17, 30, 18];
let adults = ages.filter(function(ages){
    return ages >= 18;
})
console.log(adults);*/

//Question 7 
const numbers = [10, 15, 20, 25, 30];
let greaterNumbers = numbers.filter((x)=>{
    return x > 20;
})
console.log(greaterNumbersNumbers);
let mappedNumbers = greaterNumbers.map((x)=>{
    return x * 2;
})
console.log(mappedNumbers);