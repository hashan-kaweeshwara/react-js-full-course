function greetings(name) {
  return `Welcome ${name}`;
}

// const mGreetings = (name, age) => {
//   return `Welcome ${name} ${age}`;
// };

const mGreetings = (name, age) => `Welcome ${name} ${age}`;

console.log(greetings("John"));
console.log(mGreetings("John", 28));
