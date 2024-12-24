// Типизируй функцию - эта строка: на стр 10 - должна дать ошибку: getProperty(X, 'm'); на стр 9 нет
// 47 - https://www.youtube.com/watch?v=DEP_9rrIVWk&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=13
// const X = { a: 1, b: 2, c: 3, d: 4 };
//
// function getProperty(obj, key) {
//   return obj[key];
// }
//
// getProperty(X, 'a');
// getProperty(X, 'm');
// ---------------------------------------------------------------------------------------------
// Решение:
/*const X = {a: 1, b: 2, c: 3, d: 4};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProperty(X, "a");
getProperty(X, "m"); // Ура! все верно!*/
// ---------------------------------------------------------------------------------------------
// Напиши Promise.all() и Типизируй функцию
const promiseAll = (promises) => {
  const results = [];
  const counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res, index) => {
          results[index] = res;

          if (counter === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

const pr1 = new Promise(resolve => resolve(6));
const pr2 = new Promise(resolve => resolve(4));
promiseAll([pr1, pr2]).then(res => console.log(res[0])).catch(err => console.log(err));
