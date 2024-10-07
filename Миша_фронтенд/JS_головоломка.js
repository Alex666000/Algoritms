// document.getElementById('app').innerHTML = `<h1>Async Puzzle</h1>`;
//
// const func1 = async () => {
//     console.log('1', '');  // Лог 1
//
//     setTimeout(() => console.log('2', '?'), 0);
//
//     Promise.resolve().then(() => console.log('3', '?'));
//
//     const func2 = async () => {
//         setTimeout(() => console.log('4', '?'), 1);
//
//         console.log('5', '');  // Лог 5
//
//         Promise.resolve().then(() => console.log('6', '?'));
//
//         const importValue = new Promise((res) => {
//             console.log('7', '');  // синх - тк внутри конструктора класса Promise
//
//             Promise.resolve().then(() => console.log('8', '?'));
//
//             setTimeout(() => {
//                 console.log('9', '?');
//                 res();
//             }, 5);
//         });
//
//         await importValue;
//
//         console.log('10', ''); // микро - тк после await все становится микротасками все что под await (только внутри скобок функции)
//     };
//
//     await func2();
//
//     console.log('11', '');
// };
//
// func1();
//
// console.log('12', '?');

/*
- Микротаски тоже в пределах скобок по мере вызова функции
- Код после await выполнится в самом конце после асихронного даже!!!
// синхр: 1 5 7 12 микро: 3 10 8 асинх: 2 6 4 9 11
 */
