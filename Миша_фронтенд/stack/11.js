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
// console_enet_loop.log(queue.isEmpty()); // true
// queue.enqueue(1);
// queue.enqueue(2);
//
// console_enet_loop.log(queue.peek()); // 1
//
// console_enet_loop.log(queue.dequeue()); // 1
// console_enet_loop.log(queue.dequeue()); // 2
// console_enet_loop.log(queue.isEmpty()); // true
//
// const queue = new Queue();
// console_enet_loop.log(queue.isEmpty()); // true
// queue.enqueue(1);
// queue.enqueue(2);
// console_enet_loop.log(queue.peek()); // 1
// console_enet_loop.log(queue.dequeue()); // 1
// console_enet_loop.log(queue.dequeue()); // 2
// console_enet_loop.log(queue.isEmpty()); // true
// --------------------------------------------
// Задача №2: 6.30 https://www.youtube.com/watch?v=T_zWJYVZJRU
// ИСХОДНИК: Реализовать очередь с помощью 2-х стэков а конкретно 3 метода: enqueue(data) {}, dequeue() {}, count() {}.
// Где data -это аргумент который кладем в очередь. Очередь — это структура данных, работающая по принципу:
// "Первый добавленный элемент — первый будет удалён". Пример: Добавили 1, затем 2, затем 3. Удаление будет происходить в порядке:
// сначала 1, потом 2, потом 3. Стек — это структура данных, работающая по принципу:
// Последний добавленный элемент — первым будет удалён - Добавили 1, затем 2, затем 3. Удаление будет происходить в порядке:
// сначала 3, потом 2, потом 1.

// class Stack {
//     constructor() {
//         this.storage = [];
//     }
//
//     push(data) {
//         this.storage.push(data);
//     }
//
//     pop() {
//         return this.storage.pop();
//     }
//
//     size() {
//         return this.storage.length;
//     }
// }
//
// class Queue {
//     constructor() {
//         this.stack1 = new Stack();
//         this.stack2 = new Stack();
//     }
//
//     // добавляет элемент в конец очереди.
//     enqueue(data) {}
//
//     // удаляет элемент из начала очереди и возвращает его
//     dequeue() {}
//
//     // текущее количество элементов в очереди.
//     count() {}
// }
//
// const queue = new Queue();
//
// queue.enqueue(1);
// queue.enqueue(2);

// queue.dequeue(); // 1

// queue.enqueue(3);
// queue.enqueue(4);

// queue.dequeue(); // 2
// queue.dequeue(); // 3
// ----------------------------------------------------------------
// РЕШЕНИЕ:
// // Реализация стека
// class Stack {
//     constructor() {
//         this.storage = [];
//     }
//
//     // Добавить элемент в стек в конец стэка
//     push(data) {
//         this.storage.push(data);
//     }
//
//     // Удалить последний элемент из стека
//     pop() {
//         return this.storage.pop();
//     }
//
//     // Текущий размер стека
//     size() {
//         return this.storage.length;
//     }
// }
//
// // Реализация очереди
// class Queue {
//     constructor() {
//         this.stack1 = new Stack(); // Основной стек для добавления
//         this.stack2 = new Stack(); // Вспомогательный стек для удаления
//     }
//
//     // Добавить элемент в очередь - ЭТО РЕАЛИЗОВАТЬ ЭТИ МЕТОДЫ!!!!!!!!!!!
//     enqueue(data) {
//         this.stack1.push(data);
//     }
//
//     // Удалить элемент из очереди - ЭТО РЕАЛИЗОВАТЬ ЭТИ МЕТОДЫ!!!!!!!!!!!
//     dequeue() {
//         // Если второй стек пуст, перекладываем элементы из первого
//         if (this.stack2.size() === 0) {
//             while (this.stack1.size() > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//
//         // Если второй стек всё ещё пуст, значит очередь пуста
//         if (this.stack2.size() === 0) {
//             throw new Error("Очередь пуста!");
//         }
//
//         return this.stack2.pop();
//     }
//
//     // Количество элементов в очереди - ЭТО РЕАЛИЗОВАТЬ ЭТИ МЕТОДЫ!!!!!!!!!!!
//     count() {
//         return this.stack1.size() + this.stack2.size();
//     }
// }
//
// // Пример использования
// const queue = new Queue();
//
// queue.enqueue(1); // Добавляем 1
// queue.enqueue(2); // Добавляем 2
//
// console.log(queue.dequeue()); // Удаляем и выводим 1
// queue.enqueue(3); // Добавляем 3
// queue.enqueue(4); // Добавляем 4
//
// console.log(queue.dequeue()); // Удаляем и выводим 2
// console.log(queue.dequeue()); // Удаляем и выводим 3
//
// console.log(queue.count()); // Выводим количество элементов (1 элемент)















































