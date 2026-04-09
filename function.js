//function functionName(){
//  //code to be executed
// }

//without parameter
function greet(){
    console.log("Welcome back, Esther!")
}

greet()

//with Parameter
function fareWell(name){
    console.log("see you again" + name)
}

fareWell(" Esther")



//let x = 5
//let y = 10
//console.log(x + y)

function add (){
    let a = 5
    let b = 10
    console.log(a)
    console.log(b)
    return a + b
}
console.log(add())


function addition(a , b){
    return a + b
}
console.log(addition(2 , 3))
console.log(addition(10 , 20))

function isAdult(age){
    return age >= 18
}
console.log(isAdult(20))
console.log(isAdult(16))