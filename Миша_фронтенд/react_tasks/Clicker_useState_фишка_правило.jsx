// Исходник:
// Что будет если 3 раза непрерывно нажмем на кнопку?
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

createRoot(document.getElementById('root') as HTMLElement).render(<Clicker_useState__ />); */
// --------------------------------------------------------------------------------------------------
export default () => <div><Clicker/></div>;

function Clicker() {
  const [clicks, setClicks] = useState(0);

  const onClick = () => {
    setTimeout(() => {
      // setClicks(clicks + 1);
      setClicks(clicks => clicks + 1);
      // clicks - тут всегда будет ноль (замыкается внутри таимера на свое начальное значение "0") - чтобы поправить передаем колбек
      // clicks - при старом решении: setClicks(clicks + 1) -  замыкается внутри таймера: setTimeout, Через 2 секунды таймер запускает
      // Но "clicks" внутри этого кода — всё ещё то старое значение === 0, которое было, когда таймер создался.

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
- что будет если 3 раза непрерывно нажмем на кнопку? Один раз счетчик увеличиться на 1
- как сделать чтобы когда трижды нажмем быстро замыкане сработало а увелилился до 3 счетчик

"Помещаем в колбек: setClicks((clicks) => clicks + 1)"
 */
