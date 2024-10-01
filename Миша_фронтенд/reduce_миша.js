// Импортируем необходимые библиотеки и файлы
import React, { useState } from "react"; // Импортируем React и хук useState
import type { IProduct } from "./models"; // Импортируем тип IProduct из файла models
import { PRODUCTS, FRUITS } from "./constants"; // Импортируем массивы PRODUCTS и FRUITS из файла constants
import { Cart } from "./Cart"; // Импортируем компонент Cart
import "./styles.css"; // Импортируем стили

/** Задание:
 * 1. Отрисовать корзины с продуктами используя <Cart />.
 * 2. Добавить обработку чекбокса для того чтобы показывать только фрукты.
 * 3. Посчитать суммарную стоимость и количество всех продуктов. Чекбокс нужно тоже учитывать.
 **/

// Функция для получения уникальных продуктов (ФИЛЬТРАЦИЯ ЧЕРЕЗ "РЕДЮС") и их стоимости
const getUniqProducts = (isFruits: boolean) => {
  let totalPrice = 0; // Переменная для хранения общей цены
  let totalCount = 0; // Переменная для хранения общего количества

  // Используем reduce для преобразования массива PRODUCTS в объект с уникальными продуктами
  // из редюса возвращаем массив тут:
  // uniq: Это объект, который мы строим в процессе обработки массива PRODUCTS. В этом объекте
  // ключами являются названия продуктов (например, "apple", "banana"..),
  // а значениями — объекты с информацией о каждом продукте (количество, цена, имя).
  // {
  // "apple": {
  //     count: 5,
  //     price: 10,
  //     name: "apple"
  //    }
  // }...............
  // reduce - возвращает любой тип данных - если присваиваем в переменную то снзу возвращаем тип данных
  const uniq = PRODUCTS.reduce((acc, curObj) => {
    const { name, price, count } = curObj; // Деструктурируем текущее значение

    // Если мы хотим показывать только фрукты
    if (isFruits) {
      // если массив фруктов содержит имя фрукта
      const isFruit = FRUITS.includes(name); // Проверяем, является ли текущий продукт фруктом
      // Уникальный ли продукт?
      if (isFruit) {
        // Если это фрукт
        totalCount += count; // Добавляем количество к общему
        totalPrice += price; // Добавляем цену к общей

        // Проверяем, есть ли уже этот продукт в аккумуляторе {}_те (по имени - с таким названием)
        if (!acc[name]) {
          // строка acc[name] = { count, price, name }; добавляет новый объект для текущего продукта - если его там не было
          // в аккумулятор "acc" под ключом name. Изначально acc = { }
          // После выполнения строки acc[name] = { count, price, name };, acc станет:
          // {
          // "apple": {
          //     count: 5,
          //     price: 10,
          //     name: "apple"
          //    }
          // }

          // мы создали структуру, которая позволяет нам хранить информацию о каждом уникальном продукте
          // в аккумуляторе "acc". Если в будущем мы встретили бы ещё один "apple", то мы бы обновили бы
          // его количество и цену, что обеспечит корректный подсчет общих значений для
          // каждого уникального продукта.
          acc[name] = { count, price, name }; // Если нет, добавляем его
        } else {
          // если был в аккумаляторе объект - обновим сумму и кол-во
          acc[name].price = acc[name].price + curObj.price; // Если да, обновляем сумму и количество
          acc[name].count = acc[name].count + curObj.count;
        }
      }
    } else {
      // Если не только фрукты
      totalCount += count; // Добавляем количество ко всем продуктам
      totalPrice += price; // Добавляем цену ко всем продуктам
      if (!acc[name]) {
        acc[name] = { count, price, name }; // Добавляем новый продукт
      } else {
        acc[name].price += curObj.price; // Обновляем сумму и количество
        acc[name].count += curObj.count;
      }
    }

    return acc; // Возвращаем аккумулятор для следующей итерации
  }, {}); // Начинаем с пустого объекта итерации...

  // Принимает объект - Возвращаем массив уникальных продуктов и их общую цену и количество в products массив
  // он извлекает все значения из объекта uniq и помещает их в массив
  return { products: Object.values(uniq), totalCount, totalPrice };
  // При использовании Object.values(uniq) мы получим массив:
  // [
  //   { count: 5, price: 10, name: "apple" },
  //   { count: 3, price: 15, name: "banana" }
  // ]
  // Так как "uniq" это (взяли только значения):
  // {
  //   apple: { count: 7, price: 10, name: "apple" },
  //   banana: { count: 3, price: 15, name: "banana" }
  // }
};

