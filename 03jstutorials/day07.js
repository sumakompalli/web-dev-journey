// Functions

//function declaration
// function greet(name){
//     console.log("this is "+name);
//     console.log(`Hello, ${name}`);
// }

// greet("SUMA");

// function multiply(a,b){
//     return a*b;
// }
// const ans = multiply(20,3);
// // console.log(multiply(20,3));
// console.log(ans);

// function add(a,b){
//     return a+b;
// }

// console.log(add(10,20,30,40,50)); // 30
//where 30,40,50 goes
function add(a,b,...restOfParameters){
    console.log(restOfParameters); //[ 30, 40, 50 ] array stored
    return a + restOfParameters[0]; //if you want all sum iterate with for of loop
}

console.log(add(10,20,30,40,50));

//callback function
function sayBye() {
    console.log("Bye!");
}

function doSomething(callback) {
    console.log("Doing work...");
    callback();
}

doSomething(sayBye); 