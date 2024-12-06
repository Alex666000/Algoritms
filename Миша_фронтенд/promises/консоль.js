// Что будет выведено в консоль?
Promise.reject('a')
  .catch(p => p + 'b')// ab
  .catch(p => p + 'c') // не выполняется этот catch тк ранее отловили
  .then(p => p + 'd')// оба зена выполняются после catch тк первый catch уже обработал промис и он уже не в состоянии "rejected"
  .then(p => console.log(p));

console.log('f');
// 22 мин https://www.youtube.com/watch?v=T_zWJYVZJRU
/*
ОТВЕТ:
- сначала отработает синхронный код - это "f" - далее abd
- Как паттерн называется "чейнинг" - называется
 */

// -----------------
// Что сделать чтобы второй catch() тоже сработал?
// 1) вариант:
// Promise.reject('a')
//   .catch(p => {
//     throw p + 'b'; // выбрасываем ошибку с добавлением "b"
//   })
//   .catch(p => p + 'c') // ловим ошибку, добавляем "c"
//   .then(p => p + 'd') // после того как ошибка была обработана, продолжаем с "abc"
//   .then(p => console.log(p)); // выводим "abcd"
//
// console.log('f'); // "f" выводится синхронно

// // 2) вариант:
// Promise.reject('a')
//   .catch(p => return Promise.reject(p + 'b');) = реджектим результат и он снова в новыи кетч попадет
//   .catch(p => p + 'c')
//   .then(p => p + 'd')
//   .then(p => console.log(p));
//
// console.log('f');

/*
Этот паттерн называется Method Chaining (цепочка методов). Он позволяет вызывать несколько методов подряд на одном объекте, при этом каждый метод возвращает сам объект (или что-то, что позволяет продолжить цепочку).
В контексте JavaScript и работы с промисами (как в вашем примере), это работает следующим образом:
Каждый метод (например, .then(), .catch()) возвращает новый объект промиса, который позволяет продолжить цепочку вызовов.
Таким образом, результат работы одного метода (например, обработка ошибки в .catch()) передается в следующий метод, что и позволяет вызывать методы подряд.
В вашем коде это реализовано так:
 */
// ------------------------------------------------------------------
console.log(1);

setTimeout(() => console.log(2));

setTimeout(() => {
  console.log(3);
  Promise.resolve().then(() => console.log(3.1)); // тут нет макро в микро
}, 0);

Promise.resolve().then(() => console.log(4));

setTimeout(() => console.log(5));

console.log(6);
// Ответ: 1 6 4 2 3 3.1 5
// ------------------------------------------------------------------

