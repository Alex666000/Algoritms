const arr = [1, 4, 5, 8, 11, 24, 2]

function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(arr, 11))
