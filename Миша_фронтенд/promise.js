function myPromiseRace(promisesArray) {
  // ТВОЙ КОД ЗДЕСЬ
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      promise.then(resolve).catch(reject)
    })
  })
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise1 resolved'), 300);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise2 resolved'), 200);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('promise3 rejected'), 100);
});

const result = myPromiseRace([
  promise1,
  promise2,
  //promise3
])
  .then(result => console.log(result))
  .catch(err => console.error(err));
