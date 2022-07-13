const array = [...Array(10)];

console.log(array);

const newArr = array.map(el => {
  return Math.floor(Math.random() * 10);
});

console.log(newArr);

const sum = newArr.reduce((previousValue, currentValue) => {
  return currentValue % 2 ? previousValue : previousValue + currentValue;
});

console.log(sum);

// =================

const filledArray = [...Array(10)].map(() =>
  Math.floor(Math.random() * 10)
).reduce((previousValue, currentValue) =>
  currentValue % 2 ? previousValue : previousValue + currentValue
);

/*
 
const res = [1, 2, 3, [4, 5, 6]].flat();

const filledArray = [...Array(10)].map(() =>
  Math.floor(Math.random() * 10)
).reduce((previousValue, currentValue) =>
  if (currentValue % 2) {
    return previousValue;
  } else {
    return previousValue + currentValue;
  }
);

*/

// res = (a > b) ? x : y;

console.log(filledArray);

const someArr = [0, 2, 4, 10, 2, 4];
const large = someArr.find(el => el > 5);
console.log(large);

/*
  el => el > 5

  el => {
    ....
    ....
    return el > 5;
  }

  function (el) {
    return el > 5;
  }
*/

let arr = [1, 2, [1, 2]];
arr = arr.flat();

// =====

const arr2 = [1, 2, [1, 2]];
const res2 = arr2.flat();

