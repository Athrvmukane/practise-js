
//How JS Work behind the scene

//js execution context

//global execution context
//diff for browser and node env


//other is functional execution context
//eval execution context   (mongo db)



/**
 * Global Execution Context (GEC)
 *
 * The GEC is the fundamental environment where all of your JavaScript code runs.
 * It is the very first execution context that is created when the JavaScript engine
 * starts running your script.
 *
 * It is created in two distinct phases:
 * 1. The Memory Phase (also known as the Creation Phase)
 * 2. The Execution Phase
 */

// --- The JavaScript Code to be Analyzed ---
// This is a simple script that will be processed by the GEC.
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 7);
console.log(result1)
console.log(result2)

/**
 * --- 1. The Memory Phase ---
 *
 * During this phase, the JavaScript engine scans the entire code and allocates
 * memory for all variables and functions. Nothing is executed yet.
 *
 * - Variables: Are assigned the value 'undefined' as a placeholder.
 * - Functions: Are stored in their entirety in memory.
 *
 * Think of it as the engine preparing a list of all variables and functions
 * it will encounter, and reserving a spot for each one.
 *
 * Memory Snapshot after this phase:
 * val1 -> undefined
 * val2 -> undefined
 * addNum -> <f: addNum> (The function's code is stored)
 * result1 -> undefined
 * result2 -> undefined
 */

/**
 * --- 2. The Execution Phase ---
 *
 * In this phase, the engine executes the code line by line, from top to bottom.
 * It replaces the 'undefined' placeholders with their actual values.
 *
 * When a function is called, a new, local Execution Context is created for it.
 * This new context also goes through its own Memory and Execution phases.
 * After the function finishes executing, its execution context is destroyed.
 *
 * Step-by-step execution:
 *
 * 1. `let val1 = 10;`
 * - The value `10` is assigned to `val1`. The `undefined` placeholder is replaced.
 * - Memory state: val1 = 10
 *
 * 2. `let val2 = 5;`
 * - The value `5` is assigned to `val2`.
 * - Memory state: val2 = 5
 *
 * 3. `function addNum(num1, num2)`
 * - This line is skipped in the execution phase, as the function has already
 * been placed in memory.
 *
 * 4. `let result1 = addNum(val1, val2);`
 * - The `addNum` function is called with arguments `10` and `5`.
 * - A new Execution Context for `addNum` is created.
 * - Its Memory Phase: `num1` -> 10, `num2` -> 5, `total` -> undefined.
 * - Its Execution Phase: `total` is calculated as `10 + 5 = 15`. The value is returned.
 * - The returned value `15` is assigned to `result1`.
 * - Memory state: result1 = 15
 *
 * 5. `let result2 = addNum(10, 7);`
 * - The `addNum` function is called again.
 * - A new Execution Context is created for this second call.
 * - Its Memory Phase: `num1` -> 10, `num2` -> 7, `total` -> undefined.
 * - Its Execution Phase: `total` is calculated as `10 + 7 = 17`. The value is returned.
 * - The returned value `17` is assigned to `result2`.
 * - Memory state: result2 = 17
 *
 * This two-phase model ensures that JavaScript can correctly handle variable
 * and function declarations regardless of where they are placed in the code
 * (a concept known as "hoisting").
 */



//CONTROL FLOW IN JS


if(true){
    //this will work as its condition is truje
}

if(false){
    //this will  not work as its condition is false
}

//we use diff operator for comparision
//<,>,>=,<=,==,===,!=(not equals)

//switc case

const moth=4;
switch (moth) {
    case 1:
        console.log('jan')
        
        break;

    case 2:
        console.log('feb')
        
        break;    

    case 3:
        console.log('march')
        
        break;

    case 4:
        console.log('april')
        
        break;

    case 5:
        console.log('may')
        
        break;

    case 6:
        console.log('june')
        
        break;

    default:
        break;
}


//truthy and falsey values

const username="athrv"

if(username){
    console.log('user access avail')    //this will be printed
}else{
    console.log('dont have access')
}

//in the above code if u use empty string like username=""  then print else block
//empty array=> true 
//empty string =>false


//falsy value
// false,
// 0,
// -0,
// BigInt 0n,
//"",   empty string
//null
//undeinfed
//Nan 

//rest are considerd truthy values 

//truthy 
//"0"
//'false'
//" "  (space)
//[]   empy arr
//{}
//function(){}     empty function


//checking arry empty

const arr=[]

