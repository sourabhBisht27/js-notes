// object creation 

// const person = {
//     name: "Sourabh",
//     age: 21,
//     skills: ["frontend", "backend", "full-stack"]
// }

// console.log(person);

// accessing data from objects:
// way - 1
// console.log(person.name);
// console.log(person.skills.push(["java"]));
// console.log(person.skills);

// way - (2)
// console.log(person["age"]); // key will be put in "" inside the [].

// adding key-value pairs to objects

// person.gender = "male";
// console.log(person);

// ============== bracket notation([]) vs dot notation(.) =================

// const key = "email";
// const student = {
//     name: "Sourabh",
//     age: 21,
//     course: "btech",
//     "roll no": 12515603120,
// }

// we can't access "roll no" with dot operator like :
// person.roll no  -->  INVALID
// console.log(student["roll no"]); 

// this will print --> key: "xyz@gmail.com" instead of email: "xyz@gmail.com"
// student.key = "xyz@gmail.com";
// console.log(student);

// this will print --> email: "xyz@gmail.com"
// so in such cases use [] notation instead of . notation
// student[key] = "xyz@gmail.com";
// console.log(student);

// Iterating objects --> (1) for in loop(not nice but one should know), (2) Object.keys
// (1)
const student = {
        name: "Sourabh",
        age: 21,
        course: "btech",
        "roll no": 12515603120,
    }

for (const key in student) {
    // this will not work because it will search if there is any key in student
    // with the name of key, which it won't find & return undefined 4 times.
    // console.log(student.key);
    // so we use [] notation again.
    // console.log(student[key]); // will print values only.
    // console.log(`${key} => ${student[key]}`); // will print key as well as values.
    // OR
    // console.log(key, ":", student[key]); 
}

// (2) Object.keys --> 

for (const key of Object.keys(student)) {
    // console.log(student[key]);
}

// computed properties

const key1 = "objkey1";
const key2 = "objkey2";
const value1 = "myvalue1";
const value2 = "myvalue2";
    
// we need this output
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// way-1:
const obj1 = {
    [key1] : value1,
    [key2] : value2
}

// way-2:
const obj2 = {};
obj2[key1] = value1;
obj2[key2] = value2;
// console.log(obj2);


// ========== spread in arrays ===========

const arr = [..."12345"];
// console.log(arr);
// console.log([..."abc"]); // will spread "abc" => "a", "b", "c"
// console.log([..."123456789"]); // "1", "2", "3", "4", "5", "6", "7", "8", "9"

// in objects

const obj = { ..."abcdefghijklmno" };
// console.log(obj);
// console.log( {..."abc"} );
// console.log({...["one", "two", "three"]});

// ================ object destructuring ================

const artist = {
    artistName: "Juice Wrld",
    famousSong: ["lucid dreams", "arms and dangerous", "empty"],
    age: 21,
    yearActive: 2018,
    genre: "hip-hop",
}

const { artistName, famousSong, age } = artist;
// console.log(artistName, famousSong, age);

//  OR 

const { artistName: name, famousSong: songs, age: died, ...restProp } = artist;
// console.log(name, songs, died);
// console.log(restProp);

// ============= objects inside array ================

// very useful in real world applications
// const users = [
//     { userId : 1 , firstName : 'harshit ', gender: 'male' } ,
//     { userId : 2 , firstName : 'mohit ', gender: 'male' } ,
//     { userId : 3 , firstName : 'nitish ', gender: 'male' } ,
// ]

// for of loop(most used)
// for ( let user of users ) {
//      console.log(user);
//      console.log (user.firstName);
// }
    
// ============= nested destructuring ==================

const users = [
    { userId: 1, firstName: "harshit", gender: "male" },
    { userId: 2, firstName: "mohit", gender: "male" },
    { userId: 3, firstName: "nitish", gender: "male" },
]
const [user1, user2, user3] = users;
// console.log(user1); 
// console.log(user1.firstName);
// console.log(user3.gender);

const[{firstName: user1firstName, userId},  , {gender: user3gender}] = users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);
    