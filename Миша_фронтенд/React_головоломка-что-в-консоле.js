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
//     useInsertionEffect(() => {
//         console.log('10', '?');
//     }, []);
//
//     return (
//         <div>
//           ref={() => {
//             console.log('11', '?')
//        }
// }
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
- useInsertionEffect срабатывает до useLayoutEffect_a и до всех хуков Реакта, но после рендера компонента и после синхронного кода
- рендер самого себя (родитиельского компонента) завершится после рендеринга всех дочерних
- refs - псоле инсершена но перед "лаиаут" и эффектом -- после срабатывает "лаиаут"
// 1 2 3 4 5 6 8 11 7 10 9
 */