if(arr.length===0){
    //empty
    console.log('arr is emty')
}

let emptyObj={}

if(Object.keys(emptyObj).length===0){
    //empty obj
    console.log('obj is empt')
}


/**
 * The Nullish Coalescing Operator (??)
 *
 * The nullish coalescing operator (??) is a logical operator that returns its right-hand side
 * operand when its left-hand side operand is `null` or `undefined`. Otherwise, it returns
 * its left-hand side operand.
 *
 * This operator provides a way to define a default value for a variable, but with more
 * precision than the logical OR operator (||).
 */

// Example 1: `??` vs `||` with `null` and `undefined`
// In these cases, both operators behave the same way because `null` and `undefined` are both "falsy" values.
let userName = null;
let defaultName = 'Guest';

// Using logical OR (||)
let displayNameOr = userName || defaultName;
console.log(`Using ||: ${displayNameOr}`); // Output: Using ||: Guest

// Using nullish coalescing (??)
let displayNameNullish = userName ?? defaultName;
console.log(`Using ??: ${displayNameNullish}`); // Output: Using ??: Guest

// Example 2: The key difference
// This is where `??` shines. It treats `0`, `''`, and `false` as valid, non-nullish values.
let userCount = 0;
let defaultCount = 10;

// Using logical OR (||)
// The || operator will return the default value because `0` is a "falsy" value.
let displayCountOr = userCount || defaultCount;
console.log(`Using ||: ${displayCountOr}`); // Output: Using ||: 10

// Using nullish coalescing (??)
// The ?? operator will return `0` because `0` is not `null` or `undefined`.
let displayCountNullish = userCount ?? defaultCount;
console.log(`Using ??: ${displayCountNullish}`); // Output: Using ??: 0

// Example 3: With an empty string
let userRole = '';
let defaultRole = 'User';

// Using logical OR (||)
// The || operator will return 'User' because an empty string is "falsy".
let displayRoleOr = userRole || defaultRole;
console.log(`Using ||: ${displayRoleOr}`); // Output: Using ||: User

// Using nullish coalescing (??)
// The ?? operator will return '' because it's not `null` or `undefined`.
let displayRoleNullish = userRole ?? defaultRole;
console.log(`Using ??: ${displayRoleNullish}`); // Output: Using ??: 

/**
 * Summary
 *
 * Use the nullish coalescing operator (??) when you specifically want to check
 * for `null` or `undefined` and not other falsy values like `0`, `false`, or `''`.
 *
 * Use the logical OR operator (||) when you want a default value for any
 * falsy value.
 */


//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element===4){
        console.log('4 is best number')
    }
    console.log(element);
    
}


//nested loop

for(let i=0;i<10;i++){
    console.log("outer loop: ",i)
    for(let j=0;j<10;j++){
        console.log('inner loop: ',j);
    }
}
 
//break and continue 
//break will terminate the scope or loop
//continuw will skip the iteration

for (let index = 0; index < 10; index++) {
    if(index===5){
        console.log('5 detected');
        break;
    }
    console.log('num is ',index);
    
}


for (let index = 0; index < 10; index++) {
    if(index===5){
        console.log('5 detected so skiped ' );
        continue
    }
    console.log('num is ',index);
    
}


//while loop

let i=0;
while(i<10){
    console.log('nums is : ',i);
    i=i+2
}

//do - while

//this loop 1st line will be execute always
let j=0;
do{
    console.log('hi i will; execute without 1st condition check')
}while(false);


do{
    console.log('num is : ',j);
    j=j+2

}while(j<10)


//for of
//scenario will be like:
//["","",""]   array of string
//[{},{},{}]   array of objects

//u can use for of on arrays string objs

const arry=[1,2,3,4,5]

for (const i of arry) {
    console.log('elemt in array : ',i)
}

//on string
const str="hello world";
for (const char of str) {
    console.log(`each char : ${char}`)
}


//obj
const user = {
    name: "Atharva",
    age: 22,
    city: "Pune"
};

// Object.keys() gives an array of keys → ['name', 'age', 'city']
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// Output:
// name: Atharva
// age: 22
// city: Pune

//map ds
const mp=new Map();
mp["name"]="athrv";   ///this aslo wonk work 

mp.set("age","22")

for(let key of mp.keys()) {
  console.log(`value of ${key} : ${mp.get(key)}`);    //doont use mp[key] this not woek in js map
}

//diff ways in map 
const mp1=new Map([
    ["name","athrv"],
    ["age",23],
    [{id:1},"custom obj"]

])

