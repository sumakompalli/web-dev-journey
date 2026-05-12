//Arrays


// let m1 = 20;
// let m2 = 40;
// let m3 = 60;
// let m4 = 80;
// let marks = [20,40,60,80];
// console.log(marks);
// console.log(marks.length);
// let random = [100,'a',"marks",true];
// console.log(random);
// console.log(random[1]);
// console.log(typeof random);
// random[1] = 's';
// console.log(random);

// //push at end
// random.push(40);
// random.push(`strike`);
// console.log(random);

// //pop operation delete at end
// random.pop();
// console.log(random);

// random.unshift(`suma`);
// random.unshift(50);
// console.log(random);

// random.shift();
// console.log(random);

// let arr = [10,30,50,90,11];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,30,40,50];
// let arr2 = arr;
// arr2.push(100);
// console.log(arr);

// const arr = [10,20,30,40];
// arr = [80,90,11];
// console.log(arr); //errror
// //object (non primitive) copy by reference

// //slice
// const arr = [10,20,30,40,90,46];
// console.log(arr.slice(2,4));
// console.log(arr.splice(1,3)) //[20,30,40]
// console.log(arr);//[10,90,46]
// const arr3 = arr.splice(1,3,"suma",6);
// console.log(arr);

// const arr = [10,20,30,40,50];
// const arr2 = ["rohit",11,true];
// const arr4 = [3,"suma",'d'];
// arr.push(arr2);
// console.log(arr);
// const arr3 = arr.concat(arr2);
// console.log(arr3);

// const arr3 = arr.concat(arr2,arr4);
// console.log(arr3);

// const arr3 =[arr,arr2,arr4];
// console.log(arr3);

// const arr3 = [...arr,...arr2,...arr4];
// console.log(arr3);

// const arr3 = [...arr2, "x", "y",...arr4];
// console.log(arr3);

// const names = ["raani","suma","vaishu","dinesh","suma"];
// console.log(names.toString());
// console.log(typeof names.toString());
// console.log(names.join(" "));
// console.log(names.join("-"));
// console.log(names.indexOf("suma"));
// console.log(names.lastIndexOf("suma"));
// console.log(names.includes("dinesh"));

// const names = ["raani","suma","vaishu","dinesh","Naga"];
// // names.sort();
// // console.log(names);
// names.reverse();
// console.log(names);

// const values = [100,92,45,116];
// values.sort();
// console.log(values); //[ 100, 116, 45, 92 ] it is because every value is treated as character and sorted according to ascii
// //"100","92"...

// const a = [11,2,5,90,44,89];
// a.sort((a,b) => a-b); //ascen
// a.sort((a,b) => b-a);//desc
// console.log(a);

//flattening arrays
// const arr = [10,20,30,[40,50,60],70];
// console.log(arr[3]);
// console.log(arr[3][0]);
// console.log(arr[3][1]);
// arr.flat();
// arr.flat(2);
// arr.flat(Infinity); //removes all inside brackets
