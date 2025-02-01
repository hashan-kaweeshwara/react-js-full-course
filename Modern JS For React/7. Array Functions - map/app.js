const mArr = [1, 2, 3, 4, 5];

//

let newArr = [];

const doubleValues = (item) => {
  return item * 2;
};

for (let i = 0; i < mArr.length; i++) {
  newArr.push(doubleValues(mArr[i]));
}

console.log(newArr);

//

let newArr2 = mArr.map((item, i) => {
  console.log(`Item at pos: ${i} is ${item}`);
  return item * 2;
});

console.log(mArr);
console.log(newArr2);
