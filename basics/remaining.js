// Iterables --> on which for of can be applied.
// e.g --> string, array, sets, maps.
// #.object is not iterable.

// Array like object --> (i) have length property
//                      (ii) can be accessed via index.


// (1)Sets --> (i) can not access elements via index.
//            (ii) order is not defined.
//           (iii) no duplicates allowed.
// can not use length on sets.

const numbers = new Set([1, 2, 3]);
const words = new Set("abcd");
// console.log(numbers, words);

const items = ["item1", "item2", "item3"];
const nums = new Set();

// (i) add()
nums.add(1);
nums.add(2);
nums.add(items); // it can not be added again
// nums.add(['item4', 'item5']);
nums.add(['item4', 'item5']); // added again as an array(because it will have different memory address)
// console.log(nums);

// (ii) has()
// console.log(nums.has(1));

for (const num of nums) {
    // console.log(num);
}

// (2)Map --> (i) stores data in order
//           (ii) stores key-value pair like objects(unlike objects key can't be duplicate)

// difference b/w maps & keys
//  (i) objects can only have string or symbol as key.
// (ii) in maps you can use anything as key. like array, number, string.

const person = new Map();

// [] inside Map because it returns array
const people = new Map([["firstName", "Sourabh"], ["age", 21]]);
// console.log(people);

// (1) set()
person.set("firstName", "Sourabh");
person.set("age", 7);
person.set(1, "one");

// person.set([1,2, 3], "whatIsThis?"); // setting aray as key.
// person.set({1: "one"}, "wtfIsThis?"); // setting key-value pair as key.

// console.log(person);

// console.log(person.get("firstName")); 
// console.log(person.get("age")); 

// returns the value(one) with key "1".
// here unlike objects we won't be putting 1 inside "", because it is Number not String as in objects 
// console.log(person.get(1)); 

// console.log(person.keys());

// prints all keys in maps
for (const key of person.keys()) {
    // console.log(key);
}

// Map returns key-value pairs as array
for (const key of person) {
    // console.log(key); // returns --> [ "firstName", "Sourabh" ], [ "age", 7 ], [ 1, "one" ]
    // console.log(Array.isArray(key));
}

for(let [key, value] of person) {
    // console.log(key, value);
}

const person1 = {
    id: 1, 
    firstName: "Sourabh",
}

const person2 = {
    id: 2, 
    firstName: "Ronaldo",
}

const extraInfo = new Map();
extraInfo.set(person1, { age: 21, gender: "male" });
extraInfo.set(person2, { age: 37, gender: "male" });

// console.log(person1.id);
// console.log(extraInfo.get(person1));

// will print 21
// console.log(extraInfo.get(person1).age);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).age);
// console.log(extraInfo.get(person2).gender);

// clone using Object.assign
const obj1 = {
    key1: "value1",
    key2: "value2",
}

// old syntax of cloning, nowadays we use spread operator instead
const obj2 = Object.assign({}, obj1);
// console.log(obj2);

// this will not change obj2
obj1.key = "value3";
// console.log(obj1);


// ================ Optional chaining ====================
const user = {
    firstName: "Sourabh",
    // address: { houseNo: 1234 },
}

console.log(user?.firstName);

// it will first check if 'user' exists or not if it does then it will give it's value
// & check if 'address' exists inside it or not, if it doesn't then it will return undefined
// & won't check any further.
// #. In this case it won't check for houseNo as user.address will return undefined.
console.log(user?.address?.houseNo);