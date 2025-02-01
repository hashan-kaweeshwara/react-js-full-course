console.clear();

const name1 = "John";

const firstName = "Hashan";
const lastName = "Kaweeshwara";

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// const mGreetings = `Hello ${name1}`;

const mGreetings = `Hello ${getFullName(firstName, lastName)}`;

console.log(mGreetings);

//rgba(red, green, blue, alpha)

let red = 200;
let green = 155;
let blue = 100;
let alpha = 0.8;

const rgbaExp = `rgba(${red} ${green} ${blue} ${alpha})`;

console.log(rgbaExp);
