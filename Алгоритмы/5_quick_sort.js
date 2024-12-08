const arr = [1, 4, 5, 77, 10, 15, 21, 17, 2, 7, 8, 10, -2, -5]
let count = 0

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < arr.length; i++) {
        count += 1
        if (i === pivotIndex) {
            continue
        }
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
