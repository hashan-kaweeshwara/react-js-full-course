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
  };
}

// var John = new Person("John", 1990);
// console.log(John.getDetails());

//
// Inheritance Part

class Pilot extends Person {
  constructor(name, birthYear, exp, type, license) {
    super(name, birthYear);
    this.experience = exp;
    this.type = type;
    this.license = license;
  }

  getData = () => {
    console.log(
      `${this.getDetails()} and Experience: ${this.experience} and Type: ${
        this.type
      } and License ${this.license}`
    );
  };
}

const hashan = new Pilot("Hashan", 1996, 10, "Private", "TC12345");
// console.log(hashan);
hashan.getData();

const teshan = new Pilot("Teshan", 1993, 15, "Private", "TC23456");
teshan.getData();
