// Дано:
// Создать функцию возвращающую массив дублирующих значений
let nums = [1, 2, 3, 4, 4, 2, 3, 2]

const findDublicateValues = (array) => {
    const obj = {}
    const res = []

    array.forEach(item => {
        if (obj[item] === undefined) {
            obj[item] = 0
        }

        if (obj[item] === 2) {
            res.push(item)
        }
    })
}

console.log(findDublicateValues(nums));

// 2 Способ:
// const findDublicateValues = (numsArray) => {
//     const unique = new Set() // это обьект уникаьных значений
//     const dublicateArray = [];
//
//     for (const item of numsArray) {
//         if (unique.has(item)) {
//             dublicateArray.push(item)
//         }
//         unique.add(item)
//     }
//
//     return [...new Set(dublicateArray)]; // Возвращаем массив дублирующих значений
// };
//
// const myIterable = {
//     data: ['apple', 'banana', 'cherry'],
//     [Symbol.iterator]() { // Этот метод возвращает объект итератора для данного объекта. Этот ключ является специальным символом,
//         // который гарантирует, что метод будет использоваться как итератор.
//         let index = 0;
//         return {
//             next: () => { // next возвращает следующий элемент при каждом вызове.
//                 if (index < this.data.length) {
//                     return {value: this.data[index++], done: false};
//                 } else {
//                     return {done: true};
//                 }
//             }
//         };
//     }
// };
//
// for (const fruit of myIterable) {
//     console.log(fruit);
// }
//
// console.log('Дублирующие значения:', findDublicateValues(nums));





