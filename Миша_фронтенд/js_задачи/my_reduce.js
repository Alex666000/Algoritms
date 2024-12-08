const myReduce = (array, callback, initialValue) => {
  // Проверка, что первый аргумент - это массив
  if (!Array.isArray(array)) {
    throw new Error('Первый аргумент должен быть массивом');
  }
  // Проверка, что второй аргумент - это функция
  if (typeof callback !== 'function') {
    throw new Error('Второй аргумент должен быть функцией');
  }
  let accumulator = initialValue;
  let startIndex = 0;
  // Если начальное значение не передано, начинаем с первого элемента массива
  if (accumulator === undefined) {
    if (array.length === 0) {
      throw new Error('Массив не может быть пустым, если начальное значение не передано');
    }
    accumulator = array[0];
    startIndex = 1; // Начинаем с первого индекса, так как первый элемент уже в аккумуляторе
  }
  // Итерируем по массиву с указанного индекса
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array); // применяем callback
  }
  return accumulator; // Возвращаем итоговое значение аккумулятора
};
console.log(myReduce([1, 2, 3, 4], (acc, num) => acc + num, 0));
// Вывод: 10 (сумма элементов)

console.log(myReduce([1, 2, 3, 4], (acc, num) => acc + num));
// Вывод: 10 (начальное значение не передано, начинаем с первого элемента)
