/*
Алгоритм кэширования данных во избежание повторных вычислений функции
 */

function cashFunction(fn) {
    const cash = {} // объект будет хранить по ключу результаты кеширования
    // ключем будет параметр: n - что передаем в функцию
    // возвращаем новую функцию (замыкание) параметром принимает n

    return function (n) {
        if (cash[n]) { // если по ключу: n в объекте находится значение - то его и возвращаем
            // console.log('Взято из кеша', cash[n])
            return cash[n]
        }
        // иначе выполняем функцию и помещаем результат выполнения этой функции в переменную result
        let result = fn(n)
        // console.log('Посчитала функция = ', result)
        cash[n] = result
        return result;
    };
}

function factorial(n) { // рекурсия факториал
    let result = 1 // сюда будем добавлять результат вычислений
    while (n != 1) {
        result *= n // на каждой итерации результат умножаем на число что принимаем параметром и от
        // числа отнимаем 1 пока цикл не остановился
        n -= 1
    }
    return result
}

const cashFactorial = cashFunction(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(4)
cashFactorial(5)
cashFactorial(1)
