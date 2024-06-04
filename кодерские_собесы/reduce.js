const remapData = (dataArray) => {
    return dataArray.reduce((acc, item) => {
        for (let i = 1; i < item.length; i++) {
            const productName = item[0]; // Используем первый элемент в подмассиве как название продукта
            const person = item[i];

            if (acc[person]) {
                if (!acc[person].includes(productName)) {
                    acc[person].push(productName);
                }
            } else {
                acc[person] = [productName];
            }
        }

        return acc;
    }, {});
}

console.log(
    remapData([
        ['Помидоры', 'Аня', 'Женя'],
        ['Огурцы', 'Женя', 'Аня'],
        ['Рис', 'Аня', 'Саша'],
        ['Лосось', 'Иван'],
    ])
);


// {
//     'Аня': ['Помидоры', 'Огурцы', 'Рис']
// }
