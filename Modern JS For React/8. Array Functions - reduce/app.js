const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, item) => {
  // console.log(item);
  console.log(acc);
  return acc + 1;
}, 0);

console.log(result);
