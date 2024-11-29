// import './style.css';
//
// document.getElementById('app').innerHTML = `
// <h1>Async Puzzle</h1>
// `;
//
// const func1 = async () => {
//     console.log('1', '?');
//
//     setTimeout(() => console.log('2', '?'), 0);
//
//     Promise.resolve().then(() => console.log('3', '?'));
//
//     const func2 = async () => {
//         setTimeout(() => console.log('4', '?'), 1);
//         console.log('5', '?');
//         Promise.resolve().then(() =>
//             setTimeout(() => console.log('6', '?'), 0)
//         );
//
//         const importValue = new Promise((res) => {
//             console.log('7', '?');
//             Promise.resolve().then(() => console.log('8', '?'));
//
//             setTimeout(() => {
//                 res();
//             }, 5);
//         });
//
//         await importValue;
//
//         console.log('9', '?');
//     };
//
//     Promise.resolve().then(() => console.log('10', '?'));
//
//     await func2();
//
//     console.log('11', '?');
// };
//
// func1();
//
// console.log('12', '?');

// --------- Задача:
// 2 - EVENT LOOP (1 6 3 2 7 8 ) - 7 первее 8 тк 7 попала в очередь макротасок быстрее ("зарегистрировалась")
// console.log(1);
// setTimeout(() => console.log(2));
// Promise.reject(3).catch(console.log); // микро
// Promise.resolve(5).then(() => setTimeout(() => console.log(8),0)) // макротакса внутри микро - считается как макротаска
// console.log(6);
// setTimeout(() => console.log(7),0);
