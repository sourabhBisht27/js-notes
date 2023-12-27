// prints NaN
// console.log(undefined + undefined);
// console.log(2 + 3 + undefined);

// #. function expression
// const greeting = function() {
//     console.log("Good Morning");
// }

// greeting();

// #. Arrow functions
// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// const ans = sum(10, 20);
// console.log(ans);

// when there is only one argument we can exclude the ().
// if we have zero arguments we still have to include ().
// const wish = name => {
//     return `Happy birthday ${name}`;
// }

// it can also be done as:
// const wish2 = name => `Happy birthday ${name}`;
// console.log(wish2("Sourabh"));

// ========= hoisting ==========

// In case of function declarations, a function can be called before declaring.
// But it can't be done with *function expressions* or *arrow functions*.

// (i) can do this
// hello();

// function hello() {
//     console.log("Hello WRLD");
// }

// (ii) can't do this(reason --> arrow func)
// yoo();

// const yoo = name => `${name} bro`;
// console.log(yoo("hello"));

// #. prints undefined in case of var(due to global execution context) & gives error in case of let, const.
// console.log(hello); 
// var hello = "Hi";


// Immediately Invoked Function Expressions(IIFE)

// It is used to remove the pollution of global scope variables.
// this is also called name IIFE
(function chai() {
    console.log(`DB connected`);
})();
// this function gets invoked immediately but doesn't know where to stop 
// so a ; is req after the () to end the execution of function.

((name) => {
    console.log(`DB connected ${name}`);
})('Sourabh');

// ================== functions inside function ==================
// const app = () => {
//     const myFunc = () => {
//         console.log("function inside function");
//     }

//     const add = (n1, n2) => n1 + n2;

//     console.log("inside app");
//     myFunc();
//     console.log(add(5, 10));
// }

// app();

// let & const --> block scope
// var --> function scope

// (1) default param
// if we don't pass any value for b it takes 0 as default value
// else it will take the value passed in the argument.
// function add(a, b = 0) {
//     return a + b;
// }

// console.log(add(4)); // prints 4

// (2) rest param
// if we pass more than 3 arguments, they all will be stored in "c" as an *array*.
// function rest(a, b, ...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(`c is`, c); // prints array 
// }

// rest(1, 2, 3, 4, 5, 6, 7, 8);

// function addAll(...numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         total = total + number;
//     }
//     return total;
// }

// console.log(addAll(1, 2, 3, 4, 5));


// param destructuring(react)
// used with objects

// const person = {
//     firstName: "Sourabh",
//     gender: "male",
//     age: 500,
// }
    
// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// function printDetails({firstName, gender, age}) {
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);


// ===================== Callback functions(..HIGHER ORDER FUNCTIONS..) =====================

function myFunc2() {
    console.log ("inside my func 2");
}
   
// #. by convention when we pass func inside a func we name it "callback".
function myFunc1(callback) {
    // callback can be anything but this particular line makes it a function.
    callback();
}

myFunc1(myFunc2);

// ===================== functions returning function(..HIGHER ORDER FUNCTIONS..) =====================

// when we accept function as an argument inside a function or return a function 
// it is known as HIGHER ORDER FUNCTIONS.
function myFunc() {
    // return function hello() {
    //     return 'hello WRLD';
    // }

    // OR
    return () => `hello WRLD`;
}
 
// #. ans will be converted to a function because myFunc() is returning a function to the ans. 
const ans = myFunc();
// console.log(ans()); 
    
