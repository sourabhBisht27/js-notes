// prototype
// In JS functions are also objects.

const hello = function myFunc() {
    // console.log('i am an object');
}

// console.log(hello.name);

// #. we can also add our own properties to the method, just like objects.
hello.myOwnProp = "unique value";
// console.log(hello.myOwnProp); 

// #. only functions provide prototype({}) property. 

// returns an empty {}
// console.log(hello.prototype);

// (2)setting key-value pair in prototype
hello.prototype.abc = "One";
hello.prototype.xyz = "Two";
hello.prototype.sing = function() {
    return "I still see your shadows in my room";
}

// console.log(hello.prototype);
// console.log(hello.prototype.sing());

// new keyword ==> (1) creates an empty {} (now 'this' will reference to the empty object)
//                 (2) returns the object
//                 (3) implicitly does what Object.assign() did.

function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function () {
    console.log(this.firstName, this.age);
}

const user1 = new createUser("sourabh", 21)
// user1.about();


// ========= Refactored code ==========

// this is called 'Constructor' functions.
CreateUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.is18 = function()  {
    return this.age >= 18;
};

function CreateUser(firstName, lastName, age, password, email) {
    // no need for this as 'new' provides this functionality itself.
    // const user = Object.create(CreateUser.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.password = password;
    this.email = email;

    // no need to write return as new keyword implicitly returns the object. 
    // return user;
}

const user10 = new CreateUser('Sourabh', 'Bisht', 21, '*******', 'something');
const user11 = new CreateUser('Juice', 'WRLD', 24, '*******', 'somethingToo');
// console.log(user10, user11);

// it will give all the keys including the ones inside the prototype. 
// ==> firstName, lastName, age, password, email, about, is18
for(const key in user10) {
    // console.log(key);

    // if the current key is user's own it will be printed.
    // ==> firstName, lastName, age, password, email
    if (user10.hasOwnProperty(key)) {
        // console.log(key);
    }
}

// ================ more about prototypes ================

let nums1 = new Array(1, 3, 4, 5);
// gives array([])
// console.log(Array.prototype);

let nums2 = [1, 2, 3, 4];
// gives prototype of nums==> array([])
// console.log(Object.getPrototypeOf(nums2));
// 
function hi() {
    // console.log("hi");
}
// gives prototype of hi ==> object({}) -- (1)
console.log(hi.prototype);

// Q - but prototypes are only objects in javascript, so why this is happening?
// why prototype of array is array not object?

// A - this is because we can modify prototype & creater of JS though it would be better
// if the prototype of Array is array.

hi.prototype = [];
// now it is coming out to be array ==> [] -- (2)
console.log(hi.prototype);

// ================ extends ================

// In JavaScript, a prototype is an essential part of the language's object-oriented programming model. 
// It's a mechanism that allows objects to inherit properties and behaviors from other objects. Every 
// object in JavaScript has a prototype, except for the root object, which is typically referred to as 
// Object.prototype.

// 1. Every Object Has a Prototype: In JavaScript, every object is associated with a prototype object. 
// This prototype is another object from which the current object inherits properties and methods.

// 2. Prototype Chain: When you access a property or method on an object, JavaScript first looks for that 
// property or method on the object itself. If it doesn't find it, it then looks at the object's 
// prototype (its parent), and if it's not found there, it continues up the prototype chain until it 
// reaches Object.prototype. If the property or method is not found anywhere in the chain, JavaScript 
// will return undefined.

// (1) example :
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }
}

class Dog extends Animal {
    constructor(name, age, speed) {
        // calls the Base-class constructor for 'name' & 'age' values.
        super(name, age);
        this.speed = speed;
    }

    run() {
        return `${this.name} runs at ${this.speed} kmph`;
    }
}

// JS will first check in 'base-class' if it doesn't find it there, it would go to 
// the 'parent-class'
const tommy = new Dog("tommy", 2, 50);
// console.log(tommy.eat());


// (2)another example:

// Create an object
const person = {
    name: 'Alice',
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Create another object that inherits from 'person'
  const student = Object.create(person);
  student.major = 'Computer Science';
  
  // Now, 'student' has access to the 'name' property and 'sayHello' method from 'person'
  console.log(student.name); // Outputs: Alice
  student.sayHello();       // Outputs: Hello, my name is Alice
  

// ============== getters & setters ==================
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // now it will be treated a property.
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const[firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person10 = new Person("Sourabh", "Bisht", 21); 
// will be called without wrting person10.fullName()
// console.log(person10.fullName);

// returns { firstName: "John", lastName: "Cena", age: 21 }
person10.fullName = "John Cena";
// console.log(person10);