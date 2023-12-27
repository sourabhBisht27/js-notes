"use strict";


// variables can also be defined without using var. 

// prints Sourabh to console.
// firstName = "Sourabh"; 

// console.log(firstName);

// var value = 4;
// console.log(value ** 4); // prints square of 4.


// ================ let VS. var ================

// we can declare same variable twice with var, but not with let.
// var first = "Good";
// var first = "Bad";
// console.log(first);

// let second = "Up";
// let second = "Down"; 
// second = "Down";  // error: redeclaration of let second
// console.log(second);


// ============== String Methods ===================

// 1) slice(first index, second index) --> Similar to substring() method in java.
// let fName = "Sourabh";
// console.log(fName.slice(0, 4)); // Sour

// 2) typeof()
// console.log(typeof(fName)); // parenthesis are optional.
// console.log(typeof 22);

//  number --> string.
// (1)
// let num1 = 100;
// console.log(typeof (num1 + "")); // 100 will be converted to "100".

// (2)
// num1 = String(num1);
// console.log("num1: " + num1);

// string --> number.
// (1)
// let num2 = "34";
// console.log(typeof (num2 - 0)); // gives number
// console.log(typeof (num2 + 0)); // gives string

// (2)
// num2 = Number(num2);
// console.log("num2: " + typeof num2);

// (3) undefined: 
// if we declare a variable & doesn't assign it, it's type will be *undefined*
// var & let can be undefined but const can never be undefined.
// we have to assign value to const.

// let value1;
// const value2;
// console.log(value1);

// (4) null:
// console.log("type: " +  typeof null); // prints object, this is an error in js.

// (5) BigInt
// console.log(Number.MAX_SAFE INTEGER);

// BigInt can be added with BigInt only.
// let myNumber = BigInt(12); // BigInt.
// let sameMyNumber = 123n;  // also BigInt.
// console.log(myNumber+sameMyNumber);
// console.log(myNumber);




//  == VS. ===

let num1 = "7";
let num2 = 7;

// console.log(num1 == num2); // true, only checks the value of the variable.
// console.log(num1 === num2); // false, also checks the datatype of the variable.

// =================== Template String =======================

let name = "Sourabh";
let age = 21;

let about = "My name is " + name + " and age is " + age + " ";
let aboutMe = `My name is ${name} and age is ${age}`;
// console.log(aboutMe);
// console.log(about);

// (1) falsy values --> false, 0, undefined, null, ""(empty string).
// if we have these values inside an if() it will be equivalent to having false inside if().

// (2) truhy values --> all values except for falsy values are truthy values.

// let something = ""; // same for all other falsy values.

// if(something) {
//     console.log("It is truthy value!");
// } else {
//     console.log("It is falsy value!");
// }

const url = "https://sourabh.com/sourabh%20bisht";
// console.log(url.replace('%20', '-'));

// output: 
// https://sourabh.com/sourabh-bisht

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
// output:
// 10,00,000

