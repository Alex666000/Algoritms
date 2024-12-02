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
// Задача №2:
