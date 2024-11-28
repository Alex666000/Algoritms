// 19 мин: https://www.youtube.com/watch?v=EDif0w660Qg&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=2
// Исходник: улучши исходный код допиши код доработай его
// import React, { useEffect, useState } from 'react';
//
// export const fetchTasks = async () => {
//   // Симуляция API запроса
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 4, text: 'Купить продукты' },
//         { id: 5, text: 'Сделать зарядку' },
//         { id: 6, text: 'Прочитать книгу' },
//       ]);
//     }, 1000); // Задержка в 1 секунду
//   });
// };
// const ToDoList = ({ items }) => {
//   return (
//     <div>
//       <ul>
//         {items.length && items.map((item, index) => (
//           <li key={index}>{item.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//
// const App = () => {
//   const [tasks, setTasks] = useState(null);
//
//   const handleRefreshTasks = (e) => {
//     if (e.key === 'r') {
//       const tasks = fetchTasks();
//       setTasks(tasks);
//     }
//   };
//
//   useEffect(() => {
//     document.addEventListener('keydown', handleRefreshTasks);
//   });
//
//   return (
//     <div>
//       <h2>Примеры задач:</h2>
//       <ToDoList items={[
//         { id: 1, text: 'Полить цветы' },
//         { id: 2, text: 'Помыть машину' },
//         { id: 3, text: 'Выкинуть мусор' },
//       ]} />
//       <h2>Задачи:</h2>
//       <ToDoList items={tasks || []} />
//     </div>
//   );
// };
//
// export default App;

// Решение:
// import React, { useEffect, useState } from "react";
//
// export const fetchTasks = async () => {
//   // Симуляция API запроса
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 4, text: "Купить продукты" },
//         { id: 5, text: "Сделать зарядку" },
//         { id: 6, text: "Прочитать книгу" },
//       ]);
//     }, 1000); // Задержка в 1 секунду
//   });
// };
//
// const ToDoList = ({ items }) => {
//   return (
//     <div>
//       <ul>
//         {/* такая проверка тк в псиках может быть выведем "нолик" */}
//         {items.length
//           ? items.map((item, index, id) => <li key={id}>{item.text}</li>)
//           : null}
//       </ul>
//     </div>
//   );
// };
//
// // Глобальные переменные
// const ITEMS = [
//   { id: 1, text: "Полить цветы" },
//   { id: 2, text: "Помыть машину" },
//   { id: 3, text: "Выкинуть мусор" },
// ]; // вынесли в глобальную переменную чтобы при каждом рендере не создавалось заново
//
// const App = () => {
//   const [tasks, setTasks] = useState([]);
//
//   useEffect(() => {
//     const handleRefreshTasks = async (e) => {
//       if (e.key === "r") {
//         const tasks = await fetchTasks();
//         setTasks(tasks);
//       }
//     };
//
//     document.addEventListener("keydown", handleRefreshTasks);
//
//     return () => {
//       document.removeEventListener("keydown", handleRefreshTasks);
//     };
//   });
//
//   return (
//     <div>
//       <h2>Примеры задач:</h2>
//       <ToDoList items={ITEMS} />
//       <h2>Задачи:</h2>
//       <ToDoList items={tasks || []} />
//     </div>
//   );
// };
//
// export default App;
