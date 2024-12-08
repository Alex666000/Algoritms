// 2) Представьте, что метода map() не существует.
// Реализуйте свой метод

const myMap = (array, callback) => {
  // Проверка, что первый аргумент - это массив
  if (!Array.isArray(array)) {
    throw new Error('Первый аргумент должен быть массивом');
  }

  // Проверка, что второй аргумент - это функция
  if (typeof callback !== 'function') {
    throw new Error('Второй аргумент должен быть функцией');
  }

  const result = [];

  // Итерируем по массиву и применяем callback
  array.forEach((item, index, arr) => {
    result.push(callback(item, index, arr)); // применяем колбек для каждого item
  });

  return result;
};

console.log(myMap([1, 2, 3], (number) => number + 1)); // [2, 3, 4]

