// const mSum = (num1, num2) => console.log(num1 + num2);

//

// const mSum = (...args) => console.log(args);

// mSum(1, 2, 3, 4, 5);

//

const mSum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  console.log(sum);
};

mSum(1, 2, 3, 4, 5, 6, 7, 8);
