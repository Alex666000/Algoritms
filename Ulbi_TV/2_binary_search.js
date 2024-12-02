/*
!!!!!!!!!!!!!!!!!!!!!!!!!Бинарный поиск!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
------------------- Логика - ищем центральный элемент (число) в массиве:-------------------------
 */
//1 способ с помощью цикла:
const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let count = 0

function binarySearch(array, item) { // item - искомый элемент
    let start = 0 // позиция (индекс, а не само число) первого элемента
    let end = array.length
    let middle;
    let found = false // флаг - нашли элем в массиве или нет?
    let position = -1 // позиция элемента - если не был найден вернем -1
    while (found === false && start <= end) { // крутимся пока не нашли элемент или стартовая и конечные позиции не поровнялись
        // count+=1

        // ВЫСЧИТЫВАЕМ позицию центрального элемента
        middle = Math.floor((start + end) / 2); // если получится не целое число то округляем
        if (array[middle] === item) { // если элемент находящийся в массиве по индексу который мы высчитали = тому элементу который ищем -
            // тогда флаг меняем (НАШЛИ ЭЛЕМЕНТ ЧТО ИСКАЛИ!!!)
            found = true // нашли элемент и цикл остановится
            position = middle // и присваиваем позицию
            return position;
        }
        if (item < array[middle]) { // если искомый элемент меньше центрального
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}
// 2 способ: "рекурсивный" красивее код и лаконичнее:
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    // count += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

console.log(recursiveBinarySearch(array, 0, 0, array.length))
// console_enet_loop.log(binarySearch(array, 8));
// console_enet_loop.log(count)

/*
О log2n: за 4 итерации максимум наидем любой элемент в массиве
O от логарифм n по основанию 2
 */
