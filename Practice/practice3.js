// nested destructuring
const person = [
    {userId: 1, firstName: "Sourabh", gender: "male"},
    {userId: 2, firstName: "Yogesh", gender: "male"},
    {userId: 3, firstName: "Sezal", gender: "female"},
]

const[{firstName: person1, userId}, , {gender: person3}] = person;
// console.log(person1);   
// console.log(person3);

const [user1, user2, user3] = person;
// console.log(user1);

for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}