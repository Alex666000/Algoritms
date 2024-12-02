// "Подсчёт положительных элементов в массиве"
// Task #1
// Дан массив чисел, необходимо написать функцию, которая возвращает количество положительных элементов в этом массиве.
//
// Пример:
// Input: [1, -2, 3, -4, 5]
// Output: 3
// Пояснение:
// Исходный массив: [1, -2, 3, -4, 5]
// Положительные элементы: [1, 3, 5]
// Количество положительных элементов: 3

// Task #2
// "Сумма элементов массива чисел
// Дан массив чисел, необходимо написать функцию, которая возвращает сумму всех элементов массива.
//
// Пример:
// Input: [1, 2, 3, 4, 5]
// Output: 15
// Пояснение:
// Исходный массив: [1, 2, 3, 4, 5]
// Сумма всех элементов: 1 + 2 + 3 + 4 + 5 = 15
// Тестовые случаи:
// console_enet_loop.log(sumArray([1, 2, 3, 4, 5]));
// // Output: 15
//
// console_enet_loop.log(sumArray([-1, 2, -3, 4, -5]));
// // Output: -3
//
// console_enet_loop.log(sumArray([0, 0, 0, 0, 0]));
// // Output: 0
//
// console_enet_loop.log(sumArray([]));
// // Output: 0
// Пожалуйста, обратите внимание, что функция работает с массивом чисел и возвращает их сумму.
//
// index.js
// 123
// var sumArray = function (nums) {
//     return nums.reduce((num, sum) => num + sum , 0)
// };
// Task #3
// Максимальная прибыль на акциях
// Описание задачи:
// Вы получаете массив prices, где prices[i] указывает цену данной акции в i-ый день.
//
// Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для продажи этой акции.
//
// Напишите функцию maxProfit(prices), которая возвращает максимальную прибыль, которую вы можете получить от этой сделки. Если вы не можете получить какую-либо прибыль, верните 0.
//
// Примеры:
// maxProfit([7, 1, 5, 3, 6, 4]);
// // Ожидаемый результат: 5
//
// maxProfit([7, 6, 4, 3, 1]);
// // Ожидаемый результат: 0
//
// maxProfit([3, 8, 1, 5, 9]);
// // Ожидаемый результат: 8
//
// maxProfit([2, 4, 2, 6, 1]);
// // Ожидаемый результат: 4
//
// maxProfit([5, 2, 9, 1, 5]);
// // Ожидаемый результат: 7
// index.js
// 12345678910111213141516
// var maxProfit = function (prices) {
//     if(prices.length < 2) return 0
//
//     let minPrice = prices[0]
//
//     let maxProfit = 0
//
//     for(let i = 1; i < prices.length; i++) {
//         const profit = prices[i] - minPrice
//
//
// Task #4
// Обратный порядок строки
// Дана строка, необходимо написать функцию, которая возвращает эту же строку, но в обратном порядке.
//
// Пример:
// Input: "hello"
// Output: "olleh"
// Пояснение:
// Исходная строка: "hello"
// Обратная строка: "olleh"
// Тестовые случаи:
// console_enet_loop.log(reverseString("hello"));
// // Output: "olleh"
//
// console_enet_loop.log(reverseString("world"));
// // Output: "dlrow"
//
// console_enet_loop.log(reverseString("12345"));
// // Output: "54321"
//
// console_enet_loop.log(reverseString(""));
// // Output: ""
// Пожалуйста, обратите внимание, что функция будет работать со строкой и вернёт эту строку в обратном порядке.
//
// index.js
// 3
// var reverseString = function (str) {
//     return str.split('').reverse().join('')
// };
// Task #5
// Сортировка по длине
// Дан массив строк, необходимо написать функцию, которая возвращает этот же массив, отсортированный по длине строк от самой короткой к самой длинной.
//
// Пример:
// Input: ["apple", "banana", "orange", "kiwi", "grape"]
// Output: ["kiwi", "grape", "apple", "orange", "banana"]
// Пояснение:
// Исходный массив: ["apple", "banana", "orange", "kiwi", "grape"]
// Отсортированный массив по длине строк: ["kiwi", "grape", "apple", "orange", "banana"]
// Тестовые случаи:
// console_enet_loop.log(sortByLength(["apple", "banana", "orange", "kiwi", "grape"]));
// // Output: ["kiwi", "grape", "apple", "orange", "banana"]
//
// console_enet_loop.log(sortByLength(["a", "bc", "def", "ghij", "klmno"]));
// // Output: ["a", "bc", "def", "ghij", "klmno"]
//
// console_enet_loop.log(sortByLength([]));
// // Output: []
//
// console_enet_loop.log(sortByLength(["xyz", "pq", "rs", "tuvw"]));
// // Output: ["pq", "rs", "xyz", "tuvw"]
// Пожалуйста, обратите внимание, что функция будет работать с массивом строк, а элементы массива будут сравниваться по их длине для сортировки.
//
// index.js
// 123
// var sortByLength = function(arr){
//     return arr.sort((a, b) => a.length - b.length)
// };
// Task #6
// Вычисление числа Фибоначчи
// Реализуйте функцию fibonacci(n), которая возвращает n-ное число Фибоначчи.
//
// Числа Фибоначчи определяются следующим образом: F(0) = 0, F(1) = 1, и для всех n больше 1, F(n) = F(n-1) + F(n-2).
//
// Функция:
//
// /**
//  * @param {number} n - Неотрицательное целое число, для которого нужно вычислить число Фибоначчи.
//  * @return {number} - n-ное число Фибоначчи.
//  */
// function fibonacci(n) {
//     // ваш код здесь
// }
// Примеры:
//
// console_enet_loop.log(fibonacci(0)); // Вывод: 0
// console_enet_loop.log(fibonacci(1)); // Вывод: 1
// console_enet_loop.log(fibonacci(2)); // Вывод: 1
// console_enet_loop.log(fibonacci(5)); // Вывод: 5
// console_enet_loop.log(fibonacci(10)); // Вывод: 55
// Ограничения:
//
// 0 <= n <= 30
