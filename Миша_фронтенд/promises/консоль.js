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
