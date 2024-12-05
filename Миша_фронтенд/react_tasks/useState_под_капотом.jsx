// 56 https://www.youtube.com/watch?v=DEP_9rrIVWk&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=13
//
import React, {useState} from 'react';

export default () => <div>Clicker </div>;

const heavyFunc = (count) => {
  // hard calculation
  // компонент например выполняется 10 сек - при инишлстеите useState(heavyFunc(props.count)) что будет с UI?:
};

const lazyInit = (props) => {
  const [count, setCount] = useState(heavyFunc(props.count));

  return {
    count,
    setCount: (prevProps) => setCount(prevProps + 1)
  };
};
// -------------------------------------------------------------------------------------------
// Решение:
// 1 Способ:
export default () => <div>Clicker </div>;

const heavyFunc = (count) => {
  // hard calculation
  // компонент например выполняется 10 сек - при инишлстеите useState(heavyFunc(props.count)) что будет с UI?:
};

const lazyInit = (props) => {
  const [count, setCount] = useState(() => heavyFunc(props.count));

  return {
    count,
    setCount: (prevProps) => setCount(prevProps + 1)
  };
};
/*
- UI заблокируется на время выполнения этои функции: useState(heavyFunc(props.count)) - тк функция синхронно выполняется, функция
 переданная в useState() выполняется синхронно, если вызываем setCount - вызывается он синхронно но значение изменяется асинхронно, те
 он планирует ререндер потом когда ререндер произоидет значение изменится или кратко:
 "изменили стеит 1 раз пошел ререндер изменили его снова снова ререндер - тк функция тяжелая: heavyFunc(props.count) в инишлстеите,
  будет вызываться каждый раз при ререндере" - выход в колбек чтобы вызывалась только при первом рендере:
 */

// 2 Способ: вынести heavyFunc(props.count) в эффект - тк эффект асинхронно выполняется а в стеите инициализировать значение нулем

// 3 Способ: в useMemo() вынести тяжесть из heavyFunc

// 4 Способ: тяжесть в веб-воркер вынести
