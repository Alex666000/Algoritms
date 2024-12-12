// За какое время выполняться add1() и add2()?
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000); //  2 сек.
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20); // 2 сек. тк вызов resolveAfter2Seconds() - пока "await" не выполниться,
  // интерпретатор дальше не поидет к след строке...
  const b = await resolveAfter2Seconds(30); // 2 сек. - Итог: 2 + 2 = 4 сек.
  return x + a + b;
}

async function add2(x) {
  // тут запускается без await значит одновременно полетят - как Promise.all()
  const promise_a = resolveAfter2Seconds(20);
  const promise_b = resolveAfter2Seconds(30);
  // с такои записью: (await promise_a) + (await promise_b); одновременно 2 промиса запустяться - будет 2 сек
  // такои синтаксис: return x + (await promise_a) + (await promise_b), переписать на Promise.all()...
  const promisesArray = await Promise.all(promise_a, promise_b)
  //ИЛИ: const promisesArray = await Promise.all(resolveAfter2Seconds(20),resolveAfter2Seconds(30))
  return x + nums[0] + nums[1];
  // return x + (await promise_a) + (await promise_b)
}

add1(10).then(console.log);
add2(20).then(console.log);
