// наити сумму элементов массива:

const arr_1 = [2, -3, 5, 1, -4]

function sum(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
    // sum += = array[i]
  }
  return sum
}

console.log(sum(arr_1))

// найти максимальное значение массива

// const arr_2 = [2, 4, 5, 1, -4]

function findMaxValueInArray(array) {
  let maxValue = arr_2[0]

  for (let i = 0; i < arr_2.length; i++) {
    let item = arr_2[i]

    if (item > maxValue) {
      maxValue = item // если текущии элемент массива > максимального -- мы его помещаем в maxValue
    }
  }

  return maxValue
}

console.log(findMaxValueInArray(arr_2))

// Найти индекс максимального элемента массива
const arr_3 = [4, 2, 5, 1, -4]

function findMaxIndexInArray(array) {
  let index = 0

  for (let i = 0; i < arr_3.length; i++) {
    const item = arr_3[i]
    if (item > index) {
      index = i   // i - индекс перебираемого значения - если перебираемый элемент больше индекса то в него кладем - i
    }
  }

  return index
}

console.log(findMaxIndexInArray(arr_3))

// Посчитать кол-во отрицательных чисел в массиве
const arr_4 = [4, 2, 5, 1, -4, -12]

function countNegativeNumbers(array) {
  let count = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count = count + 1
    }
  }

  return count
}

console.log(countNegativeNumbers(arr_3))

// Отсортировать массив
const arr = [4, 2, 5, 1, -4, -12]

console.log(arr.sort((a, b) => {
  if (a > b) return 1
  return -1
}))

// Сколько раз элемент встречается в массиве: Ответ  в виде: {kiwi: 2}
const fruits = ['kiwi', 'apple', 'kiwi', 'kiwi']

function countFruit(list) {
  // "Словарик" --> Результат должен быть объектом, где ключи — это элементы массива, а значения — количество их вхождений
  // ключ: count[item] - a значение или 1 или один ++
  // если при переборе массива нам встретился ключ count[item] - то увеличиваем значение ключа на 1 или оставляем === 1
  let count = {}


  for (let i = 0; i < list.length; i++) {
    let item = list[i]

    // ключ
    if (count[item]) {
      count[item]++
    }

    if (!count[item]) {
      count[item] = 1
    }
  }

  return count
}


console.log(countFruit(fruits))

// Массив уникальных значений:
const fruits_1 = ['kiwi', 'apple', 'kiwi', 'kiwi']

const uniqueItems = (list) => {
    const unique = {}

    list.forEach((item) => {
        unique[item] = true // все значения массива перезаписываем в true даже если повторно встречаем и станут уникальными
    })

    return Object.keys(unique)
}
console.log(uniqueItems(fruits))
