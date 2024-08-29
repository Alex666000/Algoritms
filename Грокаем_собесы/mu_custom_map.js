// 2) Представьте, что метода map() не существует.
// Реализуйте свой метод

const myMap = (array, callback) => {
  const result = []

  array.forEach((item, index, arr) => {
    result.push(callback(item, index, arr)) // применяем колбек для каждого item
  })

  return result
}

console.log(myMap([1, 2, 3], (number) => number + 1))
