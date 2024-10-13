// 1 - стек
const flatten = (...args) => {
  const result = []
  const stack = [...args] // чтобы не мутировать исходный массив

  while (stack.length) { // пока стек существует
    const firstElem = stack.shift()
    if (Array.isArray(firstElem)) {
      stack.unshift(...firstElem)
    } else {
      result.push(firstElem)
    }

  }

  return result
}

console.log(flatten(-1, [2, [[3]]], 4, 5, [6, [7]]));
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));

// 2 очередь: вычислить максимальное время которое потребуется чтобы обслужилась вся очередь в кинотеатр
function queueTime(customers, n) {
  const queue = [...customers]
}

console.log(queueTime([1], 1), 0);
console.log(queueTime([1,2,3,4], 1), 10);
console.log(queueTime([2,2,3,3,4,4], 2), 9);
console.log(queueTime([1,2,3,4,5], 100), 5);

