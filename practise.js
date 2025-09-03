

// const accId=1212;
// let accEmail="athrv@gmail.com";
// var accPass="123";
// nodataType="fsd"
// console.log(nodataType)

// console.table([accId,accEmail,accPass]);




//hoisting :with var only (same if u chnge data type to let and var it will give err bcuz u cant use them before initialization)
console.log(a);


var a=34;


console.log(a);


//data type:
//number => 2 to power 52
//string =>""
//boolean =>T/F
//null =>standalone obj
//undefined =>value not assigned / or unassigned value
//symbol uniqueness


//obj
//typeof
console.log(typeof null);   //it will give u obj
console.log(typeof undefined); // it will give u undefined only 



//tyrp conversion
let id=33;  //its number type

let ToStringId =String(id);
console.log(ToStringId);
console.log("Number converted to String "+"Data type : "+typeof ToStringId+" value "+ToStringId);


let ToNumberId=Number(ToStringId);
console.log("String converted to number "+"Data type : "+typeof ToNumberId+" value "+ToNumberId);


//number to bool try
let num=0;
let BoolenValue=Boolean(num);  //no chnage if number 
console.log("for boolean  :: "+BoolenValue);

let str=" ";
let BoolString=Boolean(str);
console.log("For boolean in using string  ::: "+BoolString);  //for empty string its converting to false and for not empty its true 


//trying with strign that cant be number like ex: 33abc
let num3="331afa";
let num3Number=Number(num3);   //NaN not a number 
console.log("Printing num3 in nu,ber : "+num3Number);


//null to number 
let nullvalue=null
let nullasNumber=Number(nullvalue);  //gives 0  zero
console.log("Checling with null as number  : "+nullasNumber);

//undefined to number
let undefinedvalue=undefined
let undefinedasNumber=Number(undefinedvalue);   //give NaN
console.log("Checking with undefined as number  : "+undefinedasNumber);


//booelan with number conversion
//true=> 1  and false=>0
let trueval=true;
let falseval=false;
let bool1=Boolean(trueval);
let bool2=Boolean(falseval);
console.log("for true : "+bool1+ "  "+" for false "+bool2);


//operations with string IMP for interview 
console.log(1+2+"3");
console.log("3"+1+2+4+44);    //if string is 1st then all treated as string and if string is last then all before string is calucated and added to strinf at last
console.log(23+2+"a");

console.log(true);   //give true


/******************************************************
 * Equality & Comparison in JavaScript (Cheat Sheet)
 * Run this file in Node.js or browser console.
 ******************************************************/

console.log("========= 1. LOOSE EQUALITY (==) =========");

console.log(5 == "5");       
// true → "5" (string) is coerced to number → 5 == 5

console.log(0 == false);     
// true → false → 0 → 0 == 0

console.log("" == false);    
// true → "" → 0, false → 0 → 0 == 0

console.log(null == undefined); 
// true → special rule: null == undefined only

console.log([] == false);    
// true → [] → "" → 0, false → 0 → 0 == 0

console.log([0] == 0);       
// true → [0].toString() → "0" → "0" → number → 0

console.log([] == 0);        
// true → [] → "" → number → 0

console.log([1,2] == "1,2"); 
// true → [1,2].toString() → "1,2" → compare with "1,2"


console.log("\n========= 2. STRICT EQUALITY (===) =========");

console.log(5 === "5");      
// false → no coercion, number !== string

console.log(0 === false);    
// false → number !== boolean

console.log(null === undefined); 
// false → different types

console.log(42 === 42);      
// true → same type, same value


console.log("\n========= 3. OBJECT.IS() =========");

console.log(NaN === NaN);    
// false → NaN is never equal to itself with ===

console.log(Object.is(NaN, NaN)); 
// true → Object.is fixes this edge case

console.log(+0 === -0);      
// true → === treats them the same

console.log(Object.is(+0, -0)); 
// false → Object.is sees them as different


console.log("\n========= 4. COMPARISON OPERATORS =========");

console.log(10 > 2);         
// true → numeric comparison

console.log("apple" < "banana"); 
// true → string comparison (lexicographic order)

console.log("2" > "12");     
// true → both strings, "2" vs "1" at first char → "2" bigger

console.log("5" < 10);       
// true → "5" → 5 → numeric comparison 5 < 10

console.log(true < 2);       
// true → true → 1 → 1 < 2


console.log("\n========= 5. NULL COMPARISONS =========");

console.log(null == 0);      
// false → equality: null only == undefined

console.log(null < 1);       
// true → comparison: null → 0 → 0 < 1

console.log(null <= 0);      
// true → null → 0 → 0 <= 0

