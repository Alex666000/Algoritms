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
