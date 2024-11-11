const promisePromiseAll = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
    // reject('some error')
  }, 100)
}).then((res) => console.log(res), (error) => {
  console.log(res)
})

// -----------------
// Задача - через сколько сек выполниться
function resolveAfter2Seconds(x) {
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
  /* переписал на Promise.all - это: return x + (await promise_a) + (await promise_b); */
  // const numsArray = await Promise.all([promise_a, promise_b])
  // return x + numsArray[0] + numsArray[1]
  return x + (await promise_a) + (await promise_b); // 2 за две сек: (await promise_a) + (await promise_b)
}

add1(10).then(console.log);
add2(20).then(console.log);
