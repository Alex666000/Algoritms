// написать функцию, либо последовательность операций, которая вернет результат следующих условий
// результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке символов,
// результат собирается только из неиспорченных записей и конкатенируется в порядке возрастания order
// результат не содержит одинаковых символов
// https://www.youtube.com/watch?v=DEP_9rrIVWk&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=13

const input = [
  { value: 'abcd', order: 4, expired: false },
  { value: 'qwer', order: 2, expired: true },
  { value: 'xyz1', order: 1, expired: false },
  { value: 'abx2', order: 3, expired: false },
];

// Задача 2 - Что за операторы и для чего?
// ?.
// ...
// ??

// ||=
//   &&=
//     `${foo}`
// structuredClone(bar)
// someArray.at()

/*
Объяснение операторов и функций:
?. (Optional chaining)

Позволяет безопасно обращаться к свойствам объекта или вызывать методы, даже если объект или его свойства undefined или null.
Пример:
javascript
Копировать код
const obj = { a: { b: 2 } };
console_enet_loop.log(obj?.a?.b); // 2
console_enet_loop.log(obj?.c?.d); // undefined
... (Spread/rest operator)

Используется для работы с массивами или объектами:
Распределение элементов (spread):
javascript
Копировать код
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console_enet_loop.log(newArr); // [1, 2, 3, 4, 5]
Сбор параметров в массив (rest):
javascript
Копировать код
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console_enet_loop.log(sum(1, 2, 3)); // 6
?? (Nullish coalescing operator)

Возвращает правый операнд, если левый равен null или undefined.
Пример:
javascript
Копировать код
const value = null ?? 'default';
console_enet_loop.log(value); // 'default'
||= (Logical OR assignment)

Присваивает значение, если текущее значение переменной является ложным (false, 0, null, undefined, '').
Пример:
javascript
Копировать код
let a;
a ||= 10;
console_enet_loop.log(a); // 10
&&= (Logical AND assignment)

Присваивает значение, если текущее значение переменной является истинным.
Пример:
javascript
Копировать код
let b = true;
b &&= 'new value';
console_enet_loop.log(b); // 'new value'
Template literals (${foo})

Используется для встраивания значений в строки.
Пример:
javascript
Копировать код
const name = 'John';
console_enet_loop.log(`Hello, ${name}!`); // 'Hello, John!'
structuredClone(bar)

Функция для глубокого копирования объекта или массива, включая вложенные структуры.
Пример:
javascript
Копировать код
const obj = { a: 1, b: { c: 2 } };
const clone = structuredClone(obj);
console_enet_loop.log(clone); // { a: 1, b: { c: 2 } }
someArray.at()

Метод для доступа к элементу массива по индексу, поддерживает отрицательные индексы (обратный отсчёт).
Пример:
javascript
Копировать код
const arr = [10, 20, 30];
console_enet_loop.log(arr.at(1)); // 20
console_enet_loop.log(arr.at(-1)); // 30
 */
