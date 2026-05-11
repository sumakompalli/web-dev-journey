// Operators Loops and conditionals
//Arithmetic
// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);
// console.log(5**3);
// console.log(5**2);

//Assignment
// let x = 20;
// let y = 10;
// x+=y;//x = x + y;
// console.log(x,y);
// x -= y //x=x-y;
// console.log(x,y);
// y = y*x;
// console.log(y);

//comparison
// let x = 20;
// let y = 10;
// console.log(x>y); // true
// console.log(x>=y); // true
// console.log(x<y); //false
// console.log(x<=y); //false
// console.log(x==y); //false
// console.log(x===y);//false
//when there is a comparsion between string and number then (string is converted to number and compared)
//so when x = 20 and y ="20" then output of x==y is true
//but in x===y first type of that two variables is checked then compared ,if type is different it gives false
// so x=20 and y="20" output of x===y is false
// let z = "10";
// let a = Number(z);
// console.log(a);
// console.log(typeof a);
// let a = "121ac";
// let b = Number(a);
// console.log(b); //output NaN(not a number)
// console.log(typeof b); //number
// console.log(0/0);//output is NaN

//console.log(Number(true));//1 similarly false to 0
//console.log(Number(null); //0
//console.log(Number(undefined)); // NaN

// number to string
// let a = 10;
// let b = String(a);
// console.log(b);
// console.log(typeof b);

// console.log(String(true)) //"true"
// console.log(typeof String(true)); //string 
// console.log(String(undefined)) //"undefined" type is string
// console.log(String(null)); //"null" type is string

// console.log(Boolean(10)); //true for -10 it is also true but for 0 it is false 
// console.log(Boolean("Hello world"));//returns true but empty string "" return false
// console.log(Boolean(undefined)); // false also for null it is false

// let a = 0.1;
// let b = 0.2;
// let c = a+b;
// console.log(c == 0.3)//false
// console.log(c); // 0.300000000000004

// rules 
// 1. null is loosely equal to undefined only
//console.log(null == undefined); // true
//console.log(null === undefined); //false
//null == ("",0,false,true) gives false
// if >,<,>=,<= ----->(null to number, undefined to NaN)
//console.log(null >= / <= 0); // true and null>0 and <0 gives false
//console.log(null >= undefined); // false
// undefined>=0 //false

//console.log("Rohit">"Mohit");//true and "Rohit">"mohit"//false compared by ascii values of first character
//10>"10" // false 10>="10"//true 
//10>=true // true, 10<true output false
// if same type, compared directly
// if two different types string with boolean etc first there are get into numbers and then compared
//console.log(NaN == NaN)// false

//for loop
// for(let i = 0;i<10;i++){
//     console.log(i);
// }
//while loop
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }
//do while
// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i<10);

// if else condition
// let age = 15;
// if(age>=18){
//     console.log("eligible for vote");
// }else{
//     console.log("not eligible");
// }
//kid young old
// let age = 20;
// if(age < 18){
//     console.log("kid");
// }else if(age>=60){
//     console.log("old");
// }else{
//     console.log("young");
// }

//logical operatior
// &&(and), ||(or)

// let a = "rohit"; // if " "; then ouput of c is blank(empty) dont check second
// let b = "mohit"; // if " "; first ouptut is true so second one print it is empty
// let c = a && b;
// console.log(c); // output is mohit bcouz a is checked true so prints the second input
// //let a =0;
// //let b = 20;
// console.log(a&&b); // 0
//&&: if first value is false then it will return the first value itself
// if first value is true it will return second value as output
// || it will opposit of &&
// if first value is true it will return the same
// if fiest value is false it will return the second

// console.log(4!=5)//true
// console.log(5!=5)//false




