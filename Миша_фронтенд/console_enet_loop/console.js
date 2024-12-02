// import './style.css';
//
// document.getElementById('app').innerHTML = `
// <h1>Async Puzzle</h1>
// `;
//
// const func1 = async () => {
//     console_enet_loop.log('1', '?');
//
//     setTimeout(() => console_enet_loop.log('2', '?'), 0);
//
//     Promise.resolve().then(() => console_enet_loop.log('3', '?'));
//
//     const func2 = async () => {
//         setTimeout(() => console_enet_loop.log('4', '?'), 1);
//         console_enet_loop.log('5', '?');
//         Promise.resolve().then(() =>
//             setTimeout(() => console_enet_loop.log('6', '?'), 0)
//         );
//
//         const importValue = new Promise((res) => {
//             console_enet_loop.log('7', '?');
//             Promise.resolve().then(() => console_enet_loop.log('8', '?'));
//
//             setTimeout(() => {
//                 res();
//             }, 5);
//         });
//
//         await importValue;
//
//         console_enet_loop.log('9', '?');
//     };
//
//     Promise.resolve().then(() => console_enet_loop.log('10', '?'));
//
//     await func2();
//
//     console_enet_loop.log('11', '?');
// };
//
// func1();
//
// console_enet_loop.log('12', '?');

// --------- Задача:
// 2 - EVENT LOOP (1 6 3 2 7 8 ) - 7 первее 8 тк 7 попала в очередь макротасок быстрее ("зарегистрировалась")
// console_enet_loop.log(1);
// setTimeout(() => console_enet_loop.log(2));
// Promise.reject(3).catch(console_enet_loop.log); // микро
// Promise.resolve(5).then(() => setTimeout(() => console_enet_loop.log(8),0)) // макротакса внутри микро - считается как макротаска
// console_enet_loop.log(6);
// setTimeout(() => console_enet_loop.log(7),0);
