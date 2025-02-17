// 2) Представьте, что метода filter не существует.
// Реализуйте свой метод filter при помощи других методов массива

const myFilter = (array, callback) => {
  // Проверка, что первый аргумент - это массив
  if (!Array.isArray(array)) {
    throw new Error('Первый аргумент должен быть массивом');
  }
  // Проверка, что второй аргумент - это функция
  if (typeof callback !== 'function') {
    throw new Error('Второй аргумент должен быть функцией');
  }
  const result = [];
  // Итерируем по массиву и применяем колбек, добавляя элементы в результат
  array.forEach((item, index, arr) => {
    if (callback(item, index, arr)) {
      result.push(item); // добавляем элемент, если callback вернул true
    }
  });
  return result;
};

console.log(myFilter([1, 2, 3, 4, 5], (number) => number > 2));
// Вывод: [3, 4, 5]


/*
- Урок 5 - грокаем собесы
- прежде чем писать метод массива нужно проговарить и понимать что он делает
- передаем колбек в myFilter()
-  в таких функциях что делаем сами должны указывать все параметры которые могут пригодиться
 */
