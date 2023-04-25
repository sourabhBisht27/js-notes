const arr = [1, 3, 4, 5, 6, 7, 10];
let [var1, var2, ...var3] = arr;
// console.log(var1, var2, var3);

// var3 will be an array.
// console.log(Array.isArray(var3));

const person = {
    fName: "Sourabh",
    lName: "Bisht",
    age: 21,
    hobbies: ["football", "singing"],
}

console.log(person["age"]);
// console.log(person.hobbies[1]);
// console.log(person.hobbies.push("coding"));
// console.log(person.hobbies);

{ weight: 62 }
// const key = "weight";
// person[key] = 62;

console.log(person);

createUser.prototype.about = function() {
    // console.log('this is about');
}

createUser.prototype.eligible = function() {
    if (user >= 18) {
        // console.log('you are eligible');
    } else {
        // console.log('you are not eligible');
    }
}

function createUser(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const user1 = new createUser("Sourabh", "Bisht", 21);
// console.log(user1);

// for(key in user1) {
//     // console.log(key);
// }

for(key in user1) {
    if (user1.hasOwnProperty(key)) {
        // console.log(key);
    }
}

     