// import React, { useEffect, useState } from 'react';

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
//   }, []);
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