console.log(null >= 0);      
// true → null → 0 → 0 >= 0


console.log("\n========= 6. UNDEFINED COMPARISONS =========");

console.log(undefined == 0); 
// false → undefined only == null

console.log(undefined < 0);  
// false → undefined → NaN → comparison fails

console.log(undefined > 0);  
// false → undefined → NaN → comparison fails

console.log(undefined >= 0); 
// false → undefined → NaN → comparison fails


console.log("\n========= 7. NaN =========");

console.log(NaN == NaN);     
// false → NaN never equals anything, not even itself

console.log(NaN < 5);        
// false → comparison with NaN → always false

console.log(Number.isNaN(NaN)); 
// true → proper way to check NaN


console.log("\n========= 8. ARRAYS & OBJECTS =========");

console.log([1] == 1);       
// true → [1].toString() → "1" → "1" → number → 1

console.log([] == 0);        
// true → [] → "" → number → 0

console.log([1,2] == [1,2]); 
// false → different references in memory

let arr = [];
console.log(arr == arr);     
// true → same reference

console.log({a:1} == {a:1}); 
// false → objects compared by reference, not content



//premetive type are stored in stack and non prmetive types are stored in Heaps

//7 primitive types:
/******************************************************
 * Primitive vs Non-Primitive in JavaScript
 ******************************************************/

console.log("========= PRIMITIVE TYPES =========");

// String
let str1 = "Hello JS";
console.log(typeof str1); 
// "string" → a sequence of characters

// Number
let num1 = 42;
console.log(typeof num1); 
// "number" → integer or float

// BigInt (for very large numbers beyond Number.MAX_SAFE_INTEGER)
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); 
// "bigint"

// Boolean
let isLoggedIn = true;
console.log(typeof isLoggedIn); 
// "boolean"

// Undefined (declared but not assigned)
let x;
console.log(typeof x); 
// "undefined"

// Symbol (unique identifier, often used in objects)
let sym = Symbol("id");
let sym2=Symbol("id");
console.log(typeof sym); 
console.log(typeof sym2);
console.log("checking uniqueness...::",sym===sym2); //gives false not same 
// both "symbol"

// Null (intentional absence of value)
let nothing = null;
console.log(typeof nothing); 
// ⚠️ "object" → historical bug in JavaScript
// Should ideally be "null", but kept for backward compatibility


console.log("\n========= NON-PRIMITIVE TYPES =========");

// Object
let obj = { name: "Atharva", age: 22 };
console.log(typeof obj); 
// "object"

// Array (special kind of object)
let arr1 = [1, 2, 3];
console.log(typeof arr1); 
// "object" → arrays are technically objects

// Function
function greet() {
  return "Hello!";
}
console.log(typeof greet); 
// "function" → functions are objects but typeof gives "function"

// Date
let date = new Date();
console.log(typeof date); 
// "object"

// Null vs Empty Object
console.log(typeof null);    
// "object" (special case)
console.log(typeof {});      
// "object"



//anychanges done on primitive tpyes will be call by value i.e Copied Value
//any changes done on non primitive ones will be call by reference i.e Actual Value change

let a1 = 10;
let b = a1;  // copy value

b = 20;

console.log(a); // 10
console.log(b); // 20



let obj1 = { name: "Atharva" };
let obj2 = obj1;  // copy reference

obj2.name = "Mukane";

console.log(obj1.name); // "Mukane"
console.log(obj2.name); // "Mukane"


let arr11 = [1, 2, 3];
let arr2 = arr11;

arr2.push(4);

console.log(arr11); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]



//special string and methods

let example="Atharva mukane";
//           01234567891011
// let exmple=new String('atharva');

// console.log(exmple.slice(2,-3));
// console.log(exmple.slice(0,7));

// console.log("=== STRING.SLICE BASICS ===");
// const s = "JavaScript";

// console.log(s.slice(0, 4));     // "Java"  → [0,4)
// console.log(s.slice(4));        // "Script" → from 4 to end
// console.log(s.slice(-6));       // "Script" → length(10) + (-6) = 4
// console.log(s.slice(2, -1));    // "vaScrip" → [2, 9)
// console.log(s.slice(100));      // "" → start >= length → empty
// console.log(s.slice(4, 4));     // "" → start === end → empty
// console.log(s.slice(6, 4)); 


let exmple = new String('atharva');

/*
substring(start, end) rules:
1. Negative values → treated as 0 (unlike slice, which counts from the end).
2. If start > end → JS swaps them internally.
3. Extracts characters between start (inclusive) and end (exclusive).
*/

console.log(exmple.substring(2, -3)); 

