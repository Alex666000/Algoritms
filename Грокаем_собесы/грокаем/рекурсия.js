// 0! = 1
// n! = n * (n - 1)!
// 2! = 1 * 2 = 2;
// 3! = 1 * 2 * 3 = 6;
// 4! = 1 * 2 * 3 * 4 = 24;

function factorial(n) {
  if (n === 0) return 1
  // console.log(this) - this тут есть но мы его не используем
  // сначала работает выражение справа в js потом слева
  return n * factorial(n - 1) // замыкание n - сохраняется не сбрасывается - сначала n=4 потом n=3 и так до выхода из рекурсии
}

console.log(factorial(4))
// Чему равен factorial от (4)? = 4 * factorial(3)

// 2 "фибоначчи":
// console. log (factorial(-4));
// fibonacci (0) = 0;
// fibonacci (1) = 1;
// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2), n > 1;

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
    console.log(fibonacci(6))
  }
}
