const str = 'Привет как Дела' // Порядок слов оставить на месте а строку перевернуть
// [ 'тевирП', 'как', 'алеД' ]

const reversedStr = (str) => {
  const strInArray = str.split(' ')

  return strInArray.reduce((acc, wordStr) => {
    const reverserWordStr = wordStr.split('').reverse().join('')
    acc.push(reverserWordStr)

    return acc
  }, [])
}

console.log(reversedStr(str))

