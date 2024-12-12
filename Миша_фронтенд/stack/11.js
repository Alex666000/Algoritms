// Напишите свой стек на клаассе JS:
class Stack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  isFull() {
    return this.stack.length === this.maxSize;
  }

  size() {
    return this.stack.length;
  }

  set item(element) {
    if (this.isFull()) {
      throw new Error('Stack is full');
    }
    return this.stack.push(element);
  }

  get item() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.stack.pop();
  }

// Два последних элемена были поменяны местами (как если бы им reverse()написали бы...)
  swap() {
    if (this.stack.length < 2) {
      throw new Error('Problem');
    }
    const oneElem = this.stack.pop();
    const twoElem = this.stack.pop();
    this.stack.push(oneElem, twoElem);
  }
}


// 3 "СТЭК" - ОЧЕРЕДь
// Исходные данные задачи:
// Реализовать класс Queue (очередь), в котором должны быть следующие методы:
// enqueue(item) — добавляет элемент в конец очереди.
// dequeue() — удаляет и возвращает первый элемент из очереди.
// peek() — возвращает первый элемент очереди, не удаляя его.
// size() — возвращает количество элементов в очереди.
// isEmpty() — проверяет, пуста ли очередь.
// Условия:
// Очередь должна быть реализована с использованием массива.
// Реализуйте методы так, чтобы они соответствовали поведению очереди:
// FIFO (First In, First Out) — первым выходит тот элемент, который был добавлен в очередь раньше всех.

// class Queue {
//   constructor() {
//     this.items = []; // Массив для хранения элементов очереди
//   }
//
//   // Добавить элемент в очередь
//   enqueue(item) {
//   }
//
//   // Удалить первый элемент из очереди
//   dequeue() {
//
//   }
//
//   // Получить первый элемент, не удаляя его
//   peek() {
//
//   }
//
//   // Получить размер очереди
//   size() {
//
//   }
//
//   // Проверить, пуста ли очередь
//   isEmpty() {
//
//   }
// }

// Пример использования:
// const queue = new Queue();

// console.log(queue.isEmpty()); // true
// queue.enqueue(1);
// queue.enqueue(2);
//
// console.log(queue.peek()); // 1 (не удаляем элемент)
// console.log(queue.dequeue()); // 1 (удаляем элемент)
// console.log(queue.dequeue()); // 2 (удаляем элемент)
// console.log(queue.isEmpty()); // true
// ----------------------------------------------
// РЕШЕНИЕ:
// ------------------------------------
// class Queue {
//   constructor() {
//     this.items = []; // Массив для хранения элементов очереди
//   }
//
//   // Добавить элемент в очередь
//   enqueue(item) {
//     this.items.push(item);
//   }
//
//   // Удалить первый элемент из очереди
//   dequeue() {
//     return this.items.shift(); // Удаляем первый элемент массива мутируя его
//   }
//
//   // Получить первый элемент, не удаляя его
//   peek() {
//     return this.items[0]; // Возвращаем первый элемент массива не мутируя - оставляя в массиве также
//   }
//
//   // Получить размер очереди
//   size() {
//     return this.items.length;
//   }
//
//   // Проверить, пуста ли очередь
//   isEmpty() {
//     return this.size() === 0; // this.items.length === 0
//   }
// }
//
// // Тестирование
// const queue = new Queue();
//
// console.log(queue.isEmpty()); // true
// queue.enqueue(1);
// queue.enqueue(2);
//
// console.log(queue.peek()); // 1 (не удаляем элемент)
// console.log(queue.dequeue()); // 1 (удаляем элемент)
// console.log(queue.dequeue()); // 2 (удаляем элемент)
// console.log(queue.isEmpty()); // true
// --------------------------------------------











































