// Задачи к уроку 6
//
// 1) Создать функцию, которая принимает строку и преобразовывает каждую первую букву строки в заглавную и возвращает преобразованную строку
//
// Вход: "How can mirrors be real if our eyes aren't real"
//
// Выход: "How Can Mirrors Be Real If Our Eyes Aren't Real"
//

// slice - копирует массив возвращает новый массив от вкл и до не вкл
/*const changeFirstChar = (str) => {
  // каждый символ строки в большую букву

  return (str.split(' ').map((item) => item.toUpperCase()[0] + item.slice(1))).join(' ')

  // return changeStr // Выход: "How Can Mirrors Be Real If Our Eyes Aren't Real"
}

console_enet_loop.log(changeFirstChar('How can'))*/


// 2) Дана строка состоящая из следующего набора скобок: (, ), {, }, [ и ]. Каждой открывающей скобке соответствует закрывающая, образуя пары.
//
//   Будем считать строку «правильной» если все скобки закрываются в нужном порядке, т.е:
// - для каждой открывающей есть закрывающая из той же пары;
// - скобки закрываются в правильном порядке.
// -пустая строка считается правильной.
//
//   Написать функцию, которая принимает на вход скобки и возвращает true или false
//
//
// isValid('()[]{}') // true
//
// isValid('{[]}') // true
//
// isValid('((()(())))') // true
//
// isValid('(]') // false
//
// isValid('([)]') // false

function isValidParentheses(str) {
  let count = 0

  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      count++
    }

    if (char === ')' || char === ']' || char === '}') {
      count--
    }
  }
  return count === 0
}

console.log(isValidParentheses('((()(())))'))
