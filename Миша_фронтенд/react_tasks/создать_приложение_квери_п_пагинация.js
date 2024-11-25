/*
https://interview.tbank.ru/link/rLQWMqpRLT0z/interview
Задача:
В случае если в "апи" отправлено имя несуществующего персонажа, "апи" отвечает ошибкой 404:
{"error":"There is nothing here"}.
Создать приложение, с помощью которого можно искать по списку героев.
Documentation (rickandmortyapi.com)
Требования:
- Одно поле для ввода поискового запроса, запрашивать данные по вводу текста в инпуте
- После получения ответа вывести список полученных сущностей (только name)
Индикация состояния загрузки
- Обработать кейс когда "апи" отвечает ошибкой
- Вынести ввод в инпут в дебаунс, вынести в кастомный хук логику получения characters в usePeopleQuery()
- сделать пагинацию + хук для нее кастомный
https://www.youtube.com/watch?v=EmTq_uf2P-0     32 min
исходник:
import React from 'react';

function getPeople(name, page = 1, options = {}) {
  return fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`,
    options
  )
  .then((res) => res.json());
}

export default function App() {
  return '20 minutes adventure!';
}
 */

// Решение
// дебаунс const debounce = (callback, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// };

// import { useEffect, useState } from 'react';
// import { createRoot } from 'react-dom/client';
//
// /*
// В случае если в апи отправлено имя несуществующего персонажа, апи отвечает ошибкой 404:
// {"error":"There is nothing here"} то занулить ошибку
//
// Создать приложение, с помощью которого можно искать по списку героев.
// Documentation (rickandmortyapi.com)
// Требования:
// - Одно поле для ввода поискового запроса, запрашивать данные по вводу текста
// - После получения ответа вывести список полученных сущностей (только name)
// Индикация состояния загрузки
// - Обработать кейс когда апи отвечает ошибкой
// */
//
// function getPeople(name, page = 1, options = {}) {
//     return fetch(
//         `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`,
//         options
//     ).then((res) => res.json());
// }
//
// // Custom hook
// const usePeopleQuery = () => {
//     // Fetch logic
//     const [query, setQuery] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [peoples, setPeoples] = useState([]);
//
//     // Pagination
//     const [currentPage, setCurrentPage] = useState(1);
//     const [maxPage, setMaxPage] = useState(0);
//
//     const isDisableNextPageButton = maxPage === currentPage || isLoading;
//
//     const handlePrevPage = () => {
//         // Если страница является первой не делать вычтание - 1 и дизеиблить
//         if (prevState === 1) {
//             return;
//         }
//         setCurrentPage((prevState) => prevState - 1);
//     };
//
//     const handleNextPage = () => {
//         // Если страница является последней не прибавлять и дизеиблить
//         if (maxPage === currentPage) {
//             return;
//         }
//         setCurrentPage((prevState) => prevState + 1);
//     };
//
//     const debounce = (callback, delay) => {
//         let timeoutId;
//         return (...args) => {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 callback(...args);
//             }, delay);
//         };
//     };
//
//     // fetch
//     const fetchPeoples = React.useCallback(
//         debounce(async (query, page) => {
//             try {
//                 setIsLoading(true);
//                 const res = await getPeople(query, page);
//                 if (res.error) {
//                     throw res.error;
//                 }
//
//                 setPeoples(res.result || []);
//                 setMaxPage(res.info.page);
//                 setError('');
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setIsLoading(false);
//             }
//         }, 500),
//         []
//     );
//
//     useEffect(() => {
//         fetchPeoples(query, currentPage);
//     }, [query, currentPage]);
//
//     return {
//         query,
//         isLoading,
//         peoples,
//         error,
//         handlePrevPage,
//         handleNextPage,
//         setCurrentPage,
//         isDisableNextPageButton,
//     };
// };
//
// // App
// export default function App() {
//     const {
//         isLoading,
//         peoples,
//         error,
//         handlePrevPage,
//         handleNextPage,
//         isDisableNextPageButton,
//         setCurrentPage,
//         query,
//     } = usePeopleQuery();
//
//     const handleChancheQuery = (e) => {
//         setCurrentPage(1);
//         setQuery(e.target.value);
//     };
//
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div>
//             <input
//                 value={query}
//                 onChange={handleChancheQuery}
//                 placeholder="search"
//             />
//             {error && <div style={{ color: 'red' }}>Error</div>}
//             <ul>
//                 {peoples.map((person) => {
//                     return <li key={person?.id}>{person?.name}</li>;
//                 })}
//             </ul>
//             <button
//                 onClick={handleNextPage}
//                 disabled={isDisableNextPageButton}
//                 type="button"
//             >
//                 Prev
//             </button>
//             <button onClick={handlePrevPage} type="button">
//                 Next
//             </button>
//         </div>
//     );
// }























































