// 1.12.00 https://www.youtube.com/watch?v=B40DXnO5pWI&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=3
// ИСХОДНИК:
type OtherProps = {
  name: string;
  age: number;
};

const OtherFC: FC<OtherProps> = ({ age, name }) => {
  return (
    <div>
      {name} {age}
    </div>
  );
};


// Мы рассматриваем компонент ContainerFC, который принимает в пропсах другой компонент
// (например, OtherFC) и его пропсы. Цель — сделать так, чтобы TypeScript автоматически
// проверял, что переданные пропсы соответствуют требованиям переданного компонента.
// Компонент ContainerFC должен:
// Принимать компонент (Component) через проп Component.
// Принимать пропсы, которые ожидает переданный компонент (Component).
// Работать корректно для любого компонента, не зная заранее, какие пропсы он ожидает.
// ContainerFC получает OtherFC в качестве Component.
// Но OtherFC ожидает пропсы name и age. Если мы передадим что-то другое (например, role), TypeScript должен показать ошибку.
type IProps = {
  Component: any;
  height: number;
};

const ContainerFC: FC<IProps> = (props) => {
  const { Component, height, ...rest } = props;

  return (
    <div style={{ height: `${height}px` }}>
      <Component {...rest} />
    </div>
  );
};
//
// /** Конец блока в котором можно редактировать и дополнять типы */
//
// /** Тут не должно быть ошибок типов */
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnyComponent1 = () => {
  return <ContainerFC height={5} Component={OtherFC} name="Max" age={30} />;
};

const AnyComponent2 = () => {
  return <ContainerFC height={5} Component={OtherFC} name={30} age="Max" />;
};


const AnyComponent3 = () => {
  return <ContainerFC height={5} Component={OtherFC} role="Max" />;
};
const AnyComponent4 = () => {
  return <ContainerFC height={5} Component={OtherFC} name="Max" />;
};

// РЕШЕНИЕ:
// import "./styles.css";
// import React, { useEffect, useState, FC } from "react";
//
// export default function App() {
//   return (
//     <div className="App">
//       <AnyComponent1 />
//       <AnyComponent2 />
//       <AnyComponent3 />
//     </div>
//   );
// }
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
// // Мы рассматриваем компонент ContainerFC, который принимает в пропсах другой компонент
// // (например, OtherFC) и его пропсы. Цель — сделать так, чтобы TypeScript автоматически
// // проверял, что переданные пропсы соответствуют требованиям переданного компонента.
//
// type IProps<T extends object> = {
//   Component: FC<T>;
//   height: number;
//   // & T: Мы объединяем пропсы, которые ожидает ContainerFC (height, Component), с пропсами,
//   // которые ожидает переданный компонент (Component).
// } & Partial<T>; // свои пропсы + пропсы что ожидает OtherFC и допускаем что часть пропсов может быть не обязательной
// // или & T & { [key: string]: any }; // Разрешаем любые дополнительные пропсы
// const ContainerFC = <T extends object>(props: IProps<T>) => {
//   const { Component, height, ...rest } = props;
//
//   return (
//     <div style={{ height: `${height}px` }}>
//       {/* <Component {...rest} /> */}
//       <Component {...(rest as T)} />
//     </div>
//   );
// };
//
// /** Тут не должно быть ошибок типов */
// const AnyComponent1 = () => {
//   return <ContainerFC height={5} Component={OtherFC} name="Max" age={30} />;
// };
//
// const AnyComponent2 = () => {
//   return <ContainerFC height={5} Component={OtherFC} name={30} age="Max" />;
// };
//
// const AnyComponent3 = () => {
//   return <ContainerFC height={5} Component={OtherFC} role="Max" />;
// };
//
// const AnyComponent4 = () => {
//   return <ContainerFC height={5} Component={OtherFC} name="Max" />;
// };
