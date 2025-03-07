// 7 Primitive Data types
// string, boolean, number, null, undefined, symbol, BigInt

let num =10
let float = 9.3
let name = "Anand"
let x=undefined;
let y; //undefined
let isLoggedIn=true;
let bigNumber =456789n;
console.log(typeof bigNumber);//bigint

let bigNumber1=565885686868688555n

let temp=null
let str1=Symbol('abc');
let str2= Symbol('abc');

console.log(str1===str2);//false
console.log(str1==str2);//false

// 3 Reference [Non - Premitive] Data Types
// Array, Object, Function

let student={
    name:"Anand",
    age:25
}
console.log(student);
student.age=27
console.log(student);
const employee={
    name :"Anand",
    sallary:10000
}
console.log(employee);
employee.sallary=12000
console.log(employee);

const arr = [1,2,3,4,5,6]
console.log(arr);
arr.fill(10)
console.log(arr);


let myFunction = function(){
    console.log("Function")
}
myFunction()

function fun(){
    console.log("Function -> ")
}
fun();

let myFunc = () => {
    console.log("Function My Fun");
};

myFunc()

// Stack <- Premitive Data Type
// Heap <- Non-Premitive Data Type