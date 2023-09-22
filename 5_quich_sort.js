// самая эффективная быстрая сортировка - сортировка Хоара - рекурсивный алгоритм -- "квик сорт"
const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
let count = 0

function quickSort(array) {
    if (array.length <= 1) { // рекурсия закончится если длина массива = 1
        return array
    }
    let pivotIndex = Math.floor(array.length / 2); // найдем опорный элемент
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) { // сравниваем каждый элемент с опорным
        count += 1
        if(i === pivotIndex) //индекс текущий итерации с индексом опорной точки если они равны пропускаем итерацию
            continue
        if (array[i] < pivot) {
            less.push(array[i]) // число которое меньше опорного
        } else {
            greater.push(array[i])
        } // после проходки по циклу получилось 2 массива
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log('count', count)

/*
...quickSort(less) - разворачиваем результат выполнения функции в который передали левый подмассив
 */
