// 1 - стек и очередь while обходить удобнее всего
const flatten = (...args) => {
  const result = []
  const stack = [...args] // чтобы не мутировать исходный массив делаем дубликат - тк потом мутирующие методы массива мутируют исходный args

  while (stack.length) { // пока стек существует
    const firstElem = stack.shift()
    if (Array.isArray(firstElem)) {
      stack.unshift(...firstElem)
      continue // так удобнее - выйдем в след цикл чтобы else {} не писать
    }
    result.push(firstElem)

  }

  return result
}

console.log(flatten(-1, [2, [[3]]], 4, 5, [6, [7]]));
// console_enet_loop.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));

// 2 плоский массив рекурсией
/* const flatten = (...args) => {
  const result = []

  args.forEach((item) => {
    if (Array.isArray(item)) {
      // тк flatten возвращает массив (то можем деструктурировать функцию) то через запятую можем делать
      // пушить несколько элементов
      // если массив выполнение текущей функции flatten останавливается и происходит вызов от внутренних параметров:
      // flatten(...item) - соответственно вызывается функция  flatten([2, [[3]]]) потом flatten([3]) и тд...
      result.push(...flatten(...item))
    } else {
      result.push(item)
    }
  })

  return result
} */
