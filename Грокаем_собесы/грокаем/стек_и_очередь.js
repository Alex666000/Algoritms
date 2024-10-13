// "плоский массив" - вернуть надо развернутый массив
// по факту args и будет наш стэк
function flatten(...args) {
  const result = []

  while (args.length) {
    // берем первый элем из стэка и одновременно удаляем из него
    const el = args.shift()
    if (Array.isArray(el)) {
      // если массив то мы его развернем и в самое начало положим
      args.unshift(...el)
      continue // далее возвращаемся в цикл while снова - чтобы не писать else - континье красивее
    }
    result.push(el) // если это не массив пушим в результирующий
  }

  return result

}


console.log(flatten(-1, [2, [[3]]], 4, 5, [6, [7]]));
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));
