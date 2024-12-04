// Что будет выводится в консоль и через какое время?
function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

sleep(1000)
  .then((res) => {
    console.log(res); // 1000 - 1sec
    // - тк явно не написали "return" чтобы передать дальше - в след then будет "undefined"
  })
  .then((res) => {
    console.log(res); // undefined - 1sec
    return sleep(500);
  })
  .then((res) => { // 500 - 0.5sec
    console.log(res);
  });
// Ответ:

//  Чтобы избежать undefined:
/*
sleep(1000)
  .then((res) => {
    console.log(res); // 1000
    return res; // Теперь передаём `1000` дальше
  })
  .then((res) => {
    console.log(res); // 1000
    return sleep(500);
  })
  .then((res) => {
    console.log(res); // 500
  });
*/

