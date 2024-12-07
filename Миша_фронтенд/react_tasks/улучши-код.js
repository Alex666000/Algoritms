// https://www.youtube.com/watch?v=1lGVCSFmUhE&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=6  45 мин
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

export const RandomList = () => {
   const [testData, setTestData] = useState([]);
  const [number, setNumber] = useState(0);
  const [scroll, setScroll] = useState(window.scrollY); // Для скролла добавил бы тротлинг

  useEffect(() => {
    for (let i = 0; i < number; i++) {
      testData.push(randomInteger(0, 20)); // тк testData имитация ответа от бэка то делаем локал стеит а логику переносим в эффект
    }
  }, [number]);

  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const data = await randomNumber();
        setNumber(data);
      } catch (err) {
        console_enet_loop.log(err);
      }
    };

    fetchNumber(); // пишем сразу после функции запроса после fetchNumber...
  }, []);

  const handleScroll = () => setScroll(window.scrollY); // Эта функция остаётся неизменной, и её ссылка передаётся в addEventListener и removeEventListener

  window.addEventListener("scroll", handleScroll); // При каждом ререндере компонента создаётся новая стрелочная функция - поэтому
   // вынесли в handleScroll иначе отписка не будет происходить - будет засоряться память в браузере
 };
  });

// el - динамическое значение - будет меняться при изменении number - лучше index не использовать
   return (
    <section>
      <h2>Количество справочников: {number} </h2>
      <p>Scroll: {scroll}</p>
      <ul>Список полученных значений</div>
      <div style={{ height: 400, overflow: "hidden" }}>
        {testData.map((el, index) => (
          <li style={{ height: 20 }}>
            Справочник {index}
          </li>
        ))}
      </ul>
    </section>
  );

Проблемы в текущем коде
1. Нарушение правил React-хуков:
В useEffect используется асинхронная функция напрямую (async () =>). Будет ошибка и хук эффекта сам по себе асинхронен.
Решение: Вложить асинхронный код в функцию внутри useEffect на получение данных с сервера в fetchNumberData например
2. Мутация внешнего массива:
testData — это внешний массив, который изменяется внутри компонента("мапимся по нему"). Мутация внешних данных.
Решение: Использовать состояние (useState) для хранения данных. React обновит компонент автоматически, если массив изменится.
4. Прерывание обновления при отписке от "scroll"
В return функции useEffect используется новая функция для удаления обработчика scroll, которая не совпадает с той, что была зарегистрирована.
Решение: Сохранить функцию-обработчик в переменной и удалить именно её в клинапе эффекта
5. Отсутствие уникальных ключей для элементов списка
В методе .map отсутствуют уникальные ключи для элементов списка. Это может привести к проблемам при обновлении списка - индекс опасно
писать лучше id...
Решение: Использовать уникальные индексы или значения в качестве ключей.
6. Рендеринг большого количества элементов
Если число number будет большим, например, 10 000, это может сильно нагружать интерфейс. (const randomNumber = () => Promise.resolve(randomInteger(9000, 11000));)
Решение: Использовать "виртуализацию" или пагинацию для отображения длинных списков (например, библиотеку react-window или аналог).
7 Верстка - ul li и тд... Вынести стили из style, в css,
8. window.addEventListener('scroll', () => setScroll(window.scrollY));
Здесь каждый раз создаётся новая анонимная функция (() => setScroll(window.scrollY)) при каждом вызове useEffect. Это приводит к двум проблемам:
Лишние подписки на scroll: На каждую перерисовку компонента добавляется новый обработчик события, который не удаляется должным образом. Это может вызвать утечку памяти и дублирование действий.
Отписка не работает: В return блоке useEffect передаётся другая анонимная функция, которая не совпадает с изначально зарегистрированной. Поэтому удаление обработчика становится неэффективным.
Решение - вынести в функцию handleScroll:
const handleScroll = useCallback(() => {
  setScroll(window.scrollY);
}, []);

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [handleScroll]);
Вынес обработчик в handleScroll и обернул его в useCallback. Теперь эта функция создаётся только один раз (или при изменении зависимостей, если они есть).
Отписка работает корректно, так как добавляется и удаляется один и тот же экземпляр функции.
Почему useCallback? React использует сравнение ссылок для определения изменений в зависимостях.
Если не обернуть функцию в useCallback, она будет создаваться заново при каждом рендере, из-за чего React будет думать, что зависимости изменились.
Это приведёт к лишним вызовам useEffect.
----------
2. Будет ли "прыгание" из-за scroll с начальным значением 0?
Ваше замечание:

const [scroll, setScroll] = useState(0);
Это значение 0, и при первом скролле может возникнуть мерцание.
Пояснение: Начальное значение scroll (0) корректно отображает положение страницы до первого скролла. Если у пользователя начальное положение уже имеет значение scrollY > 0 (например, при восстановлении скролла после перезагрузки), это может создать визуальное несоответствие.
Решение:
Инициализировать scroll с текущего значения window.scrollY:

const [scroll, setScroll] = useState<number>(window.scrollY);
Теперь значение scroll сразу соответствует текущей позиции прокрутки, и никакого "прыгания" или мерцания не будет.
9) Для скролла добавил бы тротлинг
10) Вынести в отдельные компоненты List ListItem

 */
