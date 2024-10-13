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
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));


