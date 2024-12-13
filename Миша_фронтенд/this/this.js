// 9 https://www.youtube.com/watch?v=PB_Fa-g1yBE&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=14
var user = {
  name: 'Ivan',
  hi() {
    console.log(this.name);
  }
};

user.hi(); // ? Ivan
// а если так:
var user = {
  name: 'Ivan',
  hi: () => { // у стрелки нет "this", стрелка не создают свой контекст (берет вышестоящии контекст у "user" - но у "user" нет "this.user") - значит
    // this это window - у него нет свойства "name", значит будет "undefined"
    console.log(this.name);
    // К стрелки "bind call apply" применить нельзя, для стрелки не сработает - убрать, стрелку переписать
  }
};

user.hi(); // ? Ivan
/*
Стрелочные функции (=>) не имеют своего значения this.
Вместо этого они наследуют значение "this" из окружающего контекста, в котором они были объявлены.
В данном случае стрелочная функция "hi" была объявлена внутри объекта "user", но она не создает привязку "this" к объекту "user".
Значение "this" будет равно тому, что было в области видимости при создании стрелочной функции.
3. В данном случае:
Объявление объекта "user" происходит в глобальном контексте. Стрелочная функция "hi" наследует "this" из глобального контекста.
4. Значение "this" в глобальном контексте:
В браузере глобальный объект — это "window", а в Node.js — global.
Следовательно, "this" внутри стрелочной функции будет равно глобальному объекту.
5. Почему "this.name" выводит "undefined"?
В глобальном объекте (например, window в браузере) нет свойства "name", которое соответствует "Ivan". Поэтому:
console.log(this.name); // undefined
 */

// ЗАДАЧА: 1
// что будет в консоль (https://interview.cups.online/live-coding/?room=6d002195-f1d5-4538-b9cf-69ddc684fbc6)

// const userService = {
//   currentFilter: 'active',
//   users: [
//     { name: 'Alex', status: 'active' },
//     { name: 'Nick', status: 'deleted' }
//   ],
//   getFilteredUsers: function() {
//     return this.users.filter(function(user) {
//       return user.status === this.currentFilter;
//     });
//   }
// };
//
// console.log(userService.getFilteredUsers());
// Ответ: [] - тк this указывает на контекст declaration функции: function(user) {} - у "анонимной-деклареишн" - this всегда указывает на
// "виндоу" - this будет гл.объект "window" - а у него нет метода currentFilter
// Сравнение user.status === this.currentFilter всегда возвращает false, потому что this.currentFilter не существует в текущем контексте.
// Итог — filter ничего не возвращает, значит  результатом будет пустой массив
// и мы возвращаем массив внутри которого "undefined" - значит пустой []
/*
- Когда this ссылается на "window" то делаем стрелку или "self" или "bind()".
__ bind () а не call() - bind вернет функцию с привязанным контекстом
bind() - нельзя так после скобок написать: userService.getFilteredUsers().bind() --> нало: userService.getFilteredUsers.bind(userService)()
// в этом примере можно сразу call: userService.getFilteredUsers.call(userService)
-------------------------------------------------
bind():
const userService = {
  currentFilter: 'active',
  users: [
    { name: 'Alex', status: 'active' },
    { name: 'Nick', status: 'deleted' }
  ],
  getFilteredUsers: function() {
    return this.users.filter(function (user) {
      return user.status === this.currentFilter;
    }.bind(this));
  }
};

console.log(userService.getFilteredUsers());
--------------------------------------
() =>:
const userService = {
  currentFilter: 'active',
  users: [
    { name: 'Alex', status: 'active' },
    { name: 'Nick', status: 'deleted' }
  ],
  getFilteredUsers: function() {
    return this.users.filter((user) => {
      return user.status === this.currentFilter;
    }.bind(this));
  }
};

console.log(userService.getFilteredUsers());
---------------------------------------------
"self":
const userService = {
  currentFilter: 'active',
  users: [
    { name: 'Alex', status: 'active' },
    { name: 'Nick', status: 'deleted' }
  ],
  getFilteredUsers: function() {
      const self = this // выше функции внутри которой "this" - заводим "self"

    return this.users.filter(function(user) {
      return user.status === self.currentFilter;
    });
  }
};
console.log(userService.getFilteredUsers());
---------------------------------------------
Чтобы код падал при выполнении === ошибка пишем 'use strict'
 */
// ==========================================================================================================================================
//    Что в консоле?                                                    ЗАДАЧА: 2
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
