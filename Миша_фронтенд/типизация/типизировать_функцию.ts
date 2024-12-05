// Типизируй функцию - эта строка: на стр 10 - должна дать ошибку: getProperty(X, 'm'); на стр 9 нет
// 47 - https://www.youtube.com/watch?v=DEP_9rrIVWk&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=13
/*const X = { a: 1, b: 2, c: 3, d: 4 };

function getProperty(obj, key) {
  return obj[key];
}

getProperty(X, 'a');
getProperty(X, 'm');*/

// Решение:
const X = {a: 1, b: 2, c: 3, d: 4};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProperty(X, "a");
getProperty(X, "m"); // Ура! все верно!
