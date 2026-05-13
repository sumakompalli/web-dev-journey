// object
// key-value pair
// const user = {
//     name : `suma`,
//     age : 20,
//     email : "suma10@gmail.com",
//     dob : `10/02/2006`,
//     amount : 5000,
//     "home address" : "sircilla"
// } //CREATION

// console.log(user); //READ
// console.log(typeof user);

// //accessing specifically
// console.log(user.email); //READ
//behind the scene the key (name) is stored as "name"
// console.log(user["name"]);
// console.log(user["home address"]);

//CRUD: CREATE READ UPDATE DELETE

//UPDATE
//here this is insertion of new
// user.phoneNo = `9000124525`;
// console.log(user);
// //updating the existing value
// user.amount = 10000;
// console.log(user);

//deletion
// delete user.dob;
// console.log(user);

// const user = {
//     name : `suma`,
//     age : 20,
//     email : "suma10@gmail.com",
//     amount : 5000
// }
// const user2 = user; //copy by reference it means user2 and user pointing to same data 
// user2.age = 21; //changes in user also because pointing to same data 
// console.log(user);

//printing user keys
// console.log(Object.keys(user)); // creates array
// console.log(Object.values(user)); // creates array
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys);
// }
// for(let keys in user){
//     console.log(keys, user[keys]); // this is correct below one is incorrect
// }
// for(let keys in user){
//     console.log(keys, user.keys); // gives values as undefined "name undefined" "age undefined"
// }
// const user = {
//     name : `suma`,
//     age : 20,
//     email : "suma10@gmail.com",
//     amount : 5000
// }
// //object destructuring
// const{name,age} = user;
// console.log(name,age);
// //modifying
// const{name : userName, email: usermailId} = user;
// console.log(userName,usermailId);

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }

// const user = {
//     name : `suma`,
//     age : 20,
//     email : "suma10@gmail.com",
//     amount : 5000,
//     details : function(){
//         console.log(`provided all details by ${this.name}`);
//         return 100;
//     }
// }
// const ans = user.details();
// console.log(ans);

//nested object
// const user = {
//     name : `suma`,
//     age : 20,
//     email : "suma10@gmail.com",
//     amount : 5000,
//     address : {
//         city : `sircilla`,
//         state : "telangana"
//     }
// }
// console.log(user);
// console.log(user.address);
// console.log(user.address.city);
//making independent copy of user to another user2

// shallow copying
// const user2 = {...user};
// user2.name = "Mohan";
// console.log(user2);
// console.log("user1 details");
// console.log(user);
//nested objects ko no handle..see how
// user2.address.city = "dwaraka";
// console.log(user2);
// console.log("user1 details");
// console.log(user);


// deep copy
// const user2 = structuredClone(user);
// user2.name = "Mohan";
// user2.address.city = "raipur";
// console.log(user2);
// console.log("user1 details");
// console.log(user);
