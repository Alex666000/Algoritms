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
// https://www.youtube.com/watch?v=A5YpfpgEosQ 40 min
/** 18. Напишите функцию, реализующую функционал Promise.all */
const test: number[] = Array.from(Array(5), (_, index) => index);

const promises = test.map((item, index) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(index), index * 100)
  );
});

// Добавляем промис с ошибкой
// promises.push(new Promise((_, reject) => reject("MyError")));

// В слух проговариваем и просматриваем, что значит каждый аргумент, что возвращает функция смотрим глазами
// дненерик используем для именно того, чего я не знаю, а не знаю что возвращает каждый промис (какие данные)
// Т ни от чего не "экстендится", тк не знаем какои тип данных возвращает промис
const promiseAll = <T>(promises: Array<Promise<T>>): Promise<T[]> => {
  const results: Array<T> = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          results[index] = res;
          counter = counter + 1;

          if (counter === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

promiseAll(promises)
  .then((data) => console.log("Resolved:", data))
  .catch((err) => console.error("Rejected:", err));

