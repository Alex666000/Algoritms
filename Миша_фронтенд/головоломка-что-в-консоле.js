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
- useInsertionEffect срабатывает до useLayoutEffect_a и до всех хуков Реакта, но после рендера кмпонента и после синхронного кода
- рендер самого себя (родитиельского компонента) завершится после рендеринга всех дочерних

// 10 1 3 7 5 9 11 6 2 4 8
Синхронный код (например, console.log) будет выполнен при первом рендере в порядке вызова сверху вниз.
useInsertionEffect запускается до рендеринга DOM и синхронного кода.
useLayoutEffect запускается после первого рендера и перед тем, как браузер нарисует изменения.
useEffect запускается после завершения рендеринга и отрисовки всего контента на экране.
ref-функции для элементов в компонентах срабатывают, когда DOM-элемент монтируется.

10 ? — useInsertionEffect в App запускается первым, до всего рендера, что делает его самым ранним.
1 ?, 3 ?, 7 ? — синхронные консольные логи в компонентах FirstComponent, SecondComponent, ThirdComponent выполняются в порядке их вызова при рендере.
5 ?, 9 ? — useLayoutEffect в SecondComponent и ThirdComponent, которые срабатывают после первого синхронного рендера, но до того, как браузер отрисует изменения на экране.
6 ? — ref в SecondComponent, который срабатывает на этапе монтирования элемента в DOM.
11 ? — ref в App, который срабатывает также на этапе монтирования элемента в DOM.
2 ?, 4 ?, 8 ? — Все useEffect хуки выполняются после рендера и полной отрисовки на экране, так как они работают асинхронно.
 */
