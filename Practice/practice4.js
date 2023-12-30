const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  department: {
    name: "Sales",
    Shift: "Morning",
    address: {
      city: "Bangalore",
      street: "7th Residency Rd",
      zip: 560001,
    },
  },
};

const { name: userName, department } = user;
// console.log(`${name}, ${department}`);
// console.log(user["name"]);
console.log(userName);

const student = {
  name: "Sourabh",
  address: "15th Park Avenue",
  age: 43,
  info: function () {
    console.log(this.name , " " , this.age);
  },
};

const intro = {
  name: "Lakhan",
  age: 23,
};

student.info.call(intro);