export default function App() {
  const [isFruits, setIsFruits] = useState(false); // Создаем состояние для чекбокса (показывать только фрукты)

  // Получаем уникальные продукты и общие значения
  const { products, totalCount, totalPrice } = getUniqProducts(isFruits);

  // Обработчик изменения состояния чекбокса
  const toggleIsFruits = (e) => {
    setIsFruits(e.target.checked); // Меняем состояние на значение чекбокса
  };

  return (
    // Возвращаем JSX разметку
    <div className="wrapper">
      <div>
        <input
          type="checkbox" // Чекбокс для выбора фрукты
          id="isFruit" // ID для чекбокса
          onChange={toggleIsFruits} // Обработчик изменения состояния
          checked={isFruits} // Устанавливаем состояние чекбокса
        />
        Показывать только фрукты
      </div>
      <div>
        Общее количество: <span>{totalCount}</span>
        количество
      </div>
      <div>
        Общая цена: <span>{totalPrice}</span>
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {products.map((fr) => {
          // Проходим по массиву уникальных продуктов
          return (
            // Возвращаем компонент Cart для каждого продукта
            <Cart
              name={fr.name} // Название продукта
              price={fr.price} // Цена продукта
              count={fr.count} // Количество продукта
              key={fr.name} // Уникальный ключ для React
            />
          );
        })}
      </div>
    </div>
  );
}


export default function App() {
  const [isFruits, setIsFruits] = useState(false); // Создаем состояние для чекбокса (показывать только фрукты)

  // Получаем уникальные продукты и общие значения
  const { products, totalCount, totalPrice } = getUniqProducts(isFruits);

  // Обработчик изменения состояния чекбокса
  const toggleIsFruits = (e) => {
    setIsFruits(e.target.checked); // Меняем состояние на значение чекбокса
  };

  return (
    // Возвращаем JSX разметку
    <div className="wrapper">
      <div>
        <input
          type="checkbox" // Чекбокс для выбора фрукты
          id="isFruit" // ID для чекбокса
          onChange={toggleIsFruits} // Обработчик изменения состояния
          checked={isFruits} // Устанавливаем состояние чекбокса
        />
        Показывать только фрукты
      </div>
      <div>
        Общее количество: <span>{totalCount}</span>
        количество
      </div>
      <div>
        Общая цена: <span>{totalPrice}</span>
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {products.map((fr) => {
          // Проходим по массиву уникальных продуктов
          return (
            // Возвращаем компонент Cart для каждого продукта
            <Cart
              name={fr.name} // Название продукта
              price={fr.price} // Цена продукта
              count={fr.count} // Количество продукта
              key={fr.name} // Уникальный ключ для React
            />
          );
        })}
      </div>
    </div>
  );
}


export default function App() {
  const [isFruits, setIsFruits] = useState(false); // Создаем состояние для чекбокса (показывать только фрукты)

  // Получаем уникальные продукты и общие значения
  const { products, totalCount, totalPrice } = getUniqProducts(isFruits);

  // Обработчик изменения состояния чекбокса
  const toggleIsFruits = (e) => {
    setIsFruits(e.target.checked); // Меняем состояние на значение чекбокса
  };

  return (
    // Возвращаем JSX разметку
    <div className="wrapper">
      <div>
        <input
          type="checkbox" // Чекбокс для выбора фрукты
          id="isFruit" // ID для чекбокса
          onChange={toggleIsFruits} // Обработчик изменения состояния
          checked={isFruits} // Устанавливаем состояние чекбокса
        />
        Показывать только фрукты
      </div>
      <div>
        Общее количество: <span>{totalCount}</span>
        количество
      </div>
      <div>
        Общая цена: <span>{totalPrice}</span>
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {products.map((fr) => {
          // Проходим по массиву уникальных продуктов
          return (
            // Возвращаем компонент Cart для каждого продукта
            <Cart
              name={fr.name} // Название продукта
              price={fr.price} // Цена продукта
              count={fr.count} // Количество продукта
              key={fr.name} // Уникальный ключ для React
            />
          );
        })}
      </div>
    </div>
  );
}


export default function App() {
  const [isFruits, setIsFruits] = useState(false); // Создаем состояние для чекбокса (показывать только фрукты)

  // Получаем уникальные продукты и общие значения
  const { products, totalCount, totalPrice } = getUniqProducts(isFruits);

  // Обработчик изменения состояния чекбокса
  const toggleIsFruits = (e) => {
    setIsFruits(e.target.checked); // Меняем состояние на значение чекбокса
  };

  return (
    // Возвращаем JSX разметку
    <div className="wrapper">
      <div>
        <input
          type="checkbox" // Чекбокс для выбора фрукты
          id="isFruit" // ID для чекбокса
          onChange={toggleIsFruits} // Обработчик изменения состояния
          checked={isFruits} // Устанавливаем состояние чекбокса
        />
        Показывать только фрукты
      </div>
      <div>
        Общее количество: <span>{totalCount}</span>
        количество
      </div>
      <div>
        Общая цена: <span>{totalPrice}</span>
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {products.map((fr) => {
          // Проходим по массиву уникальных продуктов
          return (
            // Возвращаем компонент Cart для каждого продукта
            <Cart
              name={fr.name} // Название продукта
              price={fr.price} // Цена продукта
              count={fr.count} // Количество продукта
              key={fr.name} // Уникальный ключ для React
            />
          );
        })}
      </div>
    </div>
  );
}


