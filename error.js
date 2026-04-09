//syntax error
//let add = (5 + 3
//console.log(add)

//Reference Error
// console.log

//Type Error
//let age = 25 
//console.log(age.toUpperCase())

/*try {
    //code that might fail goes here
    let result = 10 / 0;
    console.log(result);
    undefinedFunction(); //this will cause an error!
    console.log("this will not run.")
} catch(error) {
    //This runs ONLY if something goes wrong
    console.log("An error occured: " + error.name , error.message);
}

console.log("The program continues here. ");
*/
try{
    let age = 25
    console.log(age.length())
}catch(error){
    console.log("An error occurred: " + error.message)
}

function loadUserData(userId) {
    console.log("Starting to laod data...");
    try {
        if (!userId.startsWith("BAD")){
            throw new Error("User ID must start with BAD");
        }
        console.log("Data loaded for user: " + userId);
    } catch (error){
    console.log("Failed: " + error.message);
} finally {
    console.log("Loading complete. Closing connection."); //Always runs
}
}

loadUserData("BAD-1234");   // Data loaded for user: 5  -->  Loading complete.
// loadUserData(-1);  // Failed: User ID must be...  -->  Loading complete.