// function Person(name, birthYear) {
//   this.name = name;
//   this.yearOfBirth = birthYear;

//   this.getDetails = function () {
//     return "Name : " + this.name + " and Age : " + (2025 - this.yearOfBirth);
//   };
// }

class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.yearOfBirth = birthYear;
  }

  getDetails = () => {
    return `Name : ${this.name} and Age : ${this.yearOfBirth}`;
    //
    // return "Name : " + this.name + " and Age : " + (2025 - this.yearOfBirth);
  };
}

var John = new Person("John", 1990);
console.log(John.getDetails());
