//     ЗАДАЧА: 1 что будет в консоль (https://interview.cups.online/live-coding/?room=6d002195-f1d5-4538-b9cf-69ddc684fbc6)
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
// Ответ: [] - тк this указывает на контекст declaration функции: function(user) {} - у деклареишн this всегда указывает на "виндоу" -
// this будет гл.объект "window" а у него нет метода currentFilter - и мы возвращаем массив внутри которого undefined значит пустой []
/*
- Когда this ссылается на window то делаем стрелку или that или bind ().
__ bind () а не call() - bind вернет функцию с привязанным контекстом
-------------------------------------------------
bind ():
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
self:
const userService = {
  currentFilter: 'active',
  users: [
    { name: 'Alex', status: 'active' },
    { name: 'Nick', status: 'deleted' }
  ],
  getFilteredUsers: function() {
      const self = this // выше функции заводим self

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
//                                                        ЗАДАЧА: 2
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