for (const key of mp1) {
    console.log(`key : ${key} value : ${mp1.get(key)}`)
}


//the above code is wrong :

//explanation:

// Map Example with Detailed Notes

// ➤ A Map stores key-value pairs where keys and values can be of any type.
// ➤ When iterating over a Map, each entry is a [key, value] pair (array).

// Create a Map with different types of keys
const sampleMap = new Map([
    ["city", "New York"],            // String key
    ["population", 8000000],        // String key with number value
    [{ id: 1 }, "metadata object"]   // Object key
]);

// Incorrect way: iterating without destructuring
console.log("Incorrect Iteration Output:");
for (const entry of sampleMap) {
    // entry is an array [key, value]
    console.log(`key : ${entry} value : ${sampleMap.get(entry)}`);
    // The key gets printed as a string, but lookup fails → undefined
}

// Correct way: destructuring the entry into key and value
console.log("\nCorrect Iteration Output:");
for (const [key, value] of sampleMap) {
    console.log(`key : ${key} value : ${value}`);
    // Now key and value are accessed properly
}

// Notes:
// ➤ Use destructuring [key, value] when looping over a Map.
// ➤ Without destructuring, 'entry' is an array, not the actual key.
// ➤ map.get(entry) fails because the array is not the original key.
// ➤ Maps use reference equality, so objects and arrays must be the exact same reference.
// ➤ This allows Maps to have complex keys like objects or arrays.

// Additional useful methods:
// Get all keys → sampleMap.keys()
// Get all values → sampleMap.values()
// Get all entries → sampleMap.entries()

console.log("\nKeys:");
for (const key of sampleMap.keys()) {
    console.log(key);
}

console.log("\nValues:");
for (const value of sampleMap.values()) {
    console.log(value);
}

//map always store unique values in js and in same order as they inserted 

const countries=new Map()

countries.set("IN","India")
countries.set("US","Unites States Of America")
countries.set("FR","France")
countries.set("IN","India")    //here we are adding duplicate entry lets see in log

console.log('counteries: ',countries)
//output:
// counteries:  Map(3) {
//   'IN' => 'India',
//   'US' => 'Unites States Of America',
//   'FR' => 'France'
// }


//this will not work in case objects

let myObj={
    game1:"GTA",
    game2:"NFS"
}

// for (const [k,v] of myObj) {
//     console.log(k,"=>",v);
// }
//TypeError: myObj is not iterable


///there are diff ways to iterate over map we will see in next code files


//for in 
//its not like it work for objs only we can use it for diff ds as well

let obj={
    cpp:"C++",
    js:"JavaScript",
    py:"python",
    //py:"pythonse" //  u cant have duplicate key in obj too
}

for (const key in obj) {
    console.log(key);
}
//this will print keys: 
//cpp
// js
// py

