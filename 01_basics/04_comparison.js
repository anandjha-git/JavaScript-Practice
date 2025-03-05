console.log(11==22);
// console.log(01==1); // Syntax Errror
// console.log(01==01); //Syntax Error
console.log(1!=1);
console.log(2>=1);
console.log(2<=5);



console.log("2">=1);//true
console.log("02">=1);// true

//Equality
console.log(null==0); //false

//Comparison
console.log(null>0);//false
console.log(null<0);//false
console.log(null>=0);//true
console.log(null<=0);//true

/*
Equality (==) and Comparison (<,>,<=,>=) work differently.
Comparison converts null to number, treated it as 0.
That's why null>=0 and null<=0 are true null>0 and null<0 are false. 
*/

console.log(undefined == 0);//false
console.log(undefined < 0);//false
console.log(undefined > 0);//false
console.log(undefined <= 0);//false
console.log(undefined >= 0);//false

console.log(true==1);///true
console.log(false==0);///true
console.log(false==null);///false
console.log(true==null);///false

console.log(NaN==0);//false
console.log(NaN==1);//false

console.log(NaN==NaN);//false
console.log(NaN==undefined);//false
console.log(NaN==null);//false

console.log(undefined==null);//true
console.log(undefined==true);//false
console.log(undefined==false);//false
console.log(undefined==0);//false


//strictly check the value with data type. Conversion will not happen.
console.log("2"===2);//false
console.log("02"==="2");//false