/*
Step by step:
exmple = "atharva"
Indexes: a(0) t(1) h(2) a(3) r(4) v(5) a(6)

Call → substring(2, -3)
- "start" = 2
- "end" = -3 → treated as 0
=> substring(2, 0)

Now since start (2) > end (0), JS swaps them
=> substring(0, 2)

So we take characters from index 0 up to (not including) 2:
Index 0 = 'a'
Index 1 = 't'

✅ Final Output → "at"
*/


//to localString
const hundreds=10000000;
console.log('hundrededs '+hundreds.toLocaleString('en-IN'));


//***********************Math***************************//


console.log(Math.abs(-7)); //gives pos+ve
console.log(Math.sign(2));  //will give sign that is here pos therefore : 1
console.log(Math.sign(-2));  //will give sign that is here neg therefore : -1
console.log(Math.sign(0));   //will give sign that is here zero therefore : 0


//round,floor,ciel
//round => standard rounding 
let number1=4.7;
console.log(Math.round(number1));    //here as per standard round off => return 5

console.log(Math.floor(number1));    //here floor is situated at ground level so think down -ve =>returns 4

console.log(Math.ceil(number1));   //here ciel is at top so think like pos => returns 5

console.log(Math.trunc(number1));   //here this will remove decimal will keep in zero standard form here its will retuen=>4



//math.random will always gives value btwn 0 to 1 only
console.log(Math.floor((Math.random()*10)+1));   //this will give btwn 1 and 10


//for dynamix range  like btwn 10 and 15

const min=10
const max=15

console.log(Math.floor(Math.random()*(max - min + 1))+min);



//date default comes in mili seconds ex:21351035434343
let todaysDate=new Date();
console.log(todaysDate);
console.log(todaysDate.toString());
console.log(todaysDate.toDateString())
console.log(todaysDate.toLocaleString());   //it wi;; giove like 31/8/2025  
console.log(todaysDate.toLocaleDateString());  //same as above without time 
console.log(todaysDate.toJSON());
//type is object 
//in js month starts with 0 ex:
let myDate=new Date(2025,0,3,4,5,3);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let today=Date.now();
console.log(Date.now()/1000);


//Arrays=>data structure that stores multiple data of diff data types in js 
let myarr=[0,1,2,3,4,5];
console.log(myarr);

//arrays are always shallow copy => i.e actual refrence is used 
// learn about shallow copy and deep copy from gpt
//below example shows shallow copy
let myarr2=myarr
myarr2.push(45);       //
console.log(myarr);
console.log(myarr2);

//pop means remove from last  
myarr2.pop();
console.log(myarr);
console.log(myarr2);

//unshift insert from start 
myarr.unshift(10);
console.log(myarr);
console.log(myarr2);

//shift means remove froms tart 
myarr.shift();
console.log(myarr);
console.log(myarr2);

//using join will chnage type to string 
const stringarry=myarr.join()
console.log("after join : ",stringarry);
console.log("type of stringarry: ",typeof stringarry);


//IMP diff btwn slice and splice 
//slice => create duplicate copy and operated with (start,end) 

let arr4=[0,1,2,3,4,5];
console.log('before slice',arr4);
console.log('after slice',arr4.slice(0,3));
console.log('og arr',arr4);

let arr5=[0,1,2,3,4,5];
console.log('before splice: ',arr5);
console.log('after splice: ',arr5.splice(0,3));
console.log('og arr',arr5);



//array part 2 
const marvel_heros=["Ironman","SpiderMan","Thor"]
const dc_heros=["BAtman","Superman","Flash"];

marvel_heros.push(dc_heros);    //array will be added at last index which tells array can take anything 

console.log("printing: ",marvel_heros);


console.log("getting element from nested array: ",marvel_heros[3][1])     //will give dc_heros 's 1st element 
//unlike concat push perform on actual array is doesnt retuen any new array like concat

//concat example
const heros_=["h1","h2","h3"]
const villans=["v1","v2","v3"];

//if u do 
heros_.concat(villans);
//and log heros it wont work bcuz it retuen new array u need to store
console.log("heros after concat::",heros_);

//stoeing
const hero_n_villans=heros_.concat(villans);
console.log('printing h+v',hero_n_villans);


//another way is using spread operator what it does 
//The spread operator expands (spreads) elements of an array, object, or iterable into individual elements.


//ex
const arr12 = [1, 2, 3];
const copyArr = [...arr12]; 
console.log(copyArr); // [1, 2, 3]
//(Deep copy – doesn’t affect original)
copyArr.push(4);
console.log('copied one: ',copyArr);   //change will be here 4 will be added
console.log('og array :: ',arr12);    //here 4 will b not added
//this works for primitive types 
//if using obj in array  it will be shallow 
const shallow_copy_ex=[{a:1,b:2},{a:5,b:6}]
const copyingarr=[...shallow_copy_ex];
console.log('before change :',shallow_copy_ex)
copyingarr[0].a=0;
console.log(copyingarr);
console.log(shallow_copy_ex);   //both will be chnfges

