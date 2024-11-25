// Приложение содержит кнопку, при нажатии на которую должен появиться инпут с фокусом. Но почему-то это не работает.
// Расскажите, почему возникает такая проблема и предложите варианты её исправления.
// Или проще: установить фокус инпуту чтобы встал фокус после клика по кнопке

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
// 1 Способ решения: через  useEffect:
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
-----------------------------------------
3 Способ решения
{isVisible && <input ref={(el) => el?.focus()} autoFocus type="text" />}
 */
