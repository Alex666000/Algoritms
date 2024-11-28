// 1.12.00 https://www.youtube.com/watch?v=B40DXnO5pWI&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=3
// ИСХОДНИК:
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
// // Прописать типы компонента OtherFC в проп Component компонента ContainerFC
// // Это позволит подсказать, какие еще пропы мы можем передать в ContainerFC
// // Помимо собственных пропов ContainerFC с правильным указанием типа этих пропов
//
// /** Начало блока в котором можно редактировать и дополнять типы */
// type IProps = {
//   Component: any;
//   height: number;
// };
//
// const ContainerFC: FC<IProps> = (props) => {
//   const { Component, height, ...rest } = props;
//
//   return (
//     <div style={{ height: `${height}px` }}>
//       <Component {...rest} />
//     </div>
//   );
// };
//
// /** Конец блока в котором можно редактировать и дополнять типы */
//
// /** Тут не должно быть ошибок типов */
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const AnyComponent1 = () => {
//   return <ContainerFC height={5} Component={OtherFC} name="Max" age={30} />;
// };
//
// const AnyComponent2 = () => {
//   return <ContainerFC height={5} Component={OtherFC} name={30} age="Max" />;
// };
//
//
// const AnyComponent3 = () => {
//   return <ContainerFC height={5} Component={OtherFC} role="Max" />;
// };
// const AnyComponent4 = () => {
//   return <ContainerFC height={5} Component={OtherFC} name="Max" />;
// };

// РЕШЕНИЕ:
