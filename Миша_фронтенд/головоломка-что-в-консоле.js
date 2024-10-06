// import { useEffect, useLayoutEffect } from 'react';
//
// const FirstComponent = ({ children }) => {
//     console.log('1', '?');
//
//     useEffect(() => {
//         console.log('2', '?');
//     }, []);
//
//     return (
//         <header>
//             <h1>React Order Puzzle</h1>
//             {children}
//         </header>
//     );
// };
//
// const SecondComponent = () => {
//     console.log('3', '?'); // В SecondComponent компоненте порядок^ Сначала синхронный потом - лаиаутэффект - юзэффект асинхронный: 3 6 5 4
//
//     useEffect(() => {
//         console.log('4', '?');
//     }, []);
//
//     useLayoutEffect(() => {
//         console.log('5', '?');
//     }, []);
//
//     return (
//         <div>
//              ref={() => {
//              console.log('6', '?')}
//              }
//             <p>In this input, you can enter the order of numbers</p>
//             <input className="input" />
//         </div>
//     );
// };
//
// const ThirdComponent = () => {
//     console.log('7', '?');
//
//     useEffect(() => {
//         console.log('8', '?');
//     }, []);
//
//     useLayoutEffect(() => {
//         console.log('9', '?');
//     }, []);
//
//     return (
//         <div>
//             <p>In this input, you can enter the order of numbers</p>
//             <input className="input" />
//         </div>
//     );
// };
//
// export const App = () => {
//     useEffect(() => {
//         console.log('10', '?');
//     }, []);
//
//     return (
//         <div>
//             <FirstComponent>
//                 <SecondComponent />
//             </FirstComponent>
//             <ThirdComponent />
//         </div>
//     );
// };
//
// export { FirstComponent, SecondComponent, ThirdComponent };

/*
Алгоритм:
- В SecondComponent компоненте порядок^ Сначала синхронный потом - лаиаутэффект - юзэффект асинхронный: 3 6 5 4
-
 */
