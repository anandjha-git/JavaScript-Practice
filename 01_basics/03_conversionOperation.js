//Conversion Into Number
let x = undefined

let num = Number(x);
console.log(x);
console.log(typeof x);
console.log(typeof (x));
console.log(num);
console.log(typeof num);

//Value, Type => Converted Value, Type
//-2.8, number => -2.8, number
//"33", string => 33,number
//"", string => 0 , number
//true, boolean => 1, number
//false, boolean => 0, number
///null, object => 0, number
//undefined, undefined => NaN (Not a Number), number
//NaN => Error

///Conversion Into String
let y = 0

let str = String(y);
console.log(y);
console.log(typeof y);
console.log(str);
console.log(typeof str);

//Value, Type => Converted Value, Type
//-2.8, number => -2.8, string
//0, number => 0, string
//"a", string => a,string
//"", string =>  , string
//true, boolean => true, string
//false, boolean => false, string
///null, object => null, string
//undefined, undefined => undefined, string
//NaN , number=> NaN, string


///Conversion Into Boolean
let z = undefined

let bool = Boolean(z);
console.log(z);
console.log(typeof z);
console.log(bool);
console.log(typeof bool);

//Value, Type => Converted Value, Type
//-2.8, number => true , boolean
//0, number => false , boolean
//"a", string => true,boolean
//"", string => false, boolean
//true, boolean => true, boolean
//false, boolean => false, boolean
///null, object => false, boolean
//undefined, undefined => false, boolean
//NaN , number=> false, boolean

// ************************Operations*************************

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(4/2);
console.log(5%2);
console.log(3**2); //9

console.log(2+"2");//22
console.log(1+2+"2");//32
console.log(2+"2"+1);//221
console.log(1+2+"2" +3);//323
console.log(1+2+"2"+2+3);//3223 -> left to right


console.log(+true);//1
// console.log(true+);//not valid
console.log(+false);//0

console.log(3+2*10/4);
console.log((3+2)*10/4);



let x2 = 3n;
const y2 = x2++;
console.log(y2); //3
console.log(x2); //4
// let x2 = n10;-> n10 is not defined
// let x2 = 2n10;-> Error

let num1=10
num1++
console.log(`num1 : ${num1}`);

let num2=15;// ";" is required if we use (num2++), bcz Cannot access 'num2' before initialization
(num2++)
console.log(`num2 : ${num2}`);

let num3=20;
// (num3++)++;  // SyntaxError: Invalid left-hand side expression in postfix operation
// ++(num3++); // SyntaxError: Invalid left-hand side expression in prefix operation
// (++num3)++; // SyntaxError: Invalid left-hand side expression in postfix operation
// ++(++num3); //SyntaxError: Invalid left-hand side expression in prefix operation
console.log(`num3 : ${num3}`);

/*
The increment operator can only be applied on operands that are 
references (variables and object properties; i.e. valid assignment targets). 
++num3 itself evaluates to a value, not a reference, so you cannot chain 
multiple increment operators together.
*/

