// Что в консоле и почему: 4 мин: https://www.youtube.com/watch?v=Z-oB7g-y3v8&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=11
// Дано:
/*
const a = {a: 'a'};
const b = {b: 'b'};
const c = {};

c[a] = a;
c[b] = b;

console.log(c[a].a, c[b].b);
 */

// Ответ:
const a = {a: 'a'};
const b = {b: 'b'};
const c = {};

// Здесь мы пытаемся использовать "объекты": "a" и "b" - в качестве КЛЮЧЕЙ для объекта "c".
// в JavaScript, при использовании объектов в качестве "ключей" для "объектов, они преобразуются в СТРОКУ: "[object Object]":
// Вместо этого объект "a" автоматически преобразуется в строку через метод toString() - a.toString(); // Результат: "[object Object]"
// Поэтому фактически код становится таким: c[ "[object Object]" ] = a; то есть: В объект "c" добавляется свойство с ключом "[object Object]", значением которого является объект "a"
c[a] = a; // c[object object] = {a: 'a'}

// Точно так же объект "b" преобразуется в строку b.toString(); // Результат: "[object Object]"
// получаем: c["[object Object]"] = {b: 'b'};
c[b] = b;
// В объекте "c" ключ "[object Object]" уже существует (после предыдущей операции: c[a] = a), поэтому он перезаписывается новым
// значением, объектом "b" - После выполнения двух операций c[a] = a, c[b] = b, объект "c" выглядит так:
/*
c = {
  "[object Object]": { b: "b" } // Здесь сохранен объект `b`
}
*/
// Объект "a" в итоге теряется, потому что он был перезаписанна "b".
// вызов c[a].a === undefined, а вызов c[b].b = "b"
//

console.log(c[a].a, c[b].b); // Результат: undefined "b"
// изначально const c = { }
// const c = {
//   /* "[object Object]": {a: 'a'} // перезапишется  "[object Object]" на "[object Object]": {b: 'b'} после операции c[b] = b; */
//   "[object Object]": {b: 'b'}
// };
