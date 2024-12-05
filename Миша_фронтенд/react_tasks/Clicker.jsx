// Исходник:
/* import { useEffect, useLayoutEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

export default () => <div><Clicker /></div>;

function Clicker() {
  const [clicks, setClicks] = useState(0);

  const onClick = () => {
    setTimeout(() => {
      setClicks(clicks + 1);
    }, 2000);
  };

  return (
    <>
      {clicks}
      <button onClick={onClick}>Increment</button>
    </>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(<Clicker />); */
// --------------------------------------------------------------------------------------------------
export default () => <div><Clicker /></div>;

function Clicker() {
  const [clicks, setClicks] = useState(0);

  const onClick = () => {
    setTimeout(() => {
      // setClicks(clicks + 1);
      setClicks(clicks => clicks + 1); // clicks - тут всегда будет ноль - чтобы поправить передаем колбек

    }, 2000);
  };

  return (
    <>
      {clicks}
      <button onClick={onClick}>Increment</button>
    </>
  );
}
// Ответ:
/*
- что будет если 3 раза нажмем на кнопку? Через каждые 2 сек увеличивается счетчик всегда на 1
- чтобы сохранял предыдущие значения
 */
