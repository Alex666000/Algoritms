import "./styles.css";
import React, { useState } from "react";
import Item from "./Item";

export default function App() {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }]);

  const handleReverseClick = () => {
    setList((old) => old.reverse());
  };

  return (
    <div className="App">
      <h1>I have a bug, click on any item first and then reverse list</h1>
      <ul>
        {list.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
      <button onClick={handleReverseClick}>Click me to reverse a list</button>
    </div>
  );
}
// Решение: 33 мин https://www.youtube.com/watch?v=GlQDFYg33Bw&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=8
// reverse() - мутирующии метод - значит копируем массив + ключ правильный

// export default function App() {
//   // начальное значение заранее известно и его вычисление не требует больших затрат (например, не вызывает тяжелых функций).
//   // значит инициализация через колбек не нужна тут лишняя..

//   // Вы хотите избежать повторного выполнения кода начальной инициализации при каждом ререндере родительского компонента.
//   // В вашем случае начальное значение — статичный массив объектов. Вы можете оставить прямую инициализацию, так как разницы
//   // в производительности не будет. Использовать функцию тут не обязательно.
//   const [list, setList] = useState([{ id: 1 }, { id: 2 }]);
//
//   const handleReverseClick = () => {
//     // reverse() - "мутирующий" метод, он мутирует старую ссылку old, в setList одна и таже ссылка передается и за этого не
//     // происходит "ререндер"

//     setList((old) => [...old].reverse());
//   };
//
//   return (
//     <div className="App">
//       <h1>I have a bug, click on any item first and then reverse list</h1>
//       <ul>
//         {list.map((item, index) => (
//           <Item key={item.id} item={item} />
//         ))}
//       </ul>
//       <button onClick={handleReverseClick}>Click me to reverse a list</button>
//     </div>
//   );
// }
// Метод .reverse() изменяет (мутизирует) исходный массив, вместо того чтобы создавать новый.
// В React важно не изменять (мутизировать) состояние напрямую, так как это может нарушить работу механизмов сравнения (reconciliation)
// и вызовов ререндеров. React ожидает, что состояние будет иммутабельным (неизменяемым).
// Когда вы делаете old.reverse(), вы:
// Изменяете старый массив, который React по-прежнему использует для предыдущего состояния.
// Это приводит к тому, что React может не увидеть разницу между старым и новым состоянием. В итоге, компонент может не ререндериться правильно.
