const args = process.argv;

const calcSum = (arr) => {
  return arr.reduce((prev, curr) => isNaN(Number(curr)) ? prev : prev + Number(curr), 0);
};

console.log(calcSum(args));
