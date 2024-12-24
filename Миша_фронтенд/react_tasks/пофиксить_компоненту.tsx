// Пофиксить: 55 мин https://www.youtube.com/watch?v=A5YpfpgEosQ
import React, { useState, useEffect } from "react";

// Имитация асинхронного запроса к API
const fetchCall = () => Promise.resolve(Math.random());

const NumberAndScrollX = () => {
  const [number, setNumber] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(async () => {
    setNumber(await fetchCall());

    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  });

  return (
    <div>
      <div>Number: {number}</div>
      <div>ScrollY: {scroll}</div>
    </div>
  );
};
// Решение: (разделим на 2 эффекта: 1 - за фетчинг данных, 2 - за скролл) +  создать стеит для ошибки и статуса загрузки +
// import React, { useState, useEffect } from "react";
//
// // Имитация асинхронного запроса к API
// const fetchCall = async () => Promise.resolve(Math.random());
//
// const NumberAndScrollX = () => {
//   const [number, setNumber] = useState(0); // неиминг поменять так как "number" пересечение с типом, можно "num" назвать
//   const [scroll, setScroll] = useState(window.scrollY);
//
//   useEffect(() => {
//     const fetchNumber = async () => {
//       try {
//         const num = await fetchCall();
//
//         if (!res.ok) {
//           throw new Error("Failed:", res.status);
//         }
//
//         setNumber(res);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//
//     fetchNumber();
//   }, []);
//
//   useEffect(() => {
//     const onScroll = () => setScroll(window.scrollY);
//
//     window.addEventListener("scroll", onScroll); // тут "throttle" посесить
//
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);
//   return (
//     <div>
//       <div>Number: {number}</div>
//       <div>ScrollY: {scroll}</div>
//     </div>
//   );
// };
