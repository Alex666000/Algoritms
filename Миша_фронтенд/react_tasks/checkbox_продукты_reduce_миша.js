// --------------------------------------------------------------------------------------------------------------------------------------
// export const PRODUCTS: IProduct[] = [
//   {
//     name: "apple",
//     price: 10,
//     count: 10,
//   },
//   {
//     name: "banana",
//     price: 20,
//     count: 20,
//   },
//   {
//     name: "orange",
//     price: 30,
//     count: 30,
//   },
//   {
//     name: "bread",
//     price: 50,
//     count: 50,
//   },
//   {
//     name: "milk",
//     price: 60,
//     count: 60,
//   },
//   {
//     name: "eggs",
//     price: 70,
//     count: 70,
//   },
//   {
//     name: "apple",
//     price: 40,
//     count: 40,
//   },
//   {
//     name: "apple",
//     price: 20,
//     count: 15,
//   },
//   {
//     name: "bread",
//     price: 35,
//     count: 10,
//   },
// ];
//
// export const FRUITS = ["apple", "banana", "orange"];

// interface IProps {
//   name: string;
//   price: number;
//   count: number;
// }
//

// export const Cart = ({ name, price, count }: IProps) => {
//   return (
//     <div className="cart">
//       <div className="cart-item">
//         <p>Название:</p> <p>{name}</p>
//       </div>
//       <div className="cart-item">
//         <p>Сумма:</p> <p>{price}</p>
//       </div>
//       <div className="cart-item">
//         <p>Количество:</p> <p>{count}</p>
//       </div>
//     </div>
//   );
// };
// /** Задание:
//  * 1. Отрисовать корзины с продуктами используя <Cart />.
//  * 2. Добавить обработку чекбокса для того чтобы показывать только фрукты.
//    Список фруктов перечислен в массиве FRUITS.
//  * 3. Посчитать суммарную стоимость и количество всех продуктов. Чекбокс нужно тоже учитывать.
// **/
//
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
// Решено:
// export default function App() {
//   const [isOnlyFruits, setIsOnlyFruits] = useState(false);
//
//   const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) =>
//     setIsOnlyFruits(e.target.checked);
//
//   // Редюс возвращает отфильтрованные продукты, общую сумму и количество
//   const result = PRODUCTS.reduce(
//     (acc, product) => {
//       // Если чекбокс активен, фильтруем только фрукты
//       if (isOnlyFruits && FRUITS.includes(product.name)) {
//         acc.filteredProducts.push(product);
//         acc.totalCount += product.count;
//         acc.totalPrice += product.price * product.count;
//       } else if (!isOnlyFruits) {
//         // Если чекбокс не активен, добавляем все продукты
//         acc.filteredProducts.push(product);
//         acc.totalCount += product.count;
//         acc.totalPrice += product.price * product.count;
//       }
//       return acc;
//     },
//     {
//       filteredProducts: [] as IProduct[],
//       totalCount: 0,
//       totalPrice: 0,
//     }
//   );
//
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
//         {result.filteredProducts.map(({ name, count, price }) => (
//           <Cart key={`${name}-${price}`} name={name} price={price} count={count} />
//         ))}
//       </div>
//     </div>
//   );
// }
// --------------------------------------------------------------------------------------------------------------------------------------
// ИСХОДНИК:
// import React, { useState } from "react";
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
//   return (
//     <div className="wrapper">
//       <div>
//         <input type="checkbox" id="isFruit" />
//         Показывать только фрукты
//       </div>
//       <div>Общее количество:</div>
//       <div>Общая цена:</div>
//       <div>Список продуктов:</div>
//       <div className="cart-wrapper">
//         {PRODUCTS.map((fr) => {
//           return (
//             <Cart
//               name={fr.name}
//               price={fr.price}
//               count={fr.count}
//               key={fr.name}
//             />
//           );
//         })}
//         {/* <Cart name="Apple" price={10} count={5} /> */}
//       </div>
//     </div>
//   );
// }
// --------------------------------------------------------------------------------------------------------------------------------------
/*
- filter + map
import React, { useState } from "react";
import type { IProduct } from "./models";
import { PRODUCTS, FRUITS } from "./constants";
import { Cart } from "./Cart";
import "./styles.css";

export default function App() {
  const [showFruitsOnly, setShowFruitsOnly] = useState(false);

  // Подсчет общего количества и цены
  let totalQuantity = 0;
  let totalPrice = 0;

  const renderProducts = PRODUCTS.filter((product) => {
    // Фильтруем только фрукты, если включен чекбокс
    return !showFruitsOnly || FRUITS.includes(product.name);
  }).map((product, index) => {
    // Считаем общие количество и цену
    totalQuantity += product.count;
    totalPrice += product.price * product.count;

    // Возвращаем компонент для отрисовки
    return (
      <Cart
        key={index}
        name={product.name}
        price={product.price}
        count={product.count}
      />
    );
  });

  return (
    <div className="wrapper">
      <div>
        <label htmlFor="isFruit">
          <input
            type="checkbox"
            id="isFruit"
            checked={showFruitsOnly}
            onChange={(e) => setShowFruitsOnly(e.target.checked)}
          />
          Показывать только фрукты
        </label>
      </div>
      <div>Общее количество: {totalQuantity}</div>
      <div>Общая цена: {totalPrice}</div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">{renderProducts}</div>
    </div>
  );
}

 */
