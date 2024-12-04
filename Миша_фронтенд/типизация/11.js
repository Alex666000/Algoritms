// типизировать с дженериками функцию
const sleep = (ms) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(ms), ms))
}

sleep(2000)
  .then(result => console.log('Success data:', result))
  .catch(error => console.log('Some error:', error))

// Решение:
// const sleep = <T extends number>(ms: T): Promise<T> => {
//   return new Promise((resolve, reject) => setTimeout(() => resolve(ms), ms))
// }
//
// sleep(2000)
//   .then(result => console.log('Success data:', result))
//   .catch(error => console.log('Some error:', error))
