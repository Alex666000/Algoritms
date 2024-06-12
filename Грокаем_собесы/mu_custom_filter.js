// 2) Представьте, что метода filter не существует.
// Реализуйте свой метод filter при помощи других методов массива

// 1 способ в лоб:
const myFilter = (array, callback) => {
  let result = []

  array.forEach((item, index, array) => {
    if (callback(item, index, array)) result.push(item) // в колбек передаем число item и на всякии случаи index, array
  })

  return result
}

const resFilter = myFilter([4, 5, 8, 11, 14, 6], (number) => number % 2 === 0) // например наидем все четные числа в массиве чтобы понимать как filter() работает
console.log(resFilter)


/*
- Урок 5 - грокаем собесы
- прежде чем писать метод массива нужно проговарить и понимать что он делает
- передаем колбек в myFilter()
-  в таких функциях что делаем сами должны указывать все параметры которые могут пригодиться
 */
