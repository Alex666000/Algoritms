// const func1 = async () => {
//   console.log('1', '?');
//
//   setTimeout(() => console.log('2', '?'), 0);
//
//   Promise.resolve().then(() => console.log('3', '?'));
//
//   const func2 = async () => {
//     setTimeout(() => console.log('4', '?'), 1);
//     console.log('5', '?');
//     Promise.resolve().then(() =>
//       setTimeout(() => console.log('6', '?'), 0)
//     );
//
//     const importValue = new Promise((res) => {
//       console.log('7', '?');
//       Promise.resolve().then(() => console.log('8', '?'));
//
//       setTimeout(() => {
//         res();
//       }, 5);
//     });
//
//     await importValue;
//
//     console.log('9', '?');
//   };
//
//   Promise.resolve().then(() => console.log('10', '?'));
//
//   await func2();
//
//   console.log('11', '?');
// };
//
// func1();
//
// console.log('12', '?');

/* Ответ: // синхр: 1 5 7 12 / микро: 3 10 8 /макро: 2 4 6 9 11
синхронный код выполняется всюду - не зависимо от области видимости
3 и 10 тк из глобальной области сначала не прыгаем в функции (код func1() выполняется при вызове а не определяетс как внутри др
функций) + после await строка не выполниться пока промис не вернется
4 первее 6 тк 6 вложена макро внутрь микро === макро */

// --------- Задача:
// 2 TASK: EVENT LOOP (1 6 3 2 7 8 ) - 7 первее 8 тк 7 попала в очередь макротасок быстрее ("зарегистрировалась")
// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.reject(3).catch(console.log);
//
// Promise.resolve(5).then(() => setTimeout(() => console.log(8),0))
//
// console.log(6);
//
// setTimeout(() => console.log(7),0);

// 1 6 3 2 7 8
