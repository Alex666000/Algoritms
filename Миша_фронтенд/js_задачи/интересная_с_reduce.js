const remapData = (dataArray) => {
   return  dataArray.reduce((acc, item) => {
        const product = item[0]
        const man = item[1]

        if (!acc[man]) {
            acc[man] = []
        }

        if (acc[man] !== undefined) {
            acc[man].push(product)
        }

        return acc
    }, {})
}

console.log(
    remapData([
        ['Помидоры', 'Аня', 'Женя'], // {} item
        ['Огурцы', 'Женя', 'Аня'], // item
        ['Рис', 'Аня', 'Саша'], // item
        ['Лосось', 'Иван'], // item
    ])
);

// Ожидаемый результат
// {
 // person:
// product
//     'Аня': ['Помидоры', 'Огурцы', 'Рис'],
//      'Женя': ['Помидоры','Огурцы'],
//      'Иван': ['Рис', 'Лосось'],
//      'Саша': ['Рис',],
// }
