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
// -----------------------------------------------------------------------------------------------------

// РЕШЕНИЕ:
// import { createRoot } from 'react-dom/client';
// import { useState } from 'react';
//
// type Message = {
//     id: string | number;
//     count: number;
//     button?: boolean;
//     text?: string;
// };
//
// export function App() {
//     const [inputText, setInputText] = useState('');
//     const [messages, setMessages] = useState<Message[]>([]);
//
//     const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInputText(e.target.value.trim());
//     };
//
//     const addMessage = () => {
//         const newMessage = { id: Date.now(), count: 0, text: inputText };
//         setMessages((prevStateArray) => [...prevStateArray, newMessage]);
//         setInputText('');
//     };
//
//     const handleLikesCount = (id: any) => {
//         setMessages((prevStateArray) =>
//             prevStateArray.map((message) =>
//                 id === message.id
//                     ? { ...message, count: message.count + 1 }
//                     : message
//             )
//         );
//     };
//
//     const totalLikes = messages.reduce((acc, message) => {
//         return acc + message.count;
//     }, 0);
//
//     return (
//         <div>
//             <h1>Likes: {totalLikes}</h1>
//             <input value={inputText} onChange={handleChangeInputText} />
//             <button onClick={addMessage}>Add new message</button>
//             {messages.length > 0
//                 ? messages.map((message) => {
//                       return (
//                           <li>
//                               <span>Count:{message.count}</span>
//                               <button
//                                   onClick={() => handleLikesCount(message.id)}
//                               >
//                                   Like
//                               </button>
//                               {message.text}
//                           </li>
//                       );
//                   })
//                 : null}
//         </div>
//     );
// }
//
// // Рендер приложения
// createRoot(document.getElementById('root')).render(<App />);

/* Объяснение задачи -алгоритм мышления:
- Алгоритм как мыслить: сначала пишем данные потом разметку под данные
для каждого состояния - свой handler создаем + для добавления лаиков handler
- стеит для инпута + стеит для добавления сообщений в массив что ввели в инпут
- смотрим картинку анализируем стеиты: видим инпут с кнопкои (делаем для него стеит и обработку)
видим два сообщения: одно сообщение состоит из: кол-ва лаиков count и кнопки Like и так как сообщение
это объект еще и id каждому обьекту. Кол-во Likes - начит редьюсом бежим по всем сообщениям и считаем
Для count стеит не нужен это составная часть === своитсво одного сообщения
handleLikeMessage - тк счетчик лаиков лежит в сущности "сообщений" в обьекте "сообщение"
меняем его стеит
 */

