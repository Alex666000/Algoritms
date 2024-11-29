function promiseRace(promisesArray) {
  // Проверка, что аргумент — массив
  if (!Array.isArray(promisesArray)) {
    throw new Error('Аргумент должен быть массивом промисов');
  }

  // Если массив пустой, возвращаем промис, который никогда не завершится (поведение как у Promise.race)
  if (promisesArray.length === 0) {
    return new Promise(() => {
    }); // Нерезолвящийся промис
  }

  return new Promise((resolve, reject) => {
    for (const promise of promisesArray) {
      // Преобразуем элемент в промис и обрабатываем его
      Promise.resolve(promise)
        .then(resolve) // Первый выполненный успешно промис вызывает resolve
        .catch(reject); // Первый промис с ошибкой вызывает reject
    }
  });
}

// Пример использования и проверка:
const p1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
const p2 = new Promise((resolve) => setTimeout(resolve, 300, "Second"));
const p3 = new Promise((_, reject) => setTimeout(reject, 100, "Error"));

promiseRace([p1, p2, p3])
  .then((res) => console.log("Resolved with:", res)) // Должно вывести: "Resolved with: Error"
  .catch((err) => console.error("Rejected with:", err)); // Должно вывести: "Rejected with: Error"

promiseRace([]).then(console.log); // Ничего не произойдет, промис остаётся нереализованным.

/*
Можно ли заменить for на forEach?
Да, в большинстве случаев это возможно, но важно учитывать особенности:

forEach работает только с массивами.
Внутри forEach нельзя использовать break или continue. Если вам нужна логика с выходом из цикла, используйте for или for...of.
 */

