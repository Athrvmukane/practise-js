

//Objects part 2
//singleton objects in js (using ctor)

const user=new Object();   //this is called singleton obj
console.log(user);   //u will get empty object {}


user.id="124c";
user.name="sam";
user.isLoggedin=false;


const someUser={
    email:"some@gmail.com",
    fullname:{
        usefullname:{
            fisrtName:"Atharva",
            lastName:"Mukane"
        }
    }
}

console.log(someUser.fullname);
console.log(someUser.fullname.usefullname)
console.log(someUser.fullname.usefullname.fisrtName)   //diff levels of accessing objects


//just like spread to copy objects there is other functionality in js
const obj1={
    name:"obj1",
    age:13
}
const obj2={
    name:"obj2",
    age:24
}
//there is a catch   for the above example the below line will give o/p:
//{name:"obj2",age"24""}
//why?  bcuz it overrides key and values having common fields : name,age
//Object.assign(target,source)  ::syntax
const objmerged=Object.assign(obj1,obj2);
// copied both obj how they look: { name: 'obj2', age: 24 }
// 👉 Problem: You lost the original obj1 values because it got mutated.(override)
console.log("copied both obj how they look: ",objmerged);   //{ name: 'obj2', age: 24 }

console.log("obj1::",obj1);   //this will give obj1:: { name: 'obj2', age: 24 }  bcuz it got mutated 

obj1.name="obj1";
obj1.age=3;
console.log("new obj1 ::",obj1)

//to avoid this we use 

const objmerged1 = Object.assign({}, obj1, obj2);
console.log(objmerged1); // { name: "obj2", age: 24 } but values not mutated in og obj1 if u print u ll see the difference 

//now if we print obj1 its not mutated

console.log("obj1 after using {} in Objecct.assign()::",obj1)  // { name: 'obj1', age: 3 }


//but if we use diff fields it will work like spread it will merge two objs 
//ex:
const obj3={
    1:"a",
    2:"b"
}

const obj4={
    3:"c",
    4:"d"
}

const mergeObjs=Object.assign(obj3,obj4);
console.log(mergeObjs)   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//but still best way is to use spread operator
const obj5={...obj1,...obj2,...obj3,...obj4};
console.log('using pread obj merged:::',obj5)   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', name: 'obj2', age: 24 }
//bcuz obj1,obj2 uses same field names thats why obve output

const userss=[
    {
        id:"1",
        age:2
    },
    {
        id:"1",
        age:2
    },
    {
        id:"1",
        age:2
    },
    {
        id:"1",
        age:2
    },
];

//array of objs
console.log(userss)
console.log(userss.map(e=>e.age=4))
console.log(userss.map(e=>e));



const objexample={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4"
};

//Printing Keys and Values
console.log("printing keys of objects::",Object.keys(objexample));
console.log("printing values of objects::",Object.values(objexample));

//using objs.entries() =>  will give u arrays of keys and value

console.log("printing entries of objects ::",Object.entries(objexample));

// printing entries of objects :: [
//   [ 'key1', 'value1' ],
//   [ 'key2', 'value2' ],
//   [ 'key3', 'value3' ],
//   [ 'key4', 'value4' ]
// ]

///to check if key exists
console.log('checking if key (property) exists in object or not::',Object.hasOwnProperty('objexample'));
//object hasOwnProperty('takes string as arg');  return boolean

