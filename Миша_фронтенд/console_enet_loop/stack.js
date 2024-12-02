// import './style.css';
//
// document.getElementById('app').innerHTML = `
// <h1>Async Puzzle</h1>
// `;
//
// const handleAsyncFirst = async () => {
//     console_enet_loop.log('1', '?');
//
//     requestIdleCallback(
//         () => {
//             console_enet_loop.log('2', '?');
//         },
//         { timeout: 1 }
//     );
//
//     setTimeout(() => {
//         console_enet_loop.log('3', '?');
//     }, 100);
//
//     const dateStart = Date.now();
//     let dateNow = Date.now();
//
//     while (dateNow <= dateStart + 200) {
//         dateNow = Date.now();
//     }
//
//     queueMicrotask(() =>
//         Promise.resolve().then(() => {
//             console_enet_loop.log('4', '?');
//         })
//     );
//
//     const handleAsyncSecond = async () => {
//         setTimeout(() => {
//             console_enet_loop.log('5', '?');
//         });
//
//         const importantValue = new Promise((res) => {
//             console_enet_loop.log('6', '?');
//
//             Promise.resolve().then(() => {
//                 console_enet_loop.log('7', '?');
//             });
//
//             requestAnimationFrame(() => {
//                 console_enet_loop.log('8', '?');
//             });
//
//             setTimeout(() => {
//                 console_enet_loop.log('9', '?');
//                 res();
//             }, 100);
//         });
//
//         await importantValue;
//
//         console_enet_loop.log('10', '?');
//
//         setTimeout(() => console_enet_loop.log('11', '?'));
//
//         queueMicrotask(() => {
//             console_enet_loop.log('12', '?');
//
//             setTimeout(() => console_enet_loop.log('13', '?'));
//
//             Promise.resolve().then(() => console_enet_loop.log('14', '?'));
//         });
//     };
//
//     await handleAsyncSecond();
//
//     console_enet_loop.log('15', '?');
// };
//
// Promise.resolve().then(() => console_enet_loop.log('16', '?'));
//
// handleAsyncFirst();
//
// console_enet_loop.log('17', '?');
