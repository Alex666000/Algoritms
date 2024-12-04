// Написать функцию sleep которая возвращает промис и выполнится через переданное кол-во милисекунд + типизировать ее
// const sleep = (ms) => {
//
// }

// Решение:
const sleep = (ms) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(ms), ms))
}

sleep(2000)
  .then(result => console.log('Success data:', result))
  .catch(error => console.log('Some error:', error))
