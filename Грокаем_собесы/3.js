// 2) тоже классика собеседований, давали очень часто:
//   Напишите функцию get, которая получает объект и путь к вложенному свойству объекта и возвращает значение этого свойства (или undefined, если свойства не существует). Третий, опциональный аргумент функции — значение по умолчанию, которое возвращается, если значения по указанному пути не существует
//
// function get(obj, path, defaultValue) {
//   // your code here
// }
//
// const obj = {
//   a: {
//     b: {
//       c: 'd'
//     },
//     e: 'f'
//   }
// };
//
// get(obj, 'a.b');   // { c : 'd' }
// get(obj, 'a.b.c'); // 'd'
// get(obj, 'a.e');   // 'f'
// get(obj, 'a.x.e'); // undefined
// get(obj, 'a.x.e', true); // true
// get(obj, 'a.x.e', 'My default value'); // My default value
function get(obj, path, defaultValue) {
  const value = path
    .split('.')
    .reduce((acc, key) =>
      (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
  return value !== undefined ? value : defaultValue;
}

// Пример использования
const myObj = {
  a: {
    b: {
      c: 'd'
    }
  },
  e: 'f'
};

console.log(get(myObj, 'a.b.c'));        // 'd'
console.log(get(myObj, 'a.b.c.d'));      // undefined
console.log(get(myObj, 'a.b.c', 'Default Value'));  // 'd'
console.log(get(myObj, 'a.x.e', 'Default Value'));  // 'Default Value'
console.log(get(myObj, 'e'));            // 'f'
// 8 video
