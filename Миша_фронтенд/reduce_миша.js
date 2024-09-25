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
  // ключами являются названия продуктов (например, "apple", "banana"),
  // а значениями — объекты с информацией о каждом продукте (количество, цена, имя).
  // {
  // "apple": {
  //     count: 5,
  //     price: 10,
  //     name: "apple"
  //    }
  // }
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
          // строка acc[name] = { count, price, name }; добавляет новый объект для текущего продукта
          // в аккумулятор "acc" под ключом name

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