for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`)
}


//for in on map ? countries
for (const key in countries) {
    console.log(`keys : ${key}`)
}

//no err bt nothing prints

let arr4=[1,2,3,4,5];

arr4.forEach((i)=>{
    console.log(i)
})


//foreach only used on arrays:
const objs=[{name:"Athrv",age:24},{name:"athrv2"},{name:"athrv3"},{name:"athrv4"},{name:"Athrv",age:23}]
let objs1=['cpp','js','py']

objs.forEach((i)=>{
    console.log('names: ',i.name);
})

//for each loop dont runs on objects 
//it will give error in below code if u use objs instead of objs1 u can try it
//foreach doesnt return anything demo:

let values=objs1.forEach((i)=>{
    console.log(i);
    return i
})

console.log('trying to store values using foreach loop: ',values); //trying to store values using foreach loop:  undefined


//filter
//used on arrays 
//as u cant use foreach to store we can use filter too

//ex

const nums=[1,2,3,4,5,6,7,8,9,10];

let bigger=nums.filter((i)=>{
    return i>5
})

//filter alwats return aray so we are storing in new var and checking


console.log('filtered big nums grater than 5 : ',bigger)




// let arr345=objs.filter((i)=>{
//     return i.name==="Athrv"
// })

// console.log(arr345)

// practiceFilter.js

// ➤ FILTER PRACTICE EXAMPLES

// Example 1: Array of Books
const books = [
    { title: "JavaScript Basics", author: "John Doe", year: 2015, available: true },
    { title: "React Guide", author: "Jane Smith", year: 2019, available: false },
    { title: "Advanced Node", author: "John Doe", year: 2021, available: true },
    { title: "CSS Mastery", author: "Alex Brown", year: 2018, available: true }
];

// Exercise:
// ✅ Filter books published after 2018
// ✅ Filter books written by "John Doe"
// ✅ Filter books that are currently available


// Example 2: Array of Users
const users = [
    { name: "Alice", age: 28, isActive: true },
    { name: "Bob", age: 22, isActive: false },
    { name: "Charlie", age: 34, isActive: true },
    { name: "David", age: 19, isActive: false }
];

// Exercise:
// ✅ Filter users who are active
// ✅ Filter users older than 25
// ✅ Filter users younger than 30 and active


// Example 3: Array of Movies
const movies = [
    { name: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { name: "The Dark Knight", genre: "Action", rating: 9.0 },
    { name: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
    { name: "Joker", genre: "Drama", rating: 8.5 }
];

// Exercise:
// ✅ Filter movies with rating higher than 8.7
let rate=movies.filter((movie)=>{
    return movie.rating>8.7
})
console.log('rating more than 8.7: ',rate);
// ✅ Filter Sci-Fi genre movies
let sci_fi=movies.filter((movie)=>{
    return movie.genre==="Sci-Fi"
})
console.log('sci fi : ',sci_fi);
// ✅ Filter movies not of genre "Action"
let notAction=movies.filter((movie)=>{
    return movie.genre!=="Action"
})
console.log('not action: ',notAction)

// Example 4: Array of Products
const products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Smartphone", price: 499, inStock: false },
    { id: 3, name: "Tablet", price: 299, inStock: true },
    { id: 4, name: "Monitor", price: 199, inStock: false }
];

// Exercise:
// ✅ Filter products that are in stock
let stock=products.filter((product)=>{
    return product.inStock==true
})
console.log('products that are in stock: ',stock);
// ✅ Filter products with price greater than 300
let Rate300=products.filter((product)=>{
    return product.price>300
})
console.log('products with price greater than 300: ',Rate300);

// ✅ Filter products that are either out of stock or priced below 300
let condition=products.filter((prod)=>{
    return prod.inStock==true && prod.price<300
})

console.log("products with price greater than 300: ",condition)


// ➤ Notes:
// - Use .filter() on each array to find items that match the given criteria
// - Try solving one exercise at a time
// - Remember to use proper comparison operators like ===, >, etc.
// - Don't modify the original array


// practiceMapVsFilter.js

// ✅ Difference between map() and filter()

/*
1. map():
   ➤ Used to transform each element in an array.
   ➤ It applies a function to every element and returns a new array with the transformed elements.
   ➤ The length of the output array is always the same as the input array.
   ➤ Example use case: Convert temperatures from Celsius to Fahrenheit, extract names, etc.

2. filter():
   ➤ Used to select certain elements from an array based on a condition.
   ➤ It applies a test function to every element and returns a new array containing only elements that pass the test.
   ➤ The length of the output array can be less than or equal to the input array.
   ➤ Example use case: Get all users above age 25, filter tasks that are incomplete, etc.
*/

// Example demonstrating both:

const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubled = numbers.map(num => num * 2);
console.log("Using map to double:", doubled); // [2, 4, 6, 8, 10]

// Using filter to select even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log("Using filter to get evens:", evens); // [2, 4]


// ✅ Are map() and filter() shallow copies or deep copies?

/*
➤ Both map() and filter() create a new array, but:
   ➤ The elements inside the new array are the same objects as those in the original array.
   ➤ This means they create a shallow copy, not a deep copy.
   ➤ If the elements are objects, changes to them will reflect in both the original and new arrays.

Example to prove shallow copy:
*/

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 }
];

// Using map
const mappedUsers = users.map(user => user);

// Using filter
const filteredUsers = users.filter(user => user.age > 20);

console.log("Mapped users before change:", mappedUsers);
console.log("Filtered users before change:", filteredUsers);

// Modify the original array's first user
users[0].name = "Changed Alice";

console.log("Mapped users after change:", mappedUsers);
// Output shows "Changed Alice" because the object reference is the same.

console.log("Filtered users after change:", filteredUsers);
// Output shows "Changed Alice" for the same reason.

// ✅ Conclusion:
// ➤ map() and filter() produce new arrays (new references),
//    but the elements inside are shallow copies (same references if objects).
// ➤ To avoid unintended mutations, deep copy techniques like structuredClone()
//    or other utilities should be used when necessary.
