

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










