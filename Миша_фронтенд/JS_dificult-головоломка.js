// import './style.css';
//
// document.getElementById('app').innerHTML = `
// <h1>Async Puzzle</h1>
// `;
//
// const handleAsyncFirst = async () => {
//   console.log('1', '?');
//
//   requestIdleCallback( // requestIdleCallback - срабатывает в момент простоя браузера
//     () => {
//       console.log('2', '?');
//     },
//     { timeout: 1 }
//   );
//
//   setTimeout(() => {
//     console.log('3', '?');
//   }, 100);
//
//   const dateStart = Date.now();
//   let dateNow = Date.now();
//
//   // кусочек кода создает искуственную задержку: 200ms "синхрона" - но к простою браузера нельзя отнести её
//   while (dateNow <= dateStart + 200) {
//     dateNow = Date.now();
//   }
// // 2 очереди микрозадач (выполнить все - потом 1 макро.. -> попадет в конец очереди микротасок)
// // выполнится последней из микрозадач
//   queueMicrotask(() =>
//     Promise.resolve().then(() => {
//       console.log('4', '?');
//     })
//   );
//
//   const handleAsyncSecond = async () => {
//     setTimeout(() => {
//       console.log('5', '?'); // первее, нет задержки
//     });
//
//     const importantValue = new Promise((res) => {
//       console.log('6', '?');
//
//       Promise.resolve().then(() => {
//         console.log('7', '?');
//       });
//
//       requestAnimationFrame(() => { // requestAnimationFrame - после микро и перед таимаутами..рендер важен он первее!
//         console.log('8', '?');
//       });
//
//       setTimeout(() => {
//         console.log('9', '?');
//         res();
//       }, 100);
//     });
//
//     await importantValue;
//
//     console.log('10', '?');
//
//     setTimeout(() => console.log('11', '?'));
//
//     queueMicrotask(() => {
//       console.log('12', '?');
//
//       setTimeout(() => console.log('13', '?'));
//
//       Promise.resolve().then(() => console.log('14', '?'));
//     });
//   };
//
//   await handleAsyncSecond();
//
//   console.log('15', '?'); // раньше чем 14 тк раньше по скоупу положился в очередь
// };
//
// Promise.resolve().then(() => console.log('16', '?')); // 16 - первый в очереди микрозадач поэтому выполнится первым
//
// handleAsyncFirst();
//
// console.log('17', '?');
// // синх: выполняется сразу без очереди - микро согласно очереди микротасок(первый попал, первым вышел и попал на отработку)
// // - макро тоже(первый попал, первым вышел и попал на отработку)
// // синх: 1 6 17 микро: 16 7 4 (две очереди микрозадач, выполнить все - потом 1 макро.. -> попадет в конец очереди микротасок
// // выполнится последней из микрозадач) 8
