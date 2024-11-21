// =====================================================================================================================
const promisePromiseAll = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
    // reject('some error')
  }, 100)
}).then((res) => console.log(res), (error) => {
  console.log(res)
})


