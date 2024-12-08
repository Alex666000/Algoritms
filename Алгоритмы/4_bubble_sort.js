const arr = [1, 4, 5, 77, 10, 15, 21, 17, 2, 7, 8, 10, -2, -5]
let count = 0


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
            count += 1
        }

    }
    return arr
}

console.log(`arr length = ${arr.length}`)
console.log(bubbleSort(arr)) //O(n*n)
console.log(`count = ${count}`)