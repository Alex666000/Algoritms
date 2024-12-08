const arr = [1, 4, 5, 77, 10, 15, 21, 17, 2, 7, 8, 10, -2, -5]
let count = 0

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = tmp
    }
    return arr
}

console.log(selectionSort(arr))
console.log(arr.length)
console.log(`count = ${count}`)