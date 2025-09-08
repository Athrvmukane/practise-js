

//about scope 
//this i called scope=> {} 

// const { use } = require("react");

// let a=10;
// const b=20;
// var c=30;

// console.log(a)
// console.log(b)
// console.log(c)

//but if i use scope  
{
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a)  //this will guve err
// console.log(b)  this will error not defiend 
console.log(c)  //this will print 30 cause var is not block scope 

console.log('........\n')

//child can acces parent function properties  in scope level 

function one(){

    const username="athrv";
    function two(){
        const website="youtube";
        console.log(username);    //child can access parent props
    }

    // console.log(website);   //cant acces cause scope ends 
    two();
}

one();

console.log('.....\n')

//if u run above code w/o commenting clg(website)  it will give error cuz i cant acces website outsite fun teo()
//but if u comment that line and call it will way athrv  i.e clg(usename);

//same thing hwppens with if blocks as well

if(true){
    const username="athrv";
    if(username=="athrv"){
        
        const website=" youtube";
        console.log(username+website);  //thus will work 
    }
    // console.log(website);    //this will give error
}

// console.log(username);   //this will give error (to test comment and check)
//so till scope const and let exist 



//+++++++++++++++++++++++++INTRESTING++++++++++++++++++

console.log(addOne(5)); 

function addOne(n){
    return n+1;
}
//this is called hoisting u can access it here u eill get 6 o/p

// addTwo(5);   //give error cause hoisting wont work with expression 

const addTwo= function(n){     //this is called expression in js const name=function(){}
    return n+2
}


//global execution context by piyush garg
//so whren u run js code  1st Global execution Context is created 
//it has two phases memory phase and code phase
//1st memory phase works followed by code phase


//what js will do it will traverse ur file  and whatever number of variable present in that file it will,
//put in memory phase  with undefined not value

//in code phase the js code is read line by line and execute code 
//from below ex in code phase when it will read 1st line it will try to print value of x and it will
//take that value frm memory phase and print:
//value of x: undefiend
//then it will move to next line and assigned x=10 and this GLE will be deleted



console.log(`value of x: ${x}`)
var x=10;    //if u use let or const here it will give u err



//ex2
 y=30;
console.log(`value of y is : ${y}`);
var y=3

//in this 1st y eill be loaded in memm phase as undefined
//the code phase will start at y=30 it will assign value and update it in mem phase
//then it will try to print value ansd it will take it from mem phase:
//vlaue of y is :30 
//in code phase it will move to next line and assigned value to y=3 in mem phase
//then GLE will be deleted


//guess output
//1
 z=30;
console.log(`value of z1  is : ${z}`);
var z=3
console.log(`value fo z2 is : ${z}`);

//with functions

console.log('GLE starts here !');

var globalvar="hi am global var"

console.log(globalvar);

globalFunction();

console.log('gloval execution ends here !');

function globalFunction(){
    console.log('inside global function')
} 


//ist in mem phase there is one var and one function
//so both will be stored in mem phase 
//var=>undefined
//func=> whole function body will be stored!!

//then code phase will start
//1st it will print GLE starts here ! 
//2nd  it will assigned globalvar="hi am global var"
//3rd it will print that var hi am global var
//4th func call as i said whole func is stire in mem phase so it will call func and print inside global function
//5th global executioin ends here as normal clg()

//ther is catch 

// globalfunc2();

var globalfunc2=function(){
    console.log('inside global 2')
}


//here as we are storing a function this time it will give u undefined
//reason -> bcuz storeing in var treated undifeined at memory phase
//if u run code it will give err saying
//globalfunc2 is not a function

//if u do clg();:

console.log(globalfunc2)   //u will get undifned and code will be like undined()   not proper wway 
//imp move this line to before fun declaration then wuill see undeinfed 



//so all these stuff above is called hoisting in js its a behaviour in js where the declaration of fun,variable 

//var Hoist ?  =>yes
//const Hoist ? => No
//let Hoist ? => No

//no its not true they all Hoist bt u will get err with let and const bcuz of TDZ
//Temporal Dead Zone

//ex 

//-----------------------------------------------
// x1=10
// console.log(x1)    //THIS AREA IS TDZ FOR X//

//------------------------------------------------

// let x1=30
// console.log(x1)

//means the area before declaring the variable will be TDZ
//both let and const will crete Global execution context 
//both will go in mem phase but in code phase it will check at what line are they being accessed if before initialize 
//they will consider TDZ and give err


//so in TDZ variable exist bt we cant access it 

