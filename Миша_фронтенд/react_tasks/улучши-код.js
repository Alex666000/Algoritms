import React, {useState, useEffect} from 'react';

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// имитируем запрос к серверу, просто получаем число асинхронно
const randomNumber = () => Promise.resolve(randomInteger(9000, 11000));
const testData = [];

export const randomList = () => {
  const [number, setNumber] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(async () => {
    setNumber(await randomNumber());
    window.addEventListener('scroll', () => setScroll(window.scrollY));

    for (let i = 0; i < number; i++) {
      testData.push(randomInteger(0, 20));
    }

    return () => {
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
    };
  });

  return (
    <div>
      <div>Количество справочников: {number} </div>
      <div>Scroll: {scroll}</div>
      <div>Список полученных значений</div>
      <div style={{height: 400, overflow: 'hidden'}}>
        {testData.map((el, index) => (
          <div style={{height: 20}}>
            Справочник {index}
          </div>
        ))}
      </div>
    </div>
  );
};
/*
Решение:
import React, { useState, useEffect } from "react";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// имитируем запрос к серверу, просто получаем число асинхронно
const randomNumber = () => Promise.resolve(randomInteger(9000, 11000));

export const randomList = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const number: any;

    for (let i = 0; i < number; i++) {
      testData.push(randomInteger(0, 20));
    }
  }, [number]);

  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const data = await randomNumber();
        setNumber(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNumber();
  }, []);

  const handleScroll = () => setScroll(window.scrollY);

  window.addEventListener("scroll", handleScroll);
 };
  });

   return (
    <div>
      <div>Количество справочников: {number} </div>
      <div>Scroll: {scroll}</div>
      <div>Список полученных значений</div>
      <div style={{ height: 400, overflow: "hidden" }}>
        {testData.map((el, index) => (
          <div style={{ height: 20 }}>
            Справочник {index}
          </div>
        ))}
      </div>
    </div>
  );




 */
