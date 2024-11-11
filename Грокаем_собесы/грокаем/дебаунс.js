function fetchUrl(url) {
  console.log(`fetching ${url}...`, this.firstName);
};

const user = {
  firstName: 'Bob'
};

const __debounce = (callback, delay) => {
  let timer = null

  if (timer) {
    clearTimeout(timer)
  }
  return (...args) => {
    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

//Или не биндить а превратить в стрелочную функцию fetchUrl
// Биндим ссылку на функцию а не ее вызов
const fetching = __debounce(fetchUrl.bind(user), 300); // отменяются предыдущие вызовы и выполняется только последний, по задержке
