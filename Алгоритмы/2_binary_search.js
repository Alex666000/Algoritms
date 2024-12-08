const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const arr2 = [1, 4, 5, 77, 10, 15, 21, 17, 2, 7, 8, 10, -2, -5]
let count = 0

function binarySearch(arr, item) {
    let start = 0
    let end = arr.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count += 1
        middle = Math.floor((start + end) / 2)
        if (arr[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

function recursiveBinarySearch(arr2, item, start, end) {
    let middle = Math.floor((start + end) / 2)
    count += 1
    if (item === arr[middle]) {
        return middle
    }
    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(arr, item, middle + 1, end)
    }
}

console.log(recursiveBinarySearch(arr2, 15, 0, arr.length))
console.log(count)

console.log(binarySearch(arr, 2))
console.log(count)