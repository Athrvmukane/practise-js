

//Functions 

//Reusabel block of code to avoid repitation work is called funcs


function sayName(){
    console.log("athrv");
}

sayName  //thie is ref
sayName()     //athrv     //execution (calling)

console.log(sayName);    //[Function: sayName]

console.log(sayName())    //athrv
                          //undefined


// What happens when you call sayName()?

// It runs console.log("athrv")

// That prints "athrv" to the console.

// But after logging, the function has no return statement.

// In JavaScript, if a function doesn’t explicitly return anything → it returns undefined.  

//exx:

function emptyFun(){}

console.log(emptyFun);   //undefoend cauz its not returning something

function sayName1(){
    console.log("athrv");
    return 2
}

console.log(sayName1());   //now 1st athrv then 2
sayName1();   //this will return only athrv not 2 cause the fun is returning it and we are not storing it so how ti will print 2??

let s=sayName1();
console.log(s)   //this will print 2


function addNums(n1,n2){
    console.log(n1+n2);
}

addNums(3,'4');  //34 convert to comman type string
addNums('4',3);  //43

console.log(1+2+'3'+'4'+5+4);

console.log('4'+3+4+2);

//taking para meters

function loggedInMessage(username){
    return `${username} just logged in!`;
}

console.log(loggedInMessage("Athrv"));

//but when u passed nothing during func call then ?
console.log(loggedInMessage());     //undefined just logged in!

//handling with if condition 

function userloggedInMsg(username){      
    if(username===undefined){            //u can also use synax   if(!username){//code//}
        console.log('please enter a username');
        return
    }
    console.log(`${username} just logged in!`);
    return;
}

console.log(userloggedInMsg());

//see u in the next part!!! 


//rest operator
function calculateCartPrize(num){
    return num;
}

console.log(calculateCartPrize(2));    //2
/// but if 
console.log(calculateCartPrize(200,300,400));  //200 it will ignore rest arguments so:

function cartPrize(...num){     //with functions these 3 dots called rest operator
    return num;
}
console.log(cartPrize(200,300,400)) ; //it will return [200,300,400];

//functions with oject

const user={
    username:"athrv",
    email:"athrv@gmail.com"
}

function funcWithObjects(anyobj){
    return `user : ${anyobj.username}  logged in with mail: ${anyobj.email}`
}

// console.log(funcWithObjects(user));
//u can also directly pass obj
console.log(funcWithObjects({
    username:"athrv",
    email:"athrv@gmail.com",
    age:22
}));







//call backs:

// ✅ Callback Function
// A callback function is a function that is passed as an argument to another function
// and is executed inside that function when a certain event or condition happens.

// ➤ Why use callbacks?
// - To handle asynchronous tasks (like API calls, timers)
// - To perform an action once another function is done
// - To avoid repeating code by making functions reusable

// ➤ Callbacks are functions passed as arguments to other functions

// ➤ Important concepts:
// - The callback is not executed immediately
// - It’s invoked by the outer function
// - It allows flexible, dynamic behavior in functions

// ➤ Callback Example 1: Simple usage

function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Calling the callback function after greeting
}

function askQuestion() {
    console.log("How are you today?");
}

// Call greetUser with "John" and askQuestion as callback
greetUser("John", askQuestion);

// Output:
// Hello, John!
// How are you today?

// ➤ Notes:
// - greetUser takes name and a callback function
// - askQuestion is passed but not called immediately
// - It’s called when greetUser invokes it inside its body


// ➤ Callback Example 2: Using anonymous function as callback

function showMessage(message, callback) {
    console.log(message);
    callback();
}

// Directly pass an anonymous function as callback
showMessage("This is a message!", function() {
    console.log("Callback executed!");
});

// Output:
// This is a message!
// Callback executed!

// ➤ Notes:
// - Functions can be passed directly without defining separately
// - Useful for one-time tasks or events


// ➤ Callback Example 3: Asynchronous behavior with setTimeout

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback(); // callback executed after 2 seconds
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);

// Output:
// Fetching data...
// (wait 2 seconds)
// Data fetched!
// Processing data!

// ➤ Notes:
// - setTimeout simulates a delay or asynchronous operation
// - processData runs only after data is fetched


// ➤ Callback Example 4: Array operation – map()

const numbers = [1, 2, 3, 4];

const squares = numbers.map(function(num) {
    return num * num;
});

console.log("Squares:", squares);

// Output:
// Squares: [1, 4, 9, 16]

// ➤ Notes:
// - map() takes a callback function that processes each array element
// - Here, we squared each number


// ➤ Callback Example 5: Error handling callback pattern

function performTask(successCallback, errorCallback) {
    const isSuccess = Math.random() > 0.5; // Randomly succeed or fail

    if (isSuccess) {
        successCallback("Task completed successfully!");
    } else {
        errorCallback("Task failed!");
    }
}

function onSuccess(message) {
    console.log("Success:", message);
}

function onError(message) {
    console.error("Error:", message);
}

performTask(onSuccess, onError);

// Output example 1:
// Success: Task completed successfully!

// Output example 2:
// Error: Task failed!

// ➤ Notes:
// - Callbacks can be used to handle success and failure cases
// - This pattern is common in APIs and event-driven programming


// ✅ Summary Notes

// 1. A callback is a function passed into another function as an argument
// 2. It’s executed after the outer function finishes or at a specific point
// 3. Callbacks are useful for asynchronous tasks, event handling, and reusability
// 4. You can pass named functions or anonymous functions as callbacks
// 5. Common use cases: array methods (map, filter), timers (setTimeout), API requests, error handling
// 6. Avoid “callback hell” by using Promises or async/await for better readability



