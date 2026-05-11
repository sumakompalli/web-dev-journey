//Number
// let a = 10;
// let b = 345.68214;
// // b.toFixed(1) assigned here and printing (b) will not change the assigned value
// // so you must store in another variable like let c = b.toFixed(1);..it will give result and its 
// //type is string
// console.log(a);
// console.log(b);
// console.log(b.toFixed(2));
// // typeof b.toFixed(1) --- printing it will give you string
// console.log(b.toPrecision(5)); //345.68   4>345.6 
// //b.toString() will convert int to string

// let a = new Number(20);
// let b = 20;//type is number
// console.log(a);
// console.log(typeof(a)); //object
// let c = new Number(20);
// console.log(a==c); // false
// it can be true if we write like this let c = a;
//primitive data me data copy hotha hai and object data me references copy hota hai

// Non primitive : reference bases pe compare
// primitive : copy by value;

//console.log(Math.abs(-4));
// Math.PI;
// Math.floor;
// Math.ceil;
// Math.SQRT2;
// Math.log10(20);
// console.log(Math.floor(Math.random()*10+1)); //1 to 10
// console.log(Math.floor(Math.random()*6+1)); //1 to 6
// console.log(Math.floor(Math.random()*(25-15)+15));
//Math.floor(Math.random()*total neededoutcome(max-min+1))+shift(min)
//helps in otp generation, ludo dice