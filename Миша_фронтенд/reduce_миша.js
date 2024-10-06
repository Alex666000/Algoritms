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
//       if (isOnlyFruits && FRUITS.includes(product.name)) {
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

//  --> Задача на ТС: Дженерики
// import { FC } from "react";
//
// type OtherProps = {
//   name: string;
//   age: number;
// };
//
// const OtherFC: FC<OtherProps> = ({ age, name }) => {
//   return (
//     <div>
//       {name} {age}
//     </div>
//   );
// };
//
// // Поправить типы в блоке ниже
//
// // При передаче компонента OtherFC в проп Component компонента ContainerFc
// // TS должен давать подсказку какие еще пропы мы можем передать в ContainerFc
// // помимо собственных пропов ContainerFC с правильным указанием типа этих пропов
//
// /** Начало блока в котором можно редактировать и дополнять типы */
// type IProps = {
//   Component: any;
//   height: number;
// };
//
// const ContainerFc: FC<IProps> = (props) => {
//   const { Component, height } = props;
//
//   return (
//     <div style={{ height: `${height}px` }}>
//       <Component {...props} />
//     </div>
//   );
// };
//
// // Компонент AnyComponent1
// const AnyComponent1 = () => {
//   return <ContainerFc height={5} Component={OtherFC} name="Макс" age={[30]} />;
// };
//
// /* Тут должны быть ошибки типов */
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const AnyComponent2 = () => {
//   return <ContainerFc height={5} Component={OtherFC} name={30} age="Макс" />;
// };
//
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const AnyComponent3 = () => {
//   return <ContainerFc height={5} Component={OtherFC} role="Макс" />;
// };
// РЕШЕНИЕ:
// import React, { ComponentType } from "react";
//
// type OtherProps = {
//   name: string;
//   age: number;
// };
//
// const OtherFC = ({ age, name }: OtherProps) => {
//   return (
//     <div>
//       {name} {age}
//     </div>
//   );
// };
//
// /** Типизация пропсов ContainerFc */
// type IProps<P> = {
//   Component: ComponentType<P>;
//   height: number;
// } & P;
//
// const ContainerFc = <P,>({ Component, height, ...rest }: IProps<P>) => {
//   return (
//     <div style={{ height: `${height}px` }}>
//       <Component {...(rest as P)} />
//     </div>
//   );
// };
//
// // Компонент AnyComponent1 - должно работать корректно
// const AnyComponent1 = () => {
//   return <ContainerFc height={5} Component={OtherFC} name="Макс" age={30} />;
// };
//
// /* Тут должны быть ошибки типов */
// const AnyComponent2 = () => {
//   return <ContainerFc height={5} Component={OtherFC} name={30} age="Макс" />; // Ошибка типов
// };
//
// /* Тут должны быть ошибки типов */
// const AnyComponent3 = () => {
//   return <ContainerFc height={5} Component={OtherFC} role="Макс" />; // Ошибка типов
// };
// Задача с собеса ЗП 300л
// import { useEffect, useLayoutEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
//
// interface Product {
//   description: string;
//   id: string;
//   info: string;
//   name: string;
// }
//
// type Shop = {
//   coordinate: number[];
//   id: string;
//   name: string;
//   pricelist: Record<string, string>;
// };
//
// let counter = 10;
// let started = false;
//
// const AppTimer = () => {
//   const [timer, setTimer] = useState(10);
//   const currency = "$";
//
//   const onDecrease = () => {
//     if (counter > 0) {
//       counter--;
//       setTimer(counter);
//     }
//   };
//
//   useLayoutEffect(() => {
//     if (!started) {
//       started = true;
//       const interval = setInterval(onDecrease, 1000);
//
//       return () => clearInterval(interval);
//     }
//   }, []);
//
//   return (
//     <div>
//       <div className="Controls">{timer}</div>
//       <ProductList currency={currency} />
//     </div>
//   );
// };
//
// const ProductList = ({
//   currency,
//   error = false,
// }: {
//   currency: string;
//   error?: boolean;
// }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [shops, setShops] = useState<Shop[]>([]);
//
//   // Если есть ошибка, не загружаем продукты
//   if (error) {
//     return;
//   }
//
//   // @ts-ignore
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsResponse = await fetch(
//         "https://my-json-server.typicode.com/cyberwalrus/demo/products"
//       );
//       const productsJson = await productsResponse.json();
//       setProducts(productsJson);
//     };
//
//     fetchProducts();
//   }, [setProducts, setShops]);
//
//   const getShops = (id: string) => {
//     let array: any[] = [];
//     for (let i = 0; i < shops.length; i++) {
//       const shop = shops[i];
//       if (shop.pricelist[id]) {
//         array = [...array, shop];
//       }
//     }
//     return array;
//   };
//
//   useLayoutEffect(() => {
//     fetch("https://my-json-server.typicode.com/cyberwalrus/demo/shops")
//       .then((res) => res.json())
//       .then((res) => setShops(res));
//   }, []);
//
//   return (
//     <div className="productsWrapper">
//       {/* render products */}
//       {products.map(({ name, description, id }) => (
//         <main className="products" key={id}>
//           <h1 className="products-Item_green">{name}</h1>
//           <h5>{description}</h5>
//           <hr />
//           {/* render shops list */}
//           <ul className="postList">
//             {(getShops(id) as Shop[]).map(({ name, pricelist }) => (
//               <div className="post_header" key={name}>
//                 {name} -{" "}
//                 {Object.entries(pricelist).find(([key]) => id === key)?.[1]}
//                 {currency}
//               </div>
//             ))}
//           </ul>
//         </main>
//       ))}
//     </div>
//   );
// };
//
// // Отображаем корневой компонент
//
// createRoot(document.getElementById("root") as HTMLElement).render(<AppTimer />);
// setTimeout(() => console.clear(), 1988);
