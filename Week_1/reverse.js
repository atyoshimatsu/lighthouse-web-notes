const args = process.argv;

const reverse = (arr) => {
  arr.splice(2).forEach(str => {
    const rev = str.split('').reduce((pre, cur) => cur + pre, '');
    console.log(rev);
  });
};

reverse(args);
