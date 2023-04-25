// prototype
// In JS functions are also objects.

const hello = function myFunc() {
    console.log('i am an object');
}

// console.log(hello.name);
// console.log(hello.prototype);

// #. we can also add our own properties to the method, just like objects.
hello.myOwnProp = "unique value";
// console.log(hello.myOwnProp); 

// #. only functions provide prototype({}) property. 
// returns an empty {}
// console.log(hello.prototype);

// setting key-value pair in prototype
hello.prototype.abc = "One";
hello.prototype.xyz = "Two";
hello.prototype.sing = function() {
    return "I still see your shadows in my room";
}

// console.log(hello.prototype);
// console.log(hello.prototype.sing());

// new keyword ==> (1) creates an empty {} (now 'this' will reference to the empty object)
    //             (2) returns the object
    //             (3) implicitly do what Object.assign() did.

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

// more about prototypes
// let nums = new Array(1, 3, 4, 5);
// // gives array
// console.log(Array.prototype);

let nums = [1, 2, 3, 4];
// gives prototype of nums==> array([])
// console.log(Object.getPrototypeOf(nums));
// 
function hi() {
    // console.log("hi");
}
// gives prototype of hi ==> object({}) -- (1)
// console.log(hi.prototype);

// Q - but prototypes are only objects in javascript, so why this is happening?
// why prototype of array is array not object?

// A - this is because we can modify prototype & creater of JS thought it would be better
// if the prototype of Array is array.

hi.prototype = [];
// now it is coming out to be array ==> [] -- (2)
console.log(hi.prototype);

// =========== extends ================
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
console.log(person10.fullName);

// returns { firstName: "John", lastName: "Cena", age: 21 }
person10.fullName = "John Cena";
console.log(person10);