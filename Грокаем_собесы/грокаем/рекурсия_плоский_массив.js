// 0! = 1
// n! = n * (n - 1)!
// 2! = 1 * 2 = 2;
// 3! = 1 * 2 * 3 = 6;
// 4! = 1 * 2 * 3 * 4 = 24;

/* function factorial(n) {
  if (n === 0) return 1
  // console_enet_loop.log(this) - this тут есть но мы его не используем
  // сначала работает выражение справа в js потом слева
  return n * factorial(n - 1) // замыкание n - сохраняется не сбрасывается - сначала n=4 потом n=3 и так до выхода из рекурсии
}

console_enet_loop.log(factorial(4))
*/
// Чему равен factorial от (4)? = 4 * factorial(3)

// 2 "фибоначчи":
// console_enet_loop. log (factorial(-4));
// fibonacci (0) = 0;
// fibonacci (1) = 1;
// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2), n > 1;

// степенная тяжелая функция - возрастает очень быстро - глубина тут небольшая
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//     console_enet_loop.log(fibonacci(6))
//   }
// }

// 3 плоскийй массив:
// 1 способ - в лоб рекурсией:
 const flatten = (...args) => {
  const result = []

  args.forEach((item) => {
    if (Array.isArray(item)) {
      // тк flatten возвращает массив (то можем деструктурировать функцию) то через запятую можем делать
      // пушить несколько элементов
      // если массив выполнение текущей функции flatten останавливается и происходит вызов от внутренних параметров:
      // flatten(...item) - соответственно вызывается функция  flatten([2, [[3]]]) потом flatten([3]) и тд...
      result.push(...flatten(...item))
    } else {
      result.push(item)
    }
  })

  return result
}

// 2 способ - reduce() - тк возвращаем массив редюсом удобнее
const flatten = (...args) => {
  return result = args.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flatten(...item))
    } else {
      acc.push(item)
    }
    return acc
  }, [])

  return result
}

console.log(flatten(-1, [2, [[3]]], 4, 5, [6, [7]]));
