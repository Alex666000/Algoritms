function promiseAll(promisesArray) {
  const result = [];
  // счётчик - для отслеживания количества успешно завершённых промисов. Логика - общий Promise должен
  // завершиться (перейти в состояние "resolved") только тогда, когда все промисы из входного массива завершены
  let successPromiseCount = 0;

  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise) // Преобразуем значение в промис (на случай, если это не промис "промисифицируем")
        .then((res) => {
          // Кладёт результат выполнения каждого промиса в массив "result" на определённую позицию (индекс).
          // чтобы сохранить порядок результатов таким же, как и порядок промисов в исходном массиве promisesArray.
          result[index] = res;
          successPromiseCount = successPromiseCount + 1; // Счётчик увеличивается каждый раз, когда какой-либо промис завершился успешно

          if (successPromiseCount === promisesArray.length) {
            //  текущий промис, созданный через new Promise(Все промисы завершились), завершён
            //  (переходит в состояние "fulfilled") и возвращает итоговое значение
            // resolve или reject завершает текущий промис
            resolve(result);
          }
        })
        .catch(reject); // Если хотя бы один промис завершился с ошибкой, сразу вызываем "reject"
    });

    // Если массив пустой, сразу резолвим с пустым массивом
    if (promisesArray.length === 0) {
      resolve([]);
    }
  });
}

const pr1 = new Promise((resolve) => resolve(6))
const pr2 = new Promise((resolve) => resolve(8))
console.log(promiseAll([pr1, pr2]).then((res) => console.log(res)))

// Теория:
// Когда мы запускаем обработку массива промисов, они работают асинхронно,
// и их завершение происходит в разное время. Нам нужно знать, сколько промисов уже завершилось, чтобы понять, когда все они завершатся.
// ---------------------
// Promise.resolve() — это метод, который гарантирует, что переданное значение будет преобразовано в объект промиса. Если значение уже является промисом,
// оно возвращается без изменений, а если это не промис, то оборачивается в промис.

// Проверочный код - работает ли наша функция:
const pr1 = new Promise(resolve => resolve(1))
const pr2 = new Promise((resolve) => resolve(2))

// или
/*console.log(promiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]))*/

// =====================================================================================================================
// Задача - через сколько сек выполниться
/*function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20); // 2
  const b = await resolveAfter2Seconds(30); // 2 - через 4 сек - 2 + 2
  return x + a + b;
}

async function add2(x) {
  const promise_a = resolveAfter2Seconds(20);
  const promise_b = resolveAfter2Seconds(30);
  /!* переписал на Promise.all - это: return x + (await promise_a) + (await promise_b); *!/
  // const numsArray = await Promise.all([promise_a, promise_b])
  // return x + numsArray[0] + numsArray[1]
  return x + (await promise_a) + (await promise_b); // 2 за две сек: (await promise_a) + (await promise_b)
}

add1(10).then(console.log);
add2(20).then(console.log);*/
