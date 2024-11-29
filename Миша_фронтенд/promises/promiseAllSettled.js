function promiseAllSettled(promisesArray) {
  // Проверка, что аргумент является массивом
  if (!Array.isArray(promisesArray)) {
    throw new Error("Аргумент должен быть массивом промисов");
  }

  // Если массив пустой, сразу возвращаем разрешённый пустой массив
  if (promisesArray.length === 0) {
    return Promise.resolve([]);
  }

  // Создаём массив, который будет хранить результаты выполнения промисов
  const results = [];
  let completedCount = 0; // Счётчик завершённых промисов

  return new Promise((resolve) => {
    // Проходим по каждому элементу массива
    promisesArray.forEach((promise, index) => {
      // Преобразуем элемент в промис, если это не промис
      Promise.resolve(promise)
        .then((value) => {
          // Если промис завершился успешно, сохраняем результат в массив
          results[index] = { status: 'fulfilled', value };
        })
        .catch((reason) => {
          // Если промис завершился с ошибкой, сохраняем ошибку
          results[index] = { status: 'rejected', reason };
        })
        .finally(() => {
          completedCount++;

          // Когда все промисы завершены, возвращаем результат
          if (completedCount === promisesArray.length) {
            resolve(results);
          }
        });
    });
  });
}
// Используем:
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject('Error');
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'done'));

promiseAllSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    /*
    [
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'Error' },
      { status: 'fulfilled', value: 'done' }
    ]
    */
  })
  .catch((error) => {
    console.error('Something went wrong:', error);
  });



/*
Объяснение:
Проверка типа входных данных:

Мы начинаем с проверки, что promisesArray — это массив. Если это не массив, выбрасываем ошибку с сообщением "Аргумент должен быть массивом промисов".
Если массив пустой, сразу возвращаем промис с пустым массивом. Это предотвращает лишнюю работу, если нет промисов для обработки.
Перебор массива:

Для каждого элемента массива promisesArray мы используем Promise.resolve(promise), чтобы гарантировать, что каждый элемент будет превращён
в промис (если это не промис, он будет промисифицирован).
Обработка состояний промисов:

Если промис разрешается (fulfilled), мы сохраняем его результат в массив results с статусом { status: 'fulfilled', value: result }.
Если промис отклоняется (rejected), мы сохраняем причину ошибки в массив results с объектом { status: 'rejected', reason: error }.
Завершение всех промисов:

Мы следим за количеством завершённых промисов с помощью переменной completedCount. Как только все промисы завершены,
вызываем resolve(results) с массивом результатов, содержащим как успешные, так и отклонённые промисы.
Тип возвращаемого значения:

Мы возвращаем новый промис, который в конечном итоге будет резолвиться с массивом объектов, в которых будет содержаться информация
о состоянии каждого промиса (успешно ли он завершился или с ошибкой).
 */