export default function App() {
  const [isFruits, setIsFruits] = useState(false); // Создаем состояние для чекбокса (показывать только фрукты)

  // Получаем уникальные продукты и общие значения
  const { products, totalCount, totalPrice } = getUniqProducts(isFruits);

  // Обработчик изменения состояния чекбокса
  const toggleIsFruits = (e) => {
    setIsFruits(e.target.checked); // Меняем состояние на значение чекбокса
  };

  return (
    // Возвращаем JSX разметку
    <div className="wrapper">
      <div>
        <input
          type="checkbox" // Чекбокс для выбора фрукты
          id="isFruit" // ID для чекбокса
          onChange={toggleIsFruits} // Обработчик изменения состояния
          checked={isFruits} // Устанавливаем состояние чекбокса
        />
        Показывать только фрукты
      </div>
      <div>
        Общее количество: <span>{totalCount}</span>
        количество
      </div>
      <div>
        Общая цена: <span>{totalPrice}</span>
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {products.map((fr) => {
          // Проходим по массиву уникальных продуктов
          return (
            // Возвращаем компонент Cart для каждого продукта
            <Cart
              name={fr.name} // Название продукта
              price={fr.price} // Цена продукта
              count={fr.count} // Количество продукта
              key={fr.name} // Уникальный ключ для React
            />
          );
        })}
      </div>
    </div>
  );
}


export default function App() {
  const [isFruits, setIsFruits] = useState(false); // Создаем состояние для чекбокса (показывать только фрукты)

  // Получаем уникальные продукты и общие значения
  const { products, totalCount, totalPrice } = getUniqProducts(isFruits);

  // Обработчик изменения состояния чекбокса
  const toggleIsFruits = (e) => {
    setIsFruits(e.target.checked); // Меняем состояние на значение чекбокса
  };

  return (
    // Возвращаем JSX разметку
    <div className="wrapper">
      <div>
        <input
          type="checkbox" // Чекбокс для выбора фрукты
          id="isFruit" // ID для чекбокса
          onChange={toggleIsFruits} // Обработчик изменения состояния
          checked={isFruits} // Устанавливаем состояние чекбокса
        />
        Показывать только фрукты
      </div>
      <div>
        Общее количество: <span>{totalCount}</span>
        количество
      </div>
      <div>
        Общая цена: <span>{totalPrice}</span>
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {products.map((fr) => {
          // Проходим по массиву уникальных продуктов
          return (
            // Возвращаем компонент Cart для каждого продукта
            <Cart
              name={fr.name} // Название продукта
              price={fr.price} // Цена продукта
              count={fr.count} // Количество продукта
              key={fr.name} // Уникальный ключ для React
            />
          );
        })}
      </div>
    </div>
  );
}


export default function App() {
  const [isFruits, setIsFruits] = useState(false); // Создаем состояние для чекбокса (показывать только фрукты)

  // Получаем уникальные продукты и общие значения
  const { products, totalCount, totalPrice } = getUniqProducts(isFruits);

  // Обработчик изменения состояния чекбокса
  const toggleIsFruits = (e) => {
    setIsFruits(e.target.checked); // Меняем состояние на значение чекбокса
  };

  return (
    // Возвращаем JSX разметку
    <div className="wrapper">
      <div>
        <input
          type="checkbox" // Чекбокс для выбора фрукты
          id="isFruit" // ID для чекбокса
          onChange={toggleIsFruits} // Обработчик изменения состояния
          checked={isFruits} // Устанавливаем состояние чекбокса
        />
        Показывать только фрукты
      </div>
      <div>
        Общее количество: <span>{totalCount}</span>
        количество
      </div>
      <div>
        Общая цена: <span>{totalPrice}</span>
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {products.map((fr) => {
          // Проходим по массиву уникальных продуктов
          return (
            // Возвращаем компонент Cart для каждого продукта
            <Cart
              name={fr.name} // Название продукта
              price={fr.price} // Цена продукта
              count={fr.count} // Количество продукта
              key={fr.name} // Уникальный ключ для React
            />
          );
        })}
      </div>
    </div>
  );
}


export const PRODUCTS: IProduct[] = [
  {
    name: "apple",
    price: 10,
    count: 10,
  },
  {
    name: "banana",
    price: 20,
    count: 20,
  },
  {
    name: "orange",
    price: 30,
    count: 30,
  },
  {
    name: "bread",
    price: 50,
    count: 50,
  },
  {
    name: "milk",
    price: 60,
    count: 60,
  },
  {
    name: "eggs",
    price: 70,
    count: 70,
  },
  {
    name: "apple",
    price: 40,
    count: 40,
  },
  {
    name: "apple",
    price: 20,
    count: 15,
  },
  {
    name: "bread",
    price: 35,
    count: 10,
  },
];

