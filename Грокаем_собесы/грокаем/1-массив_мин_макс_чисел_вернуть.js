// Задачи к уроку 1. Первая очень часто мелькает на собеседованиях  🙂
// Вторая для проработки алгоритмов
//
// 1) Сделать цикл и вывести числа от 0 до 100 включительно в console.log
//
// • Если число делится на 3 то рядом с числом вывести строку  «Fizz».
// • Если число делится на 5, то рядом с числом вывести строку  «Buzz».
// • Если число делится одновременно на 3 и на 5, то рядом вывести «FizzBuzz».

const cicle = () => {
  for(let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    }
    if (i % 5 === 0) {
      console.log('Fizz')
    }
    if (i % 3 === 0) {
      console.log('Buzz')
    }
  }
}

console.log(cicle())


// 2) Дан массив чисел
//
// let nums = [4, 5, 1, 2, -10, 100, 5];
//
// Написать функцию, которая возвращает массив с минимальным и максимальным числами из этого массива.
//   То есть на выходе будет [ -10, 100]

// Решение 1 задачи:


// 1 способ:
// const returnArray = (array) => {
//   const result = []
//
//   let minNum = array[0]
//   let maxNum = array[0]
//
//   array.forEach((item) => {
//     if(item < minNum) {
//       minNum = item
//     }
//     if (item > minNum) {
//       maxNum = item
//     }
//   })
//
//   // пушим тут тк внутри цикла нельзя пушить
//   result.push(minNum)
//   result.push(maxNum)
//
//
//   return result
// }

// 2 способ:
// const returnArray = (array) => {
//   let minNum = array[0]
//   let maxNum = array[0]
//
//   array.forEach((item) => {
//     if(item < minNum) {
//       minNum = item
//     }
//     if (item > minNum) {
//       maxNum = item
//     }
//   })
//
//   // пушим тут тк внутри цикла нельзя пушить
//
//   return [minNum, maxNum]
// }
//

// 3 способ:
/* Math.min(...array) Math.max(...array) */
// console.log(returnArray([4, 5, 1, 2, -10, 100, 5]))
