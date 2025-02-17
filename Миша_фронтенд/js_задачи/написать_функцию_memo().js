// Написать функцию мемо - должна мемоизировать значения вычисления функции
const memo = (fn) => {
  const cache = new Map(); // Используем Map для хранения кэша
  // ...args в данном контексте — это rest-параметр, который позволяет функции принимать любое количество аргументов,
  // упаковывая их в массив. Он полезен, когда вы не знаете заранее, сколько аргументов будет передано функции.
  return (...args) => {
    console.log(args)
    const key = JSON.stringify(args); // Ключом в кэше будет строковое представление аргументов
    if (cache.has(key)) {
      console.log(`Возвращаю из кэша для аргументов: ${args}`);
      return cache.get(key); // Возвращаем значение из кэша
    }
    const result = fn(...args); // Вычисляем результат
    cache.set(key, result); // Сохраняем результат в кэш
    console.log(`Кэширую результат для аргументов: ${args}`);
    return result; // Возвращаем результат
  };
};

// Пример использования
const pow = (a) => a * a;
const memoizedPow = memo(pow);
//
console.log(memoizedPow(4)); // Кэшируется и возвращает 16
// console.log(memoizedPow(4)); // Возвращается из кэша 16
// console.log(memoizedPow(5)); // Кэшируется и возвращает 25
// console.log(memoizedPow(5)); // Возвращается из кэша 25

// ---------------------------------------------------------------------------------------------------------------------------------------
