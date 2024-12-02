/*
"Месенжер" - внутри которого общее кол-во лаиков, сообщенеи введенное в инпут - каждое сообщение и кол-во лаиков на нем можно лаикнуть
внизу инпут и кнопка отправить сообщение - при нажатии на кнопку отправить добавляется еще один "message"
 */
// Исходник:
// import React from 'react';
//
// export function App(props) {
//     return (
//         <div className="App">
//             <h1>Hello React.</h1>
//             <h2>Start editing to see some magic happen</h2>
//         </div>
//     );
// }
//
// // log to console
// console.log('Hello console.');

// РЕШЕНИЕ:
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';
//
// export function App() {
//     const [inputText, setInputText] = useState('');
//     const [messages, setMessages] = useState([]);
//
//     // Обработчик изменения в поле ввода
//     const handleChangeInput = (e) => {
//         setInputText(e.target.value);
//     };
//
//     // Обработчик добавления сообщения
//     const handleAddMessage = (e) => {
//         e.preventDefault();
//
//         // Проверяем, чтобы не добавлять пустые сообщения
//         if (inputText.trim() === '') return;
//
//         const newMessage = { id: Date.now(), text: inputText, likes: 0 };
//
//         setMessages((prevState) => [...prevState, newMessage]);
//         setInputText('');
//     };
//
//     // Обработчик лайка для сообщения
//     const handleLikeMessage = (id) => {
//         setMessages((prev) =>
//             prev.map((message) =>
//                 id === message.id
//                     ? { ...message, likes: message.likes + 1 }
//                     : message
//             )
//         );
//     };
//
//     // Общий счётчик лайков
//     const totalLikesCount = messages.reduce(
//         (acc, message) => acc + message.likes,
//         0
//     );
//
//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//             <h1>Total Likes: {totalLikesCount}</h1>
//
//             {/* Список сообщений */}
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//                 {messages.map((message) => (
//                     <li key={message.id}>
//                         <span>
//                             {message.text} (Likes: {message.likes})
//                         </span>
//                         <button onClick={() => handleLikeMessage(message.id)}>
//                             Like
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//
//             {/* Форма для добавления нового сообщения */}
//             <form onSubmit={handleAddMessage} style={{ marginTop: '20px' }}>
//                 <input
//                     value={inputText}
//                     onChange={handleChangeInput}
//                     placeholder="Type a message"
//                 />
//                 <button type="submit">Add message</button>
//             </form>
//         </div>
//     );
// }
//
// // Рендер приложения
// createRoot(document.getElementById('root')).render(<App />);

/*
- Алгоритм как мыслить: сначала пишем данные потом разметку под данные
для каждого состояния - свой handler создаем + для добавления лаиков handler
 */

