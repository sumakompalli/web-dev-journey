// //variables and datatypes

// // let name = "suma";
// // console.log(name);

// let name = "suma";
// let age = 20;
// age = 19;
// console.log(name, age);

// // const cannot change/update the value assigned to it
// const accoutNo = 2378;
// accoutNo = 5678;
// console.log(accoutNo); // throws error

//old tarika allows declaracation multiple times but "let" wont do
// var a = 10;
// //a = 40;
// var a = 50;
// console.log(a);

//datatypes
//primitive data types
// number,string, boolean, undefined, null, bigint, symbol

// number
// let a = 10;
// let b = 2.36;
// console.log(a,b);
//console.log(typeof b); //number

// //string
// let c = "learning javascript";
//let d = 'from coder army';
// console.log(c,d);
// console.log(typeof d);

// //boolean
// let login = true;
// // let secure = false;
// // console.log(login, secure);
// console.log(typeof login);

// //undefined no value assigned gives output undefined while printing
//let user;
// console.log(user);
//console.log(typeof user);
// //const p; //you cant keep const p; it will give error...value something must be assigned like const p = 10;

// //bigint
//let num = 67385795930574339n; //cannot fit in 8 bytes so use bigint dentoted by n at last place
// console.log(num);
//console.log(typeof num);

// //null   --- iam declaring myself that weather variable has "no value"
//let weather = null;
// // console.log(weather);
//console.log(typeof weather); //biggest bug of js saying datatype object
// //let weather = current_weather("sircilla");
// //25
// //null -- unable to fetch the data so no value appears
// //undefined -- this city is not existed in our database 

// //symbol 
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id2);
// console.log(id1);
// console.log(id2);
// console.log(id1 ==  id2);




// non- primitive data types typeof is object only
// array, object, function
//array------ []
//let arr = [10,20,"suma",'k',true];
// console.log(arr);
//console.log(typeof arr); //gives output object

//object------ {} creates meaning, key: value pair present
// suma 5678 20 F
// let user = {
//     name:"suma",
//     accountNo:5678,
//     age:20,
//     gender:'F'
// }
// console.log(user);
//console.log(typeof user);

//function --- you can store a function in a variable
// function print(){
//     console.log("JS boom");
// }
// print();
// let s = function print(){
//     console.log("JS boom");
// }
// // console.log(s());
// s();
//console.log(typeof s); //funtion only..but it is also object


//primitive datatype is immutable
// let a = 10; //box 10 a points it 
// a = 20; // again a new box created with box 20 and now a points it(previous box 10 pointed by a also present but now a points to 20)
// console.log(a);
// //similarly
// let str = "rohit";
// str = "mohit";
// console.log(str);
// let str = "rohit";
// console.log(str[0]);
// str[0] = 'm';
// console.log(str); // immutable

//non primitive data types are mutable type
// let arr1 = [10,20,20,40];
// arr1.push(50);
// arr1[0] = 60;
// console.log(arr1);

// let obj = {
//     name:"mohan",
//     age:20
// }
// obj.name = "rohit";
// console.log(obj.name);
// console.log(obj);

//copy by value
// let a = 10; //box a created with 10 value
// let b = a; // box b created with value 10
// b = 20; // another box created with value 20 and now b points to it
// console.log(a,b);

//reference creation /// no seperate copy created obj and obj2 points to same data of name and age
// let obj = {
//     name: "rhino",
//     age:20
// }
// let obj2 = obj;
// obj2.name = "gagan";
// console.log(obj);
// console.log(obj2);