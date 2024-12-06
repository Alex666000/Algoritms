// 19 мин: https://www.youtube.com/watch?v=EDif0w660Qg&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=2
// Исходник: улучши исходный код допиши код доработай его
// import React, { useEffect, useState } from 'react';
// // Симуляция API запроса за тасками
// const fetchTasks = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isError = Math.random() > 0.5;
//
//       if (isError) {
//         reject(new Error('Failed'));
//       }
//
//       resolve([
//         { id: 1, text: 'rtyuo' },
//         { id: 2, text: 'wsdc' },
//       ]);
//     }, 1000);
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
//       <ToDoList items={tasks} />
//     </div>
//   );
// };
//
// export default App;
// --------------------------------------------------------------------------------------------------------------------------------------
// Решение:
// import React, {useEffect, useState} from 'react';
//
// export const fetchTasks = async () => {
//   // Симуляция API запроса
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {id: 4, text: 'Купить продукты'},
//         {id: 5, text: 'Сделать зарядку'},
//         {id: 6, text: 'Прочитать книгу'},
//       ]);
//     }, 1000); // Задержка в 1 секунду
//   });
// };
// // по дефолту пустой массив укажем чтобы ТС не ругался
// const ToDoList = ({items = []}) => {
//   return (
//     <div>
//       <ul>
//         {/* такая проверка тк в псиках может быть выведем "нолик" */}
//         {items.length
//           ? items.map((item, index, id) => <li key={item.id}>{item.text}</li>)
//           :  <li>Другой контент</li>}
//       </ul>
//     </div>
//   );
// };
//
// // Глобальные переменные (вынесли в глобальную переменную чтобы при каждом рендере не создавался заново массив - ссылка не пересоздавалась)
// const ITEMS = [
//   {id: 1, text: 'Полить цветы'},
//   {id: 2, text: 'Помыть машину'},
//   {id: 3, text: 'Выкинуть мусор'},
// ]; // вынесли в глобальную переменную чтобы при каждом рендере не создавался заново массив - ссылка не пересоздавалась
//
// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//
//   useEffect(() => {
//     const handleRefreshTasks = async (e) => {
//       if (e.key === 'r') {
// // Запрос на сервер оборачиваем в try catch
//         try {
//           const tasks = await fetchTasks();
//           setTasks(tasks);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     };
//     document.addEventListener('keydown', handleRefreshTasks);
//
//     return () => {
//       document.removeEventListener('keydown', handleRefreshTasks);
//     };
// // Тут handleRefreshTasks - вызывать не надо! Тк она вызывается на событие "keydown"
//   }, []);
//
//   // section вместо div так семантичнее правильнее тк внутри есть заголовок + h3 сделали вместо <h2>Задачи:</h2>
//   return (
//     <section>
//       <h2>Примеры задач:</h2>
//       {isLoading && <div>Loading...</div>}
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <ToDoList items={ITEMS}/>
//       <h3>Задачи:</h3>
//       <ToDoList items={tasks || []}/>
//     </section>
//   );
// };
//
// export default App;
