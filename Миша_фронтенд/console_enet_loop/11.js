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

// 2: ---------------------------------------------------------------
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
