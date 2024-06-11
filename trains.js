// Сколько раз элемент встречается в массиве: Ответ в виде: {kiwi: 2}
const fruits = ['kiwi', 'apple', 'kiwi', 'kiwi']

const countElem = (array) => {
  const count = {}

  array.forEach(item => { // // когда пробегаемся "форич" всегда так сносим вниз фигурные скобки
    if (count[item]) {
      count[item]++
    }

    if (!count[item]) {
      count[item] = 1
    }
  })

  return count
}

console.log(countElem(fruits))
