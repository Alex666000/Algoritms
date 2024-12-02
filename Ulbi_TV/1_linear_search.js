// const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
// let count = 0
//
// function linearSearch(array, item) {
//   for (let i = 0; i < array.length; i++) {
//     count += 1
//     if (array[i] === item) { // если нашли элемент вернем его индекс
//       return i; // вернем его индекс
//     }
//   }
//   return null
// }
//
// console_enet_loop.log(linearSearch(array, 2))
// console_enet_loop.log('count = ', count)

/*
Сложность О от n - n это кол-во элементов итераций (count) в массиве
 */

const Hello = () => {
  console.log('Hello', this)
}

Hello()

