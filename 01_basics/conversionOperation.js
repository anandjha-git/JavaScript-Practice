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