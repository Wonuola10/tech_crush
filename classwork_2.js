//using the map method, create a new array where each number is doubled
const numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map((x)=>{
    return x * 2;
})
console.log(newNumbers)

//return scores greater than or equal to 300
const scores = [250, 300, 350, 200, 400, 180, 160]
let newScores = scores.filter((scores)=>{
    return scores >= 300
})
console.log(newScores)

// get me sum of all items in the array
const sum = [2000, 3000, 400, 100, 600]
let totalSum = sum.reduce(function(accumulator,currentPrice){
    return currentPrice + accumulator
}, 0)
console.log(totalSum)

//add "green" to the end of the array and remove "red" from the array
const colors = ["blue", "yellow", "red"]
colors.push("Green")

let lastColor = colors.shift()
console.log(colors)
console.log(lastColor)

let firstColor = colors.shift()
console.log(colors)
console.log(firstColor)