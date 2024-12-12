// Что будет выводится в консоль и через какое время? И написать Promise.all()
const sleep = (ms) => { // тут "асинк" писать не надо тк мы явно возвращаем новый промисс - "async" ("промиссифицирует" любую функцию, любая
                        // функция обернутая в "него" вернет всегда "промис" - быстрый способ "промиссификации"..)
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

sleep(1000)
  .then((res) => {
    console.log(res); // 1000 - 1sec
    // - тк явно не написали "return" чтобы передать дальше - в след then будет "undefined"
  })
  .then((res) => {
    console.log(res); // undefined - 1sec
    return sleep(500); // вернем новый промис в след "зен"
  })
  .then((res) => { // 500 - 0.5sec
    console.log(res);
  });

//  Способ чтобы избежать "undefined":

/*
sleep(1000)
  .then((res) => {
    console.log(res); // 1000
    return res; // Теперь передаём `1000` дальше (способ...)
  })
  .then((res) => {
    console.log(res); // 1000
    return sleep(500);
  })
  .then((res) => {
    console.log(res); // 500
  });
  -----------------------------------------------------------------------------------------------------------------------------------------
  - Цепочка промисов:
  sleep(1000) // возвращает "зарезолвленный" промис
    .then((pr1) => { // сюда попадет то значение которым промис "зарезолвился"
        console.log(res) // 1000 - 1 sec
        return pr1 // чтобы не было ошибки вернем результат ("зен" возвращает новый промисс)
    })
    .then((pr1) => {
        console.log(pr1)
        return sleep(500) // можем вернуть как промис, так и вызов функции которая возвращает промис
    })
    .then((pr2) => {
        console.log(pr2)
    })
-----------------------------------------------------------------------------------------------------------------------------------------
    Перепишите на синтакиси async await:
const fetch = async () => {
    const pr1 = await sleep(1000)
    console.log(pr1)

    const pr2 = await sleep(500)
    console.log(pr2)
}
fetch()
*/
// ---------------------------------------------------------------------------------------------------------------------------------------
// Перепишите на "Promise.all() + async await":
// возвращаем массив зарезолвленных промиссов - отправляем массив запросов, которые вернут промис:
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms))
}

// обязательно в функции
const fetchData = async () => {
  const promisesArr = await Promise.all([sleep(666), sleep(777)])
  promisesArr.forEach(pr => console.log(pr)) // 666 777
}
fetchData()
// ---------------------------------------------------------------------------------------------------------------------------------------
// Синтаксис на "Promise.all() + then()" вместо "асинк-евейт":
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms))
}

Promise.all([sleep(666), sleep(777)])
  .then((promisesArray) => {
    promisesArray.forEach(pr => console.log(pr))
  })
// ---------------------------------------------------------------------------------------------------------------------------------------
// Все способы + Typescript
const sleep = <T extends number>(ms: T): Promise<T> => {
  return new Promise(resolve => setTimeout(() =>  resolve(ms), ms))
}

// then:

// sleep(666)
//     .then((res) => {
//         console.log(res)
//         return res
//     })
//     .then((res) => {
//         return sleep(777)
//     })
//     .then((res2) => console.log(res2))

// Или короче с Promise.all():

// Promise.all([sleep(666), sleep(777)])
//     .then((promisesResultsArray) => {
//         promisesResultsArray.forEach(promise => console.log(promise))
//     })

// ----------------------------------------------------------------------------------------------------------------------------------------------
const fetchData = async () => {
  // const pr1 = await sleep(666)
  // console.log(pr1)

  // const pr2 = await sleep(777)
  // console.log(pr2)
// ----------------------------------------------------------------------------------------------------------------------------------------------
  // Или короче с Promise.all():
  const promisesArr = await Promise.all([sleep(666), sleep(777)])
  promisesArr.forEach(pr => console.log(pr))
}
fetchData()
