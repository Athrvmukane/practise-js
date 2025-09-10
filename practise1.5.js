
//About this keyword , Arrow functions and IIFE  

const user={
    username:"athrv",
    age:22,
    userMsg:function name() { 
        console.log(`welcome ${this.username}!! `)  //here we use this keyword for current context
        console.log(this)   //{ username: 'athrv', age: 22, userMsg: [Function: name] }
    }

}

//so this will hold current context in obj form 

user.userMsg();

console.log(user.this)
//in borwsee this keyword will give u window Obj
//in node env it will ggive emptyobj  {}
//in my code its giving me undefiend dont know why do research!!

// console.log(this);  //undefined



function chai(){
    let username="athrv"
    console.log(this);   //undefined
    console.log(this.username)   //undefined it not work in function 
}

// chai();

//arrow functions
const chai2=function(){
    console.log('hi');      //just remove function and add arrow 
}

const chaii=()=>{
    console.log('arrow function ')
    console.log(this)   //here also undefined
}

chaii()

// ()=>{}   ARROW FUNCTION BODY

const addnums=(n1,n2)=>{
    return n1+n2;
}

console.log(addnums(4,5))

//there is concept of implicit return in arrow function
//if ur function is having one line return only then u can remove {}  and 'return'

const addnumber=(n1,n2)=>n1+n2    //it will work same as above arrow func

console.log(addnumber(2,3));

//one more thing when using {} use return 
//if not using return then use () not {}
//so its implicit return 

//if u r returning obj from arrow func use ({})

const addingnum=(n1,n2)=>({username:"athrv",age:23})

console.log(addingnum(1,2));



//IIFE  Immediately Invoked Function Expression
//this function onvoked automatically 
//syntax
//()()
//(here we write func)(this will call it)
//()()

(function automatically(){
    console.log('i wasnt called by uh boy!')
})();

//chatch u should end the IIFE with ';'  cuz global exe context dont know where to end this function so it will give err 

(()=>{
    console.log('Db connected ')
})();

//it also accept parameter

((name)=>{
    console.log(`hi there ${name}`)
})('athrv')