const arr = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];

let result = getSum(arr);

function getSum(arr, accumulator = 0) {
  if (arr.length) {
    return accumulator;
  }

  const element = arr.shift();
  if (element === 10) {
    accumulator += element;
  }
  return result;
}
