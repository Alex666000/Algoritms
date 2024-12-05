var a = 1;
var b = 3;

function c() {
  let b = 4;
  a = 2;
}

c();

console.log(a); // ? 2 - здесь глобальная переменная a изменяется на 2, потому что в функции нет локального объявления a
// (например, с помощью var, let или const), а значит, JavaScript идет вверх по цепочке областей видимости и находит глобальную a.

console.log(b); // ? 3 - внутри функции создается локальная переменная b со значением 4. Эта переменная let доступна только внутри функции
// c() и никак не влияет на глобальную переменную b.
// ------------------------------------------------------------------------------------------------------
function two() {
  console.log(a);
}

function one() {
  console.log(a);
  var a = 2;
  two();
}

var a = 1;
console.log(a);
one();
// ответ: console.log(a); внутри функции one:
// Внутри функции one объявляется локальная переменная a с помощью var.
// Переменная a поднимается (hoisted), но ее значение на момент вызова console.log(a) еще не присвоено.
// Поэтому console.log(a) выводит undefined.
// var a = 2;:
// После выполнения этой строки, локальная переменная a внутри one получает значение 2.
// two();:
// Функция two вызывается.
// Важно: Внутри two нет локальной переменной a, поэтому она использует глобальную переменную a, которая равна 1. // 1 undef 1
// two вызывается внутри one но это не замыкание тк two лежит не внтри one а в глобальной области - а берется из глобальной..
// ------------------------------------------------------------------------------------------------------
function one() {
  console.log(a)
}

function two() {
  console.log(a)
  var a = 2
  two()
}

var a = 1
console.log(a)
one()
// Ответ: // 1 1
// ------------------------------------------------------------------------------------------------------
function Constructor1() {
}

var Constructor2 = function () {
};
var Constructor3 = () => {
};

console.log(new Constructor1());
console.log(new Constructor2());
console.log(new Constructor3());
// 1 и 2 успешно — третья ошибка — тк стрелочные функции не могут использоваться в качестве конструктора
// ------------------------------------------------------------------------------------------------------
function Constructor() {
}

var o = new Constructor();
console.log(o.__proto__ === Constructor.prototype); // true
// -----------------------------------------------------------------------


































