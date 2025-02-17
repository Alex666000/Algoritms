// Приложение содержит кнопку, при нажатии на которую должен появиться инпут с фокусом. Но почему-то это не работает.
// Расскажите, почему возникает такая проблема и предложите варианты её исправления.
// Или проще: установить фокус инпуту чтобы встал фокус после клика по кнопке
// Задача: 24 мин https://www.youtube.com/watch?v=EmTq_uf2P-0
// Тут: https://stackblitz.com/edit/vitejs-vite-utgzjz?embed=1&file=src%2Fmain.tsx&hideExplorer=1
import { useRef, useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef();

  const toggleInput = () => {
    setIsVisible(true);
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={toggleInput}>Show and focus input</button>
      {isVisible && <input ref={inputRef} type="text" />}
    </div>
  );
}

// Создается Реакт приложение
const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}

// 1 Способ решения: через  useEffect: useEffect, который отслеживает изменение состояния isVisible. Это гарантирует, что фокус
// будет установлен после того, как элемент появится в DOM.
// export default function App() {
//     const [isVisible, setIsVisible] = useState(false);
//     const inputRef = useRef(null);
//
//     const toggleInput = () => {
//         setIsVisible(true);
//
//     };
//
//     useEffect(() => {
//         if(isVisible) {
//             inputRef?.current?.focus();
//         }
//     }, [isVisible]);
//
//     return (
//         <div>
//             <button onClick={toggleInput}>Show and focus input</button>
//             {isVisible && <input ref={inputRef} type="text" />}
//         </div>
//     );
// }
//
// // Создается Реакт приложение
// const root = document.getElementById('root');
// if (root) {
//   createRoot(root).render(<App />);
// }

// 2 Способ решения:
// поставить автофокус -  {isVisible && <input ref={inputRef} autofocus type="text" />}
/*
callbackRef: https://www.youtube.com/watch?v=MLWsLn_jeGc&t=1122s
Использование колбэк-рефа (callback ref) также является корректным способом установки фокуса на элемент, который динамически добавляется в DOM.
Колбэк-реф позволяет получить доступ к элементу сразу после его появления.
-----------------------------------------
3 Способ решения - callbackRef - при монтировании в el попадает ДОМ-нода те div-ка содержащая кнопку, а при размонтировании null
{isVisible && <input ref={(input) => input?.focus()} autoFocus type="text" />}
 */
