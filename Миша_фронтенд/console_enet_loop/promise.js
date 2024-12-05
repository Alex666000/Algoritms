// 1 ЗАДАЧА : ---------------------------------------------------------------
const promise = new Promise((resolve) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
  console.log(4);
});

console.log(3);
// 1 2 3 timerStart timerEnd success 4
// когда промисс зарезолвится только потом отработает then
// 2 ЗАДАЧА : ---------------------------------------------------------------
const promise = new Promise((resolve) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

// 1 2 4 timerStart timerEnd success
// -----------------------------------------------------
// 3 задача:
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve(console.log(5)).then(() => console.log(6));

setTimeout(() => console.log(7));

console.log(8);
/*
1 5 8 3 6 2 7 4 - макротаска в микротаске выполнится самои последнеи после остальных макротасок
 */
// -----------------------------------------------------
// 4 задача:
const run = () => {
    setTimeout(() => {
        console.log('timeOut');
    }, 0);
};

console.log(1);

new Promise((resolve) => {
    console.log('Promise');
    setTimeout(() => {
        console.log('777');
        resolve();
    }, 0);
})
    .then(() => {
        console.log('then1');
    })
    .then(() => {
        console.log('then2');
    });

console.log(4);

setTimeout(() => {
    console.log('timeOut2');
}, 0);

// // 1 Promise 4 timeOut 777 then1 then2 timeOut2
// --------------------------------------------------
console.log(1);
setTimeout(() => console.log(2));
Promise.reject(3).catch(console.log); // микрозадача
Promise.resolve(5).then(() => setTimeout(() => console.log(8), 0)); // макро внутри микро
console.log(6);
setTimeout(() => console.log(7), 0);

// 1 6 3 2 7 8
// Макрозадачи выполняются в том порядке, в котором они были добавлены в очередь.
// Макрозадача для console.log(7) была добавлена до того, как в микрозадаче добавилась макрозадача для console.log(8).
// ---------------------------------------------------------------------
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
// Ответ: 1 7 3 5 2 6 4
/*
макро-в микро: Promise.resolve().then(() => setTimeout(() => console.log(4))) - в конце
 */
// ---------------------------------------------------------------------













// ---------------------------------------------------------------------







// ---------------------------------------------------------------------







// ---------------------------------------------------------------------







