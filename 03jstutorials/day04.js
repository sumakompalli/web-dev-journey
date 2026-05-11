//Strings and Date



// const str1 = "suma";
// const str3 = `javascript`;
// const str4 = `strike
// is coming
// soon`;
// const day = 9;
// const topic = `job is coming on ${day}`;
// console.log(topic);
// console.log(str1,str3);
// console.log(str4);

// const str2 = 'Suma Kompalli';
// console.log(str2.length);
// console.log(str2[3]);
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(str2.indexOf('Kom')); // 5 if 'kom' >> -1
//const names = "Suma Kompalli Sudhishna Kompalli";
// console.log(names.lastIndexOf('Su'));
// console.log(names.includes('Kom')); // true

//slice
// console.log(names.slice(3,8));//a Kom
// console.log(names.slice(3));//a Kompalli Sudhishna Kompalli
// console.log(names.slice(-6));//mpalli
// console.log(names.slice(-6,-2));//mpal
// console.log(names.substring(2,8));
// console.log(names.substring(-3,-7));//you cant do this
// const n1 = "suma";
// const n2 = "netha";
// const c = n1 + " " + n2;
// console.log(c);
// console.log(25+"madam"+10);//25madam10
// console.log(25+40+"suma");//65suma

// const sen = `ridhin is playing in room and after reaching school playing`;
// // console.log(sen.replace('play','sleep'));
// // console.log(sen.replaceAll('play','sleep'));
// const user = " rohith ";
// const user1 = " rohit negi ";
// console.log(user1.trim());//rohit negi 
// console.log(user.trim());//rohit
// const namesall = `rahul,suma,vishwa,uma,veda,vaishu`;
// const namesall = `rahul suma vishwa uma veda vaishu`;
// console.log(namesall.split(",")); // gives output in array
// console.log(namesall.split(" "));

// const now = new Date();
// //console.log(now);
// console.log(now.toString());
// //local time
// console.log(now.toLocaleString());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getMonth()); //jan:0,feb:1;
//get full year,seconds,hours

//days: mon-sun(1 based)
//year month date hour minute second millisec
// const now = new Date(2025,8,20,8,25,16,125);
// console.log(now);
// console.log(now.toString());

//other new creation of date
// const now = Date.now();
// console.log(now);
// const dates = new Date(1778509533769);
// console.log(dates.toString());
