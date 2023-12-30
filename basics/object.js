// object creation

const person = {
  name: "Sourabh",
  age: 21,
  skills: ["frontend", "backend", "full-stack"],
};

// console.log(person);

// accessing data from objects:
// way - 1
// console.log(person.name);

// [ 'frontend', 'backend', 'full-stack', [ 'java' ] ]
// console.log(person.skills.push(["java"]));
// console.log(person.skills.push("java"));
// console.log(person.skills);

// way - (2)
// key will be put in "" inside the [].
// console.log(person["age"]);

// adding key-value pairs to objects

person.gender = "male";
// console.log(person);

// ============== bracket notation([]) vs dot notation(.) =================

const key = "email";
const student2 = {
  name: "Sourabh",
  age: 21,
  course: "btech",
  "roll no": 12515603120,
};

// we can't access "roll no" with dot operator like :
// person.roll no  -->  INVALID
// console.log(student2["roll no"]);

// this will print --> key: "xyz@gmail.com" instead of email: "xyz@gmail.com"
student2.key = "xyz@gmail.com";
// console.log(student2);

// this will print --> email: "xyz@gmail.com"
// so in such cases use [] notation instead of . notation
student2[key] = "xyz@gmail.com";
// console.log(student2);

// Iterating objects --> (1) for in loop(not nice but one should know), (2) Object.keys
// (1)
const student3 = {
  name: "Sourabh",
  age: 21,
  course: "btech",
  "roll no": 12515603120,
};

for (const key in student3) {
  // this will not work because it will search if there is any key in student3
  // with the name of key, which it won't find & return undefined 4 times.
  // console.log(student3.key);
  // so we use [] notation again.
  // console.log(student3[key]); // will print values only.
  // console.log(`${key} => ${student3[key]}`); // will print key as well as values.
  // OR
  // console.log(key, ":", student3[key]);
}

// (2) Object.keys -->

for (const key of Object.keys(student3)) {
  // console.log(student3[key]);
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
  [key1]: value1,
  [key2]: value2,
};

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
};

const { artistName, famousSong, age, genre } = artist;
// console.log(artistName, famousSong, age, genre);

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
];
const [user1, user2, user3] = users;
console.log(user1);
// console.log(user1.firstName);
// console.log(user3.gender);

const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);

//  ============= declaring symbols ==================
// keys can either be string or symbol
const mySym = Symbol("key1");

const newPerson = {
  name: "Sourabh",
  age: 22,
  isLoggedIn: false,
  [mySym]: "This is a symbol",
};

// [Symbol(key1)]: 'This is a symbol'
// console.log(newPerson);

// symbol
// console.log(typeof smySym);
// This is a symbol
// console.log(newPerson[mySym]);

// values won't be changed after freezing
Object.freeze(newPerson);
newPerson.name = "Superman";
// console.log(newPerson.name);

const target = { a: 1, b: 2 };
const source = { c: 3, d: 4 };

// 'source' will be pushed inside 'target'
const returnedTarget = Object.assign(target, source);

// { a: 1, b: 2, c: 3, d: 4 }
console.log(returnedTarget);
// true
console.log(returnedTarget == target);
 