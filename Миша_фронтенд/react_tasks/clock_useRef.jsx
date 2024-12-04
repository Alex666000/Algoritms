// 32 https://www.youtube.com/watch?v=Z-oB7g-y3v8&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=11
// Есть часы - сделать чтобы они тикали каждую секунду и менять значение на новую ISO строку + при "анмаунте" компонента вызывать
// logMetric и передавать в нее последнюю ISO строку которую мы отобразили пользователю
function logMetric(date) {
  fetch('/api/metric', {method: 'POST', body: JSON.stringify({date})});
}

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());

  return <h1>{currentDate}</h1>;
}
// --------------------------------------------------------------------------------------------------------------------
// Решение:
function logMetric(date) {
  fetch('/api/metric', {method: 'POST', body: JSON.stringify({date})});
}

const Clock = () => {
  // const [currentDate, setCurrentDate] = useState(new Date().toISOString()); // так при каждом рендере срабатывать будет функция:
  // new Date() - поэтому пишем так: через колбек: useState(() => (new Date()).toISOString()):
  const [currentDate, setCurrentDate] = useState(() => (new Date()).toISOString()); // так: (new Date()) - чтобы вызвалась сначала функция
  // new Date(), она вернет объект, потом у него вызываем метод: toISOString() - иначе не сработает

  // Сохраняем последнюю дату между рендерами в "useRef"
  const dateRef = useRef(currentDate);

  // "интервал" - это саид эффект - поэтому в "useEffect"_е делаем..
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate((new Date()).toISOString());
      // на каждую секунду обновлять надо "dateRef.current" (пишем в setInterval()) и обновленная дата придет
      dateRef.current = new Date().toISOString() // в:logMetric(dateRef.current) при "unmount" :
    }, 1000);

    // 'клипан'(очищаем чтобы не было утечек памяти.. срабатывает при 'анмаунте' компонента
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Чтобы разделить логику создадим еще один эффект
  useEffect(() => {
    // logMetric(currentDate); // так берется дата из замыкания из "инишлстеита" === самая первая дата, а нам нужна последняя дата

    // При анмаунте отправляем последнюю дату (ее обновили в первом эффекте)
    logMetric(dateRef.current);
    return () => {
    };
  }, []);

  return <h1>{currentDate}</h1>;
};

// 2 Способ: через "requestAnimationFrame"
// import { useEffect, useRef, useState } from 'react';
// import { createRoot } from 'react-dom/client';
//
// function logMetric(date: string) {
//   fetch('/api/metric', { method: 'POST', body: JSON.stringify({ date }) });
// }
//
// const Clock = () => {
//   const [currentDate, setCurrentDate] = useState(new Date().toISOString());
//   const dateRef = useRef(currentDate);
//   const rafRef = useRef<number | null>(null); // для хранения идентификатора requestAnimationFrame
//
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date().toISOString();
//       setCurrentDate(now);
//       dateRef.current = now;
//
//       // Планируем следующий вызов через requestAnimationFrame
//       rafRef.current = requestAnimationFrame(updateTime);
//     };
//
//     // Запускаем обновление
//     updateTime();
//
//     return () => {
//       if (rafRef.current !== null) {
//         cancelAnimationFrame(rafRef.current); // Очищаем requestAnimationFrame
//       }
//       logMetric(dateRef.current); // Отправляем последнюю дату
//     };
//   }, []);
//
//   return <h1>{currentDate}</h1>;
// };
//
// createRoot(document.getElementById('root') as HTMLElement).render(<Clock />);
