// import './style.css';
//
// document.getElementById('app').innerHTML = `
// <h1>Async Puzzle</h1>
// `;
//
// const handleAsyncFirst = async () => {
//     console.log('1', '?');
//
//     requestIdleCallback(
//         () => {
//             console.log('2', '?');
//         },
//         { timeout: 1 }
//     );
//
//     setTimeout(() => {
//         console.log('3', '?');
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
//             console.log('4', '?');
//         })
//     );
//
//     const handleAsyncSecond = async () => {
//         setTimeout(() => {
//             console.log('5', '?');
//         });
//
//         const importantValue = new Promise((res) => {
//             console.log('6', '?');
//
//             Promise.resolve().then(() => {
//                 console.log('7', '?');
//             });
//
//             requestAnimationFrame(() => {
//                 console.log('8', '?');
//             });
//
//             setTimeout(() => {
//                 console.log('9', '?');
//                 res();
//             }, 100);
//         });
//
//         await importantValue;
//
//         console.log('10', '?');
//
//         setTimeout(() => console.log('11', '?'));
//
//         queueMicrotask(() => {
//             console.log('12', '?');
//
//             setTimeout(() => console.log('13', '?'));
//
//             Promise.resolve().then(() => console.log('14', '?'));
//         });
//     };
//
//     await handleAsyncSecond();
//
//     console.log('15', '?');
// };
//
// Promise.resolve().then(() => console.log('16', '?'));
//
// handleAsyncFirst();
//
// console.log('17', '?');
