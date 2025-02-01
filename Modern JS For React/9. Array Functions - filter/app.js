const numArr = [1, 2, 3, 4, 5, 6, 7];

const resultArr = numArr.filter((item) => {
  // console.log(item);
  return item % 2 === 0;
});

console.log("Result Arr => ", resultArr);
