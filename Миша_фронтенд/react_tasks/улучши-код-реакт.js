// Задача с собеса ЗП 300л:
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
// useLayoutEffect(() => {
//   if (!started) {
//     const interval = setInterval(onDecrease, 1000);
//   }
//
//   started = true;
// });
//
//   return (
//     <div>
//       <div className="Controls">{timer}</div>
//       <ProductList currency={currency} />
//     </div>
//   );
// };
//
// const ProductList = ({ currency, error = false }: any) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [shops, setShops] = useState<Array<Shop>>([]);
//
//   // Если есть ошибка, не загружаем продукты
//   if (error) {
//     return;
//   }
//
//   // @ts-ignore
//   useEffect(async() => {
//     const productsResponse = await fetch(
//       "https://my-json-server.typicode.com/cyberwalrus/demo/products"
//     );
//     const productsJson = await productsResponse.json();
//
//     setProducts(productsJson)
//   }, [setProducts, setShops]);
//
//   const getShops = (id: string) => {
//     let array: any[] = [];
//     for (var i = 0; i < shops.length; i++) {
//       const shop = shops[i];
//       if (shop.pricelist[id]) {
//         array = [...array, shop]; // на каждой итерации создается новый массив (((((:
//       }
//     }
//     return array;
//   };
//
//   useLayoutEffect(() => {
//     fetch("https://my-json-server.typicode.com/cyberwalrus/demo/shops")
//       .then((res) => res.json())
//       .then((res) => setShops(res));
//   });
//
//   return (
//     <div className="productsWrapper">
//       {/* render products */}
//       {products.map(({ name, description }) => (
//         <main className="products">
//           <h1 className="products-Item_green">{name}</h1>
//           <h2>{description}</h2>
//           <hr />
//           <ul className="postList">
//             {(getShops(id) as Shop[]).map(({ name, pricelist }) => (
//               <div className="post_header">
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
// setTimeout(() => console_enet_loop.clear(), 1988);


// ______________________________________________________________________________________________________________________________
// РЕШЕНИЕ:
// import { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
//
// // types
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
// // AppTimer
// const AppTimer = () => {
//   const [timer, setTimer] = useState(10);
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer((prev) => { // Каждый if с return возвращает значение из внутренней функции, переданной в setTimer. Это значение используется для обновления состояния timer
//         if (prev === 0) {
//           clearInterval(interval); // Останавливаем таймер, когда он достигает 0
//           return prev; // Возвращаем 0, чтобы не происходило дальнейшее обновление
//         }
//         return prev - 1; // Уменьшаем таймер на 1 каждую секунду
//       });
//     }, 1000);
//
//     return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
//   }, []);
//
//   return (
//     <div>
//       <div className="Controls">{timer}</div>
//       <ProductList />
//     </div>
//   );
// };
//
// const currency = "$";
//
// // ProductList
// interface ProductListProps {
//   error?: boolean;
// }
//
// const ProductList = ({ error = false }: ProductListProps) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [shops, setShops] = useState<Shop[]>([]);
//
//   // Функция для получения продуктов с сервера
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const productsResponse = await fetch(
//           "https://my-json-server.typicode.com/cyberwalrus/demo/products"
//         );
//         const productsJsonData: Product[] = await productsResponse.json(); // Типизируем данные как Product[]
//         setProducts(productsJsonData);
//       } catch (error) {
//         console_enet_loop.error("Error fetching products:", error);
//       }
//     };
//
//     fetchProducts();
//   }, []);
//
//   // Функция для получения магазинов с сервера
//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const shopsResponse = await fetch(
//           "https://my-json-server.typicode.com/cyberwalrus/demo/shops"
//         );
//         const shopsJsonData: Shop[] = await shopsResponse.json(); // Типизируем данные как Shop[]
//         setShops(shopsJsonData);
//       } catch (error) {
//         console_enet_loop.error("Error fetching shops:", error);
//       }
//     };
//
//     fetchShops();
//   }, []);
//
//   // Функция для получения магазинов, которые продают товар по id
//   const getShops = (id: string) => shops.filter((shop) => shop.pricelist[id]);
//
//   // Если есть ошибка, показываем null (ничего не рендерим)
//   if (error) {
//     return null;
//   }
//     // const priceList = { id: 1, price: '21$' };
//     //  Object.entries(priceList) -> [ ['id', '1'], ['price', '21$'] ]

//   return (
//     <ul className="productsWrapper">
//       {products.map(({ name, description, id: productId }) => (
//         <li className="products" key={productId}>
//           <h2 className="products-Item_green">{name}</h2>
//           <p>{description}</p>
//           <hr />
//           <ul className="postList">
//             {/* Отображаем список магазинов для каждого продукта */}
//             {getShops(id).map(({ name: shopName, pricelist, id: shopId, coordinate }) => (
//               <li className="post_header" key={shopId}>
//                 {shopName} -{" "}
//                 {/* Проверяем, существует ли ключ в pricelist, чтобы избежать ошибки */}
//                 {pricelist[shopId] ? pricelist[shopId] : "Цена не указана"} {currency} {coordinate}
//               </li>
//             ))}
//           </ul>
//         </li>
//       ))}
//     </ul>
//   );
// };
//
// // Отображаем корневой компонент
// createRoot(document.getElementById("root") as HTMLElement).render(<AppTimer />);
//
// // Дополнительный таймер для очистки консоли (опционально)
// setTimeout(() => console_enet_loop.clear(), 1988);

