/*
### Является ли массив подмножеством другого массива
Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.
 */

function arraySubset(source, subset) {
    if (source.length < subset.length) { // если у них не совпадает длина то сразу вернем...
        return false;
    }

    for (let i = 0; i < subset.length; i++) {
        const index = source.indexOf(subset[i]); // ищем совпадения
        if (index === -1) {
            return false;
        }
        delete source[index]; // удалим элемент из исходного масива - если число ушло совпало - 3 вариант...
    }

    return true;
}
// 2 способ:
function arraySubset(source, subset) {
    const sourceSet = new Set(source);
    return subset.every(val => sourceSet.has(val));} // every проверяет, выполняется ли условие для каждого элемента массива.

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false -- тк нет второй "тройке" в первом масиве
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false - длина массивов не совпадает + "тройке" нет в первом массиве
