const myReduce = (array, callback, initialValue) => {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};

// Пример использования
const sum = myReduce([1, 2, 3, 4], (acc, num) => acc + num, 0);
console.log(sum); // 10

const product = myReduce([1, 2, 3, 4], (acc, num) => acc * num);
console.log(product); // 24
