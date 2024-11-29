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
//   const [list, setList] = useState([{ id: 1 }, { id: 2 }]);
//
//   const handleReverseClick = () => {
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
