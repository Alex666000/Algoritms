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
//             console.log('7', '');  // Лог 7
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
//         console.log('10', '');
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
// 1 5 7 12 3 10 8 2 6 4 9 11
 */
