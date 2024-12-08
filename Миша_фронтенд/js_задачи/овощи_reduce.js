// Задачи к уроку 3
//
// 1) Написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
//
// Например:
//   Вход: morning
// Выход: 2
//
// 2) Определить сколько раз каждый элемент встречается в массиве.
//
//   Вход:
// ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
//
// Выход: {kiwi: 3, apple: 2, orange: 1}

// 1 Решение:  ----------------------------------------

/* reduce */
// const countElement = (array) => {
//   // всегда возвращаем reduce (возвращает любой тип данных)
//   return array.reduce((obj, item) => {
//     if (obj[item]) {
//       obj[item] = obj[item] + 1
//     } else {
//       obj[item] = 1
//     }
//
//     return obj // // Возвращаем "аккумулятор" для следующей итерации
//   }, {})
//
//   // Выход: {kiwi: 3, apple: 2, orange: 1}
// }
//
// console.log(countElement(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']))


// 1 способ:
/* const countElem = (array) => {
  const initObj = {}

  array.forEach((item) => {
    if (initObj[item]) {
      initObj[item] = initObj[item] + 1
    } else {
      initObj[item] = 1
    }
  })

  return initObj

}
// Выход: {kiwi: 3, apple: 2, orange: 1}

console.log(countElem(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'])) */


// 2 Решение: --------------------------------------
/*const glasses = (str) => {
  const initArr = ['a', 'e', 'i', 'o', 'u'] // Гласными являются «a», «e», «i», «o», «u».
  const res = []

  initArr.forEach((item) => {
   if (str.split('').includes(item)) {
     res.push(item)
   }
  })

  return res.length  // возвращающую количество гласных, которые содержатся в строке
}

console.log(glasses('morning'))*/
