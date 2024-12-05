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
