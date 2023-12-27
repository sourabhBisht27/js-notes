// IMPORTANT ARRAY METHODS

// (1) forEach()

// ===================== real life example of forEach(). =====================
// const users = [
//     {firstName: "Ronaldo", age: 37},
//     {firstName: "Sourabh", age: 21},
//     {firstName: "Messi", age: 35},
// ]

// users.forEach((user, index) => {
//     console.log(user.firstName, index);
// });

// it can also be done using for-of
// for (const user of users) {
//     console.log(user.firstName);
// }

// (2) map(very important) --> creates a new array.
// You shouldn't be using map if:

// (i) you're not using the array it returns; and/or
// (ii) you're not returning a value from the callback.

const numbers = [3, 4, 5, 6, 7, 8];

const square = function(number) {
    // we need to use return, if we just print, the map will return an array of "undefined" objects.
    // console.log(number * number);
    return number * number;
}

const squareNumber1 = numbers.map(square);
// [9, 16, 25, 36, 49, 64]
// console.log(squareNumber1);

// or we can directly pass the function inside the map method.
const squareNumber2 = numbers.map((number, index) => {
    return `index: ${index}, ${number * number}`;
})

// console.log(squareNumber2);

// real life example of map().
// const users = [
//     {firstName: "Ronaldo", age: 37},
//     {firstName: "Sourabh", age: 21},
//     {firstName: "Messi", age: 35},
// ]

// const userNames = users.map((name) => {
//     return name.firstName;
// })

// console.log(userNames);

// (3) filter --> The filter() method creates a shallow copy of a portion of a given array, filtered down
//     to just the elements from the given array that pass the test implemented by the provided function.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// (4) reduce(important)
// const numbers = [1, 2, 3, 4, 5, 10];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100);
// 100 is the initial value of accumulator.

// console.log(sum);

// accumulator , currentValue , return
// 1                2              3           
// 3                3              6
// 6                4              10
// 10               5              15
// 15               10             25

// ==================== real life example ====================

// const userCart = [
//     { productId: 1, productName: "mobile", price: 15000 },
//     { productId: 2, productName: "laptop", price: 50000 },
//     { productId: 3, productName: "headphones", price: 5000 },
// ]

// const amount = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(amount);

// (5) sort(compareFunction) --> changes original array.
// const numbers = [5, 9, 100, 400, 3000];

// takes input as ["5", "9", "100", "400", "3000"] then selects first 
// characters ASCII value & sorts it accordingly.If both characters are
// same then it checks next character.(just like in dictionary)
// "0" --> 48, "1" --> 49 .....
// "a" --> 97, "A" --> 65 .....
// array becomes: [53, 57, 49, 52, 51]
// console.log(numbers.sort());

// const userName = ["sourabh", "abcd", "sezal", "Sourabh", "ABCD", "Sezal"];
// console.log(userName.sort());

// real life example
const products = [
    { productId: 1, productName: "p1", price: 300 }, 
    { productId: 2, productName: "p2", price: 3000 }, 
    { productId: 3, productName: "p3", price: 200 }, 
    { productId: 4, productName: "p4", price: 8000 }, 
    { productId: 5, productName: "p5", price: 500 }, 
];

// if a-b is + ==> b will be placed first or vice-versa.
// used slice for cloning so that original array doesn't change.
const lowToHigh = products.slice(0).sort((a, b)=> {
    return a.price - b.price;
});
                                  
// console.log(lowToHigh);

// (6) find() --> returns the first occurence
const animals = ["gorilla", "cat", "dog", "lion"];

const ans1 = animals.find((string) => string.length === 3);
// console.log(ans1);

// real life example
const users = [
    { userId: 1, userName: "Sourabh1" },
    { userId: 2, userName: "Sourabh2" },
    { userId: 3, userName: "Sourabh3" },
    { userId: 4, userName: "Sourabh5" },
    { userId: 5, userName: "Sourabh5" },
];

const ans2 = users.find( a => a.userId === 3)
// console.log(ans2);

// (7) every() --> returns boolean value based on the O/P of callback function.
// true --> if condition is applicable to every element or vice-versa
const num1 = [2, 4, 6, 8, 10];

const ans3 = num1.every((b) => b % 2 === 0);
// console.log(ans3);

// real life example
const userCart2 = [
        { productId: 1, productName: "mobile", price: 15000 },
        { productId: 2, productName: "laptop", price: 50000 },
        { productId: 3, productName: "headphones", price: 35000 },
    ]

const ans4 = userCart2.every((c) => c.price < 30000);    
// console.log(ans4);

// (8) some() --> returns true if any of the element satisfies the condition in callback.
const num2 = [3, 4, 7, 11];

// console.log(num2.some((num) => num % 2 === 0));

// real life example
const userCart3 = [
    { productId: 1, productName: "mobile", price: 15000 },
    { productId: 2, productName: "laptop", price: 50000 },
    { productId: 3, productName: "headphones", price: 35000 },
]

// return true if price of any item is > 30000.
// console.log(userCart3.some((d) => d.price > 30000));

// (9) fill(value, start, end) 
// start(optional) --> inclusive, end(optional) --> exclusive

// creates an array & fills it with 1.
const array1 = new Array(10).fill(1);
// console.log(array1);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(array2.fill(0, 2, 5));

// (10) splice(start, delete, insert) --> updates original array.
// start --> index from where we will start
// delete --> how many items do we want to delete
// insert --> items that we want to insert

const myArray = ["item1", "item2", "item3"];

// splice method also returns the deleted items.
const deletedItems = myArray.splice(1, 2);
// console.log(`deleted: ${deletedItems}`);

// as we are deleting 0 elements it will put 'newItem' at index 1 & shift the rest elements.
myArray.splice(1, 0, "newItem");
// console.log(myArray);

// deletes 2 items starting from index 1 & replaces them with newItem1 & newItem2.
myArray.splice(1, 2, "newItem1", "newItem2");
// console.log(myArray);
