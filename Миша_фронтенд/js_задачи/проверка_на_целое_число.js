// Проверка на целое число
// Эта функция принимает число в качестве аргумента и возвращает true,
// если число является целым, и false, если число имеет дробную часть.

const isInt = (num) => {
  return num.toFixed === num.toString() // return Number.isInteger(num);
}

console.log(isInt(4)); // true
console.log(isInt(4.2)); // false
console.log(isInt(-3)); // true
