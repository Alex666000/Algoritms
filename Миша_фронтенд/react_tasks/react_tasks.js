// Батчинг:
// import React, { useState } from "react";
//
// export default function App() {
//   return (
//     <div>
//       <Clicker />
//     </div>
//   );
// }
//
// function Clicker() {
//   const [clicks, setClicks] = useState(0);
//
//   const onClick = () => {
//     setTimeout(() => {
//       setClicks(clicks + 1);
//     }, 2000);
//   };
//
//   return (
//     <>
//       <div>{clicks}</div>
//       <button onClick={onClick}>Increment</button>
//     </>
//   );
// }

// Ответ: setClicks((click) => click + 1); или всегда будет ноль замыкается на 0

// Задача: что будет с кодом при выполнении функции внутри useState()
// const heavyFunc = (count) => {
//   // hard calculations
//   // 10sec
// };
//
// const LazyInit = (props) => {
//   const [count, setCount] = useState(() => heavyFunc(props.count));
//
//   return (
//     <>
//       {count}
//       <button onClick={() => setCount((prevProps) => ++prevProps)}>
//         Increment
//       </button>
//     </>
//   );
// };

// Ответ: заблокируется UI на время выполнения функции heavyFunc(props.count) тк она синхронно выполняется
// в useState() setCount вызывается синхронно но значение изменяется асинхронно он планирует ререндер и когда он произоидет значение
// изменится
