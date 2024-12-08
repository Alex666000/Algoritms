// написать функцию, либо последовательность операций, которая вернет результат следующих условий:
// результат есть строка из сконкатенированных value элементов коллекции,
// результат собирается только из "неиспорченных" записей (expired)
// результат не содержит одинаковых символов.
// отсортировать массив по порядку
// 5 https://www.youtube.com/watch?v=DEP_9rrIVWk&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=13

const input = [
  {value: 'bcd', order: 4, expired: false},
  {value: 'bca', order: 2, expired: true},
  {value: 'xyz1', order: 3, expired: false},
  {value: 'xyz2', order: 3, expired: false},
];

// Решение: если еще надо оптимизировать то сначала отфильтруем, уменьшим кол-во элементов, потом сортируем:
const convert = (array) => {
  const sortedArr = array.sort((a, b) => a.order - b.order)

  const resultStr = sortedArr.reduce((acc, currObj) => {
    if (!currObj.expired) {
      const reversedStr = currObj.value.split('').reverse().join('')
      acc = acc + reversedStr
    }

    return acc
  }, '')

  return [...new Set(resultStr)].join('')
}

console.log(convert(input))



