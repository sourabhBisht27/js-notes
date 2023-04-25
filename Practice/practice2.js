// way --> 1:
function createUser1(firstName, lastName, age) {
    const users = {};
    users.firstName = firstName;
    users.lastName = lastName;
    users.age = age;
    users.about = function() {
        return `${this.firstName} is very good at JS`;
    };
    users.eligible = function() {
        return this.age >= 18;
    };

    return users;
}
        
const user1 = createUser1("Cristiano", "Ronaldo", 37);
// console.log(user1);
// console.log(user1.eligible());

// way --> 2:
const userMethods = {
    about: function() {
        return `${this.firstName} is very good at JS`;
    },

    eligible: function() {
        return this.age >= 18;
    },
};

function createUser2(firstName, lastName, age) {
    const users = {};
    users.firstName = firstName;
    users.lastName = lastName;
    users.age = age;
    users.about = userMethods.about;
    users.eligible = userMethods.eligible;

    return users;
}

const user2 = createUser2("Sourabh", "Bisht", 21);
// console.log(user2);

// way --> 3
function createUser3(firstName, lastName, age) {
    const users = Object.create(userMethods);
    users.firstName = firstName;
    users.lastName = lastName;
    users.age = age;

    return users;
}

const user3 = createUser3("Lionel", "Messi", 35);
console.log(user3);
