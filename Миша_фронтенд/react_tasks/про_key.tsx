// https://codesandbox.io/p/sandbox/c7c43m?file=%2Fsrc%2Findex.tsx%3A9%2C24 Sandbox 35 мин
// Исходники:
// При смене viewState не сбрасывается count - Как сделать так, чтобы счётчик сбрасывался на "0" - при клике на кнопку "toggle page"
// Сделай все возможные варианты

import React, {useState, FC} from "react";

const Clicked: React.FC<{ count: number }> = ({count}) => {
  return <p>Clicked: {count}</p>;
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click me!</button>
      <Clicked count={count}/>
    </div>
  );
};

const Page = ({page}: { page: string; }) => {
  return (
    <div>
      page: {page}
      <Counter/>
    </div>
  );
};

export const SwitchView = () => {
  const [viewState, setViewState] = useState<"one" | "two">("one");

  const togglePage = () => {
    setViewState((prev) => (prev === "one" ? "two" : "one"));
  };

  return (
    <>
      <button onClick={togglePage}>toggle page</button>
      <Page page={viewState}/>
    </>
  );
};

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { SwitchView } from "./switch-view";
//
// const rootElement = document.getElementById("root")!;
// const root = ReactDOM.createRoot(rootElement);
//
// root.render(<SwitchView />);

// 1 Способ:
// Решение: (создали ключ у "Page" в SwitchView: key={viewState} - при клике будет изменяться ключ компонента и это будет вызывать
// размонтирование и вмонтирование с обновлением стеита. Минусы (подводные камни): если в "Page" будет использоваться какои-то другои "стеит" который нам не
// нужно обновлять то он тоже будет обновляться. "Размонтирование" и "вмонтирование" более тяжелые операции чем изменить "стейт" в useEffect в "Counter")

// То сть если мы в компоненте каком-то меняем значение "ключа" (key) - то все что по дереву ниже этого компонента оно все "размонтируется", "вмонтируется"с
// начальными состояниями, если там были какие-то вычисления, состояния - они все сбросятся на дефолтное значение("потеряются"), В этои задаче это вполне себе
// так как стеита в Page не создан

// React использует "key" для идентификации компонентов в дереве. При смене "ключа" React "пересоздаёт компонент с новым состоянием".
// Состояние счётчика (count) сбрасывается, потому что "Counter" и всё его дерево заново монтируются.

// 3 Способ: С помощью useEffect() функции. Сбрасываем явно состояние при размонтировании компонента
// export const Counter = ({ onReset }: { onReset: () => void }) => {
//   const [count, setCount] = useState(0);
//
//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };
//
//   React.useEffect(() => {
//     onReset(() => setCount(0)); // Регистрируем сброс
//   }, [onReset]);
//
//   return (
//     <div>
//       <button onClick={increment}>Click me!</button>
//       <Clicked count={count} />
//     </div>
//   );
// };
//
// const Page = ({ page, onReset }: { page: string; onReset: (resetFn: () => void) => void }) => {
//   return (
//     <div>
//       page: {page}
//       <Counter onReset={onReset} />
//     </div>
//   );
// };
//
// export const SwitchView = () => {
//   const [viewState, setViewState] = useState<"one" | "two">("one");
//   const [resetFn, setResetFn] = useState<(() => void) | null>(null);
//
//   const togglePage = () => {
//     if (resetFn) resetFn(); // Сбрасываем счётчик
//     setViewState((prev) => (prev === "one" ? "two" : "one"));
//   };
//
//   return (
//     <>
//       <button onClick={togglePage}>toggle page</button>
//       <Page page={viewState} onReset={setResetFn} />
//     </>
//   );
// };

// "3" с useRef- функцией
// import React, { useState, FC, useEffect, useRef } from "react";
//
// const Clicked: React.FC<{ count: number }> = ({ count }) => {
//   return <p>Clicked: {count}</p>;
// };
//
// export const Counter = ({ onReset }: { onReset: (fn: () => void) => void }) => {
//   const [count, setCount] = useState(0);
//
//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };
//
//   useEffect(() => {
//     onReset(() => setCount(0));
//   }, [onReset]);
//
//   return (
//     <div>
//       <button onClick={increment}>Click me!</button>
//       <Clicked count={count} />
//     </div>
//   );
// };
//
// const Page = ({
//   page,
//   onReset,
// }: {
//   page: string;
//   (onReset: (fn: () => void) => void);
// }) => {
//   return (
//     <div>
//       page: {page}
//       <Counter onReset={onReset} />
//     </div>
//   );
// };
//
// export const SwitchView = () => {
//   const [viewState, setViewState] = useState<"one" | "two">("one");
//   const resetRef = useRef<() => void | null>(null);
//
//   const togglePage = () => {
//     resetRef.current();
//     setViewState((prev) => (prev === "one" ? "two" : "one"));
//   };
//
//   return (
//     <>
//       <button onClick={togglePage}>toggle page</button>
//       <Page
//         page={viewState}
//         onReset={(fn) => {
//           resetRef.current = fn;
//         }}
//       />
//     </>
//   );
// };
