// ============== this keyword =================
// const user = {
//     firstName: "Sourabh",
//     age: 21,
//     about: function() {
//         console.log(`my name is ${this.firstName} & age is ${this.age}`);
//     }
// }

// user.about();

function personInfo() {
    console.log(`my name is ${this.firstName} & age is ${this.age}`);
}

const person1 = {
    firstName: "Sourabh",
    age: 21,
    about: personInfo,
}
const person2 = {
    firstName: "Ronaldo",
    age: 37,
    about: personInfo
}
const person3 = {
    firstName: "Messi",
    age: 35,
    about: personInfo,
}

// person1.about();
// person2.about();
// person3.about();

// ============ window object ==============

// returns window object
// console.log(this);
// console.log(window); // this === window

function myFunc() {
    console.log(this);
}

// window.myFunc();

// (1) call() 

// we can also write this function inside the object & call it by 
// writing user1.about.call(user1/2/3, "...", "...")
function about(hobby, favArtist) {
    console.log(this.firstName, this.age, hobby, favArtist);
}

// const user1 = {
//     firstName: "Sourabh",
//     age: 21,
// }
const user2 = {
    firstName: "Juice",
    age: 24,
}
const user3 = {
    firstName: "Halsey",
    age: 28,
}

// about.call(user1, "football", "Juice WRLD");

// (2) apply()
// similar to call, instead of taking arguments separately it takes it as array
// about.apply(user2, ["freestyle", "Tupac"]);

// (3) bind() --> returns a function which can be used later
const func = about.bind(user3, "painting", "Nirvana");
// func();

// =========== mistake not to be doing =============
const newUser = {
    firstName: "Coldplay",
    age: 37,
    about: function() {
        console.log(this.firstName, this.age);
    }
}

const newFunc1 = newUser.about;
// #.this will print undefined undefined because here this will return window object which
// does not have a firstName or age. 
// newFunc1();

// So to resolve this 
const newFunc2 = newUser.about.bind(newUser);
// #.this will work just fine.
// newFunc2();

// ========== arrorw functions & this =============
// arrow functions doesn't have their own this so it will look for an object outside of 
// user1 & find the window object. Hence output ==> undefined undefined
const user1 = {
    firstName: "Sourabh",
    age: 21,
    about: () => {
        console.log(`${this.firstName}, ${this.age}`);
    }
}

// user1.about();

// equivalent to all of the above declarations

// const user1 = {
//     firstName: "Sourabh",
//     age: 21,
//     about() {
//         console.log(`${this.firstName}, ${this.age}`);
//     }
// }

// ============================ TIPS ===================================
// (2) store methods in objects not in function.
// ==> So that they don't get created & take up space every time the function is called

// const userMethods = {
//     about: function() {
//         return `${this.firstName} is ${this.age}`;
//     },

//     is18: function()  {
//         return this.age >= 18;
//     },
// }

// (4) instead of (2) we should add these methods inside functions 'prototype'
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age}`;
};

createUser.prototype.is18 = function()  {
    return this.age >= 18;
};

// (1) create functions to create object.
function createUser(firstName, lastName, age, password, email) {
        // const user = Object.create(userMethods);
        const user = Object.create(createUser.prototype);
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
        user.password = password;
        user.email = email;
        // #.no need of this as we have set 'userMethods' as the __proto__ of 'user'.
        // user.about = userMethods.about;
        // user.is18 = userMethods.is18;
        // & so on........

        return user;
}

const user10 = createUser('Sourabh', 'Bisht', 21, '*******', 'something');
const user11 = createUser('Juice', 'WRLD', 24, '*******', 'somethingToo');
console.log(user10);
// console.log(user10.about());

// (3) creating object using Object.create()
// ==> by using this, every time we create a method inside 'userMethods' we don't have to 
// store their reference in the 'createUser' function.(it will go to 'userMethods' itself)
const obj1 = {
    key1: "value1",
    key2: "value2",
}

// #.this line creates an empty {} & sets obj1 as __proto__ of obj2
const obj2 = Object.create(obj1)
obj2.key3 = "value3";
// console.log(obj2);
// will go & check inside obj2 if it doesn't find it there it will go & check in obj1
// console.log(obj2.key2);
// console.log(obj2.__proto__);
// console.log(obj1.__proto__);

// #. __proto__ ==>
// (i) __proto__ is a way to inherit properties from an object in JavaScript. __proto__ a property of 
// Object.prototype is an accessor property that exposes the [[Prototype]] of the object through which it is accessed.

// (ii) This __proto__ sets all properties of the object set in its [[Prototype]] to the target object.

// (iii) proto is used on Objects e.g object literal, Object, Array, Function, Date, RegEx, Number, Boolean, String.
// (iv) Using proto is the same thing as using the extends keyword in OOP languages.

