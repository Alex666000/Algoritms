function one() {
    function two() {
        console.log(a) // 2 - берет из замыкания в функции родителе
    }

    console.log(a) // undefined
    var a = 2
    two()
}

var a = 1
console.log(a) // 1
one()

// 1 undefined 2

