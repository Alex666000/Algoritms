// 0! = 1
// n! = n * (n - 1)!
// 2! = 1 * 2 = 2;
// 3! = 1 * 2 * 3 = 6;
// 4! = 1 * 2 * 3 * 4 = 24;

function factorial(n) {
  if (n === 0) return 1

  // сначала работает выражение справа в js потом слева
  return n * factorial(n - 1) // замыкание n - сохраняется не сбрасывается - сначала n=4 потом n=3 и так до выхода из рекурсии
}

console.log(factorial(4))