//another usecase u can merge two arrays 

const arr13 = [1, 2];
const arr21 = [3, 4];
const merged = [...arr13, ...arr21];
console.log(merged); // [1, 2, 3, 4]


//adding number while copying
const numbers = [1, 2];
const newNumbers = [...numbers, 3, 4];
console.log(newNumbers); // [1, 2, 3, 4]


//spread with objs
const person = { name: "Atharva", age: 22 };
const copyPerson = { ...person,designation:"dev" };
console.log(copyPerson); // { name: "Atharva", age: 22,designation:"dev" }


//we can override too
const user = { name: "Atharva", age: 22 };
const updatedUser = { ...user, age: 23 }; 
console.log(updatedUser); // { name: "Atharva", age: 23 }


//using flat 
//let say u having nested nested array u can concat all them in singel arry
let other_arr=[1,2,3,4,["5","6"],7,8,9,[true,false],[{name:"athrv"}]];
let usableArray=other_arr.flat(Infinity);     //u can mention depth for flating the array here i had used infinty best practise to deal woth 

console.log('flatting array:',usableArray);

//Array.from()

// It’s a built-in JS method that:
// Converts array-like or iterable objects into real arrays.
// Can also apply a function to each element (like .map()).

//ex1
const str22='athrv';
console.log('type of str',typeof str22)
let strarr=Array.from(str22);
console.log('str arr::',strarr);
console.log('type after convert to arry::',typeof strarr);   //it will giove obj bcuz in js arrays type of is object 

//so to check
console.log('checking for true :: ',Array.isArray(strarr));

const nmbers=[1,2,3,4,5];
const sqrs=Array.from(nmbers,(i)=>i*i);

console.log(sqrs);


//imp
// ------------------------------
// Array.from with a plain object
// ------------------------------
//array.from will work for iterables who haveing lenght in it only else it assumes 0
console.log(Array.from({ name: "athrv" }));  
// [] 
// Why? Because:
// 1. Array.from needs iterable OR array-like (with length)
// 2. { name: "athrv" } has no length
// 3. Keys are not numeric (0,1,2,...)
// 4. Objects are not iterable by default
// 👉 So it behaves like Array.from({}) => []

// ------------------------------
// How to properly convert object data into array?
// ------------------------------

const objm = { name: "athrv" };

// 1. Get all values
console.log(Object.values(objm)); 
// ["athrv"]

// 2. Get all keys
console.log(Object.keys(objm)); 
// ["name"]

// 3. Get both key-value pairs
console.log(Object.entries(objm)); 
// [["name", "athrv"]]

// ------------------------------
// ✅ Key Takeaway
// ------------------------------
// - Array.from() works with iterable or array-like objects (string, Set, Map, {0:..., length:...})
// - A plain object like { name: "athrv" } is neither
// - That’s why result is []
// - Use Object.values / Object.keys / Object.entries to handle plain objects


// ------------------------------
// Array.of()
// ------------------------------
// Definition: Creates a new array from the arguments you pass.
// Difference from Array() constructor: 
//   - Array.of() always creates array with given values
//   - Array() behaves differently when you pass 1 number

// Example 1: Multiple numbers
const numsList = Array.of(11, 22, 33);
console.log("numsList:", numsList); 
// [11, 22, 33]

// Example 2: Single number
const singleNumArr = Array.of(7);
console.log("singleNumArr:", singleNumArr); 
// [7] ✅ (always wraps the number into an array)

// Compare with Array()
const arrayConstructor = Array(7);
console.log("arrayConstructor:", arrayConstructor); 
// [ <7 empty items> ] ❌ (creates empty array with length 7)

// Example 3: Mixed types
const mixedDataArr = Array.of(101, "hello", false, { user: "athrv" });
console.log("mixedDataArr:", mixedDataArr); 
// [101, "hello", false, { user: "athrv" }]

// Example 4: No arguments
const emptyCreatedArr = Array.of();
console.log("emptyCreatedArr:", emptyCreatedArr); 
// [] (empty array)

// ------------------------------
// ✅ Key Takeaway
// ------------------------------
// - Array.of(...args) → puts all arguments into a new array
// - Safer than Array() because Array() confuses single number input
// - Use Array.of() when you just want to create arrays from values

// 👉 Quick comparison
console.log("Array(4):", Array(4));     // [ <4 empty items> ]
console.log("Array.of(4):", Array.of(4));  // [4]
