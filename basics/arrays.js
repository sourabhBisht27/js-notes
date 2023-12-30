// =============== Everything related to Array ==================

let fruits = ["Apple", "Mango", "Banana"];
let obj = {}; // object literal.

// console.log(typeof fruits); // prints object.
// console.log(typeof obj); // also prints object.

// so to distuinguish between array & other object types we can use this.
// console.log(Array.isArray(fruits));

// push() --> pushes the element at the end of the array.
// pop() --> removes & returns the last element in the array.
// unshift() --> adds element at the start of the array.
// shift() --> removes & returns the element at the start of the array.

// => push(), pop() are faster than shift(), unshift().


// ================= Cloning array ===================

let arr1 = ["One", "Two"];
// (1)
let arr2 = arr1.slice(0).concat(["Three", "Four"]); 


// (2)
// let arr2 = [].concat(arr1, ["Five", "Six"]);  

// (3) spread operator
// let arr1 = ["Three", "Four"];
let arr = [...arr1, "Seven", "Eight"];

let mix = [...arr, ...arr1];
// console.log("mixed array: " , mix);

// console.log(arr1 === arr2);
// console.log(arr2);

// Why we should use const to declare an array.

// let fruits = ["apple", "mango"];
// fruits = ["grapes", "papaya"] // const will not be modified

// const fruits = ["apple", "mango"];
// fruits.push("banana"); 

// lets assume initially we wanted to push "banana" into ["apple", "mango"] but someone modified
// it to ["grapes", "papaya"]. Now the result will be [ "grapes", "papaya", "banana"] instead of
// ["apple", "mango", "banana"]. But this won't happen if we use const. 
// console.log(fruits);


// ==================== Array Destructuring =====================

const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);

// let[myvar1, , myvar2] = myArray; // will store 1st & 3rd element.
let [myvarl, myvar2, ...myvar] = myArray; // we can also modify "myvar1/2".

// console.log("value of myvarl", myvarl);
// console.log("value of myvar2", myvar2);

// new array myvar will be created.
console.log("value of myvar", myvar);
