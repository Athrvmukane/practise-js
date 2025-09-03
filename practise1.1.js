
//Objects in js
//  * ----------------------------------------------------
//  * 👉 Objects are collections of key-value pairs.
//  * 👉 Keys are strings (or symbols), values can be anything
//  *    (number, string, array, object, function, etc).
//  * 👉 Almost everything in JS (except primitives) is an object.


//by defaul keys are string js convert it bydefault we dont need to use quotes in key ""

const car = {
  brand: "Tesla",        // string property
  model: "Model 3",
  year: 2024,            // number property
  isElectric: true,      // boolean property
  
  // method (function inside object)
  drive: function() {
    return "The car is driving ";
  }
};

console.log(car.brand);      // Tesla (dot notation)
console.log(car["model"]);   // Model 3 (bracket notation) //here as i said key is string, if u use : car[model]   it will give an err model not defined 
console.log(car.drive());    // The car is driving 


// ✅ Dynamic nature of objects
car.color = "Red";           // add new property
delete car.year;             // remove property
console.log(car);


// ✅ Nested Object
const user = {
  name: "Atharva",
  address: {
    city: "Mumbai",
    pincode: 400001
  }
};
console.log(user.address.city);  // Mumbai
console.log(user["address"]["city"]);

// ✅ Object with methods (functions inside object)
const person = {
  name: "Atharva",
  greet() {
    return `Hello, my name is ${this.name}`; // "this" refers to current object
  }
};
console.log(person.greet()); // Hello, my name is Atharva


//example
const Jsuser={
    name:"athrva",
    email:"atharva.mukane@lti.com",
    "full name":"Atharva Narendra Mukane"    ///here we can give key in string also bt there is way to access it
}

console.log("JsUser full name ::",Jsuser["full name"]);
//u cant acces it like :Jsuser.full name  XX


/******************************************************
 * 📝 KEY POINTS:
 * - Objects = key-value store
 * - Dot notation → obj.key
 * - Bracket notation → obj["key"]
 * - Can add/remove properties dynamically
 * - Objects can contain nested objects & methods
 ******************************************************/


//specail case to remeber

const sym=Symbol("id");

const demoUser={
    name:"demoname",
    email:"demo@gm.com",
    sym:"123"
}

//to use sym in js obj its not the perfect way if u do clg
console.log(demoUser)  //sym:123

const demo2={
    name:"demoname",
    email:"demo@gm.com",
    [sym]:"123"    //nw its not string X 
}

console.log(demo2)
//accessing that symnb
console.log(demo2.sym);   //this will give u undefined u can only access the sym using objname[key]
console.log(demo2[sym])

//we can acces obj value using dot and []
console.log(demoUser.email);
//u can override it
demoUser.email="demo@chatgpt.com";
console.log(demoUser)   //email will be chnged 

//if u dont want to chnge any thing in object u can restrict it using freeze from Object method

// Object.freeze(demoUser);    //uncomment below during revision
// demoUser.email=".....@mail.com";    //its giving err cannot redefine read-only values
// console.log("checking after freeze changes ::",demoUser)     //it wont chnge to ....@mail.com

//adding function in demoiuser
demoUser.greetings=function(){
    console.log('hello from demo user!!!')
}

