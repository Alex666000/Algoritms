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




// import { useState, useEffect, useCallback } from 'react';
// import React from 'react';
//
// /*
// Задача:
// - В случае если в "апи" отправлено имя несуществующего персонажа, "апи" отвечает ошибкой 404:
// {"error":"There is nothing here"}.
// - Создать приложение, с помощью которого можно искать по списку героев.
// Documentation (rickandmortyapi.com)
// Требования:
// - Одно поле для ввода поискового запроса, запрашивать данные по вводу текста в инпуте
// - После получения ответа вывести список полученных сущностей (только name)
// Индикация состояния загрузки
// - Обработать кейс когда "апи" отвечает ошибкой
// - Вынести ввод в инпут в дебаунс, вынести в кастомный хук логику получения characters в usePeopleQuery()
// - сделать пагинацию + хук для нее кастомный
// */
// function getPeople(searcName, page = 1, options = {}) {
//     return fetch(
//         `https://rickandmortyapi.com/api/character/?name=${searcName}&page=${page}`,
//         options
//     ).then((res) => res.json());
// }
//
// // Custom hooks
// const useFetch = () => {
//     // fetch state
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [search, setSearch] = useState('');
//     const [characters, setCharacters] = useState([]);
//
//     // Функция дебаунса
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
//     // Функция для обработки изменений в поле ввода
//     const handleSearchChange = (e) => {
//         setSearch(e.target.value);
//     };
//
//     const fetchCharacters = useCallback(
//         debounce(async () => {
//             try {
//                 setIsLoading(true);
//                 setError('');
//                 const res = await getPeople(search);
//                 if (res.error) {
//                     throw new Error(res.error);
//                 }
//                 setCharacters(res.results || []);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         }, 500),
//         []
//     );
//
//     // Логика получения данных с API
//     useEffect(() => {
//         fetchCharacters();
//     }, [search]);
//
//     return { handleSearchChange, isLoading, error, characters, search };
// };
//
//
// Итоговое решение:
// function getPeople(searcName, page = 1, options = {}) {
//     return fetch(
//         `https://rickandmortyapi.com/api/character/?name=${searcName}&page=${page}`,
//         options
//     ).then((res) => res.json());
// }
//
// // Custom hooks
// const useFetch = () => {
//     // fetch state
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [search, setSearch] = useState('');
//     const [characters, setCharacters] = useState([]);
//
//     // Pagination state
//     const [curentPage, setCurrentPage] = useState(1);
//     // Если ткущая страница является последней не делать "Прев + 1" и дизеиблить кнопку
//     const [maxPage, setMaxPage] = useState(0);
//
//     const goToPreviousPage = () => {
//         if (curentPage === 1) return;
//         setCurrentPage((prevPage) => prevPage - 1);
//     };
//
//     const goToNextPage = () => {
//         if (setCurrentPage === maxPage) {
//             return;
//         }
//         setCurrentPage((prevPage) => prevPage + 1);
//     };
//
//     // Функция дебаунса
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
//     // Функция для обработки изменений в поле ввода
//     const handleSearchChange = (e) => {
//         // при изменении в инпуте надо получать текущую страницу
//         setCurrentPage(curentPage);
//         setSearch(e.target.value);
//     };
//
//     const fetchCharacters = useCallback(
//         debounce(async (search, curentPage) => {
//             try {
//                 // Перед запросом всегда обнуляем ошибку
//                 setError('');
//                 setIsLoading(true);
//                 const res = await getPeople(search, curentPage);
//                 if (res.error) {
//                     // если ошибка есть попадёт в catch()
//                     throw new Error(res.error);
//                 }
//                 setCharacters(res.results || []); // массив пустой хороший тон
//                 setMaxPage(res.info.pages);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         }, 500),
//         []
//     );
//
//     // Логика получения данных с API
//     useEffect(() => {
//         fetchCharacters(search, curentPage);
//     }, [search, curentPage]); // всегда зависимости в эффекте
//
//     return {
//         handleSearchChange,
//         isLoading,
//         error,
//         characters,
//         search,
//         curentPage,
//         maxPage,
//         goToPreviousPage,
//         goToNextPage,
//     };
// };
//
// // App
// export default function App() {
//     const {
//         handleSearchChange,
//         isLoading,
//         error,
//         characters,
//         search,
//         curentPage,
//         maxPage,
//         goToPreviousPage,
//         goToNextPage,
//     } = useFetch();
//
//     return (
//         <div>
//             <input
//                 type={'search'}
//                 value={search}
//                 onChange={handleSearchChange}
//                 placeholder={'search for characters'}
//             />
//             {isLoading && <div>Loading...</div>}
//             // ошибку что поимали в catch() и ее засетали отрисуем
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//             <ul>
//                 {characters.length > 0 ? (
//                     characters.map((person) => (
//                         <li key={person.id}>{person.name}</li>
//                     ))
//                 ) : (
//                     <li>No characters found!</li>
//                 )}
//             </ul>
//             <button
//                 onClick={goToPreviousPage}
//                 disabled={curentPage === 1 || isLoading}
//             >
//                 Prev
//             </button>
//             <button
//                 onClick={goToNextPage}
//                 disabled={curentPage === maxPage || isLoading}
//             >
//                 Next
//             </button>
//         </div>
//     );
// }














































