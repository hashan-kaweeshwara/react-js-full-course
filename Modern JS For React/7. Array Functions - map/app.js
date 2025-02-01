console.clear();

const name = "Hashan Kaweeshwara DeSilva";
const nameArr = name.split(" ");

console.log(nameArr);

// let firstName = nameArr[0];
// let middleName = nameArr[1];

let [firstName, middleName, lastName] = nameArr;

console.log(firstName);
console.log(middleName);
console.log(lastName);

//

const person = {
  firstName1: "John",
  middleName1: "Manuel",
  lastName1: "Lark",
  age: 28,
};

let { firstName1, lastName1 } = person;

console.log(firstName1);
console.log(lastName1);

//

let firstName2 = "Hash";
let lastName2 = "Kawee";
let age = 28;

const personObj = {
  firstName2,
  lastName2,
  age: age,
};

console.log(personObj);