export const FRUITS = ["apple", "banana", "orange"];

import React from "react"
import "./styles.css";

interface IProps {
  name: string;
  price: number;
  count: number;
}


export const Cart = ({ name, price, count }: IProps) => {
  return (
    <div className="cart">
      <div className="cart-item">
        <p>Название:</p> <p>{name}</p>
      </div>
      <div className="cart-item">
        <p>Сумма:</p> <p>{price}</p>
      </div>
      <div className="cart-item">
        <p>Количество:</p> <p>{count}</p>
      </div>
    </div>
  );
};

// способ:
import React, { useState, ChangeEvent } from "react";
import type { IProduct } from "./models";
import { PRODUCTS, FRUITS } from "./constants";
import { Cart } from "./Cart";
import "./styles.css";

/** Задание:
 * 1. Отрисовать корзины с продуктами используя <Cart />.
 * 2. Добавить обработку чекбокса для того чтобы показывать только фрукты.
 Список фруктов перечислен в массиве FRUITS.
 * 3. Посчитать суммарную стоимость и количество всех продуктов. Чекбокс нужно тоже учитывать.
 **/

export default function App() {
  const [isFruits, setIsFruits] = useState(false);

  // Фильтрация продуктов в зависимости от состояния чекбокса
  const filteredProducts = isFruits
    ? PRODUCTS.filter((product) => FRUITS.includes(product.name))
    : PRODUCTS;

  // Подсчёт общей стоимости и количества продуктов
  let totalPrice = 0;
  let totalCount = 0;

  filteredProducts.forEach((product) => {
    totalPrice += product.price * product.count; // Считаем общую стоимость
    totalCount += product.count; // Считаем общее количество
  });

  const toggleIsFruits = (e: ChangeEvent<HTMLInputElement>) =>
    setIsFruits(e.target.checked);

  return (
    <div className="wrapper">
      <div>
        <input
          type="checkbox"
          id="isFruit"
          checked={isFruits}
          onChange={toggleIsFruits}
        />
        Показывать только фрукты: {isFruits ? "Да" : "Нет"}
      </div>
      <div>Общее количество: {totalCount}</div> {/* Общее количество продуктов */}
      <div>Общая цена: {totalPrice} </div> {/* Общая стоимость продуктов */}
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {filteredProducts.map((product, index) => (
          <Cart
            key={index}
            name={product.name}
            price={product.price}
            count={product.count}
          />
        ))}
      </div>
    </div>
  );
}

// import React, { useState, ChangeEvent } from "react";
// import type { IProduct } from "./models";
// import { PRODUCTS, FRUITS } from "./constants";
// import { Cart } from "./Cart";
// import "./styles.css";
//
// /** Задание:
//  * 1. Отрисовать корзины с продуктами используя <Cart />.
//  * 2. Добавить обработку чекбокса для того чтобы показывать только фрукты.
//    Список фруктов перечислен в массиве FRUITS.
//  * 3. Посчитать суммарную стоимость и количество всех продуктов. Чекбокс нужно тоже учитывать.
// **/
//
// export default function App() {
//   const [isOnlyFruits, setIsOnlyFruits] = useState(false);
//
//   const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) =>
//     setIsOnlyFruits(e.target.checked);
//
//   // редюс возвращает любой тип данных
//   const result = PRODUCTS.reduce(
//     (acc, product) => {
//       if (isOnlyFruits || FRUITS.includes(product.name)) {
//         acc.filteredProducts.push(product);
//         acc.totalCount = acc.totalCount + product.count;
//         acc.totalPrice = acc.totalPrice + product.price;
//       }
//
//       // аккамулятор для след итерации
//       return acc;
//     },
//     // "инит стейт" (называем переменные как угодно)
//     { filteredProducts: [], totalCount: 0, totalPrice: 0 }
//   );
//   return (
//     <div className="wrapper">
//       <div>
//         <input
//           type="checkbox"
//           id="isFruit"
//           checked={isOnlyFruits}
//           onChange={toggleCheckbox}
//         />
//         Показывать только фрукты: {isOnlyFruits ? "YES" : "NO"}
//       </div>
//       <div>Общее количество: {result.totalCount}</div>
//       <div>Общая цена: {result.totalPrice}</div>
//       <div>Список продуктов:</div>
//       <div className="cart-wrapper">
//         {result.filteredProducts.map(({ name, count, price }) => {
//           return <Cart name={name} price={price} count={count} />;
//         })}
//       </div>
//     </div>
//   );
// }


