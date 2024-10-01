// THIS

// 1) const counter = {
//   count: 0,
//
//   increment: function() {
//     const incrementer = function() {
//       this.count += 1;
//     };
//
//     incrementer();
//   },
//
//   getCount: function() {
//     return this.count;
//   }
// };
//
// counter.increment();
// console.log('Current count:', counter.getCount());

// 2 - EVENT LOOP (1 6 3 2 7 8 ) - 7 первее 8 тк 7 попала в очередь макротасок быстрее ("зарегистрировалась")
// console.log(1);
// setTimeout(() => console.log(2));
// Promise.reject(3).catch(console.log); // микро
// Promise.resolve(5).then(() => setTimeout(() => console.log(8),0)) // макротакса внутри микро - считается как макротаска
// console.log(6);
// setTimeout(() => console.log(7),0);


// 3 "СТЭК" - ОЧЕРЕДь
// class Queue {
//   constructor() {
//     this.items = []; // [1, 2]
//   }
//
//   enqueue(item) {
//     this.items.push(item);
//   }
//
//   dequeue() { // достать 1
//     // implement -- удалем из очереди - мутируем массив
//     return this.items.shift()
//   }
//
//   peek() { // достать 2
//     // implement -- "достаем первый элемент из массива но не удаляем его - не мутируем массив"
//     return this.items[0]
//   }
//
//   size() {
//     return this.items.length;
//   }
//
//   isEmpty() {
//     return this.size() === 0;
//   }
// }
//
// const queue = new Queue();
//
// console.log(queue.isEmpty()); // true
// queue.enqueue(1);
// queue.enqueue(2);
//
// console.log(queue.peek()); // 1
//
// console.log(queue.dequeue()); // 1
// console.log(queue.dequeue()); // 2
// console.log(queue.isEmpty()); // true
//
// const queue = new Queue();
// console.log(queue.isEmpty()); // true
// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.peek()); // 1
// console.log(queue.dequeue()); // 1
// console.log(queue.dequeue()); // 2
// console.log(queue.isEmpty()); // true

// // // Задача "Суммирование с помощью функций" ("КАРРИРОВАНИЕ")
//
// function add(x) {
//   return function sum(x) {
//     return sum(x)
//   }
//
// }
//
// add(1)(2)(); // Возвращает 3
// add(1)(2)(3)(); // Возвращает 6
// add(5)(-1)(2)(); // Возвращает 6
//
// console.log(add(1)(2)())
// Решение задачи:
// function add(x) {
//   // Внутренняя функция, которая принимает следующий аргумент или возвращает сумму
//   function innerAdd(y) {
//     if (y !== undefined) {
//       x = x + y; // Если аргумент передан, добавляем его к сумме
//       return innerAdd; // Возвращаем саму функцию для продолжения цепочки
//     } else {
//       return x; // Если аргумента нет, возвращаем итоговую сумму
//     }
//   }
//
//   return innerAdd; // Возвращаем внутреннюю функцию для начала цепочки
// }

// Примеры использования
console.log(add(1)(2)());      // 3
console.log(add(1)(2)(3)());   // 6
console.log(add(5)(-1)(8)());  // 6
//
// add(1)(2)(); // Возвращает 3
// add(1)(2)(3)(); // Возвращает 6
// add(5)(-1)(2)(); // Возвращает 6


// Задача "Суммирование с помощью функций" ("РЕКУРСИЯ")

function add(x) {
  return function sum(y) {
    return x + y
  }

}



// 4



//5


// 6





// 7




// 8
