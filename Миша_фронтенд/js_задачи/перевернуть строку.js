// split(): ---------------------------------------------------------------------------------------------------------------------------
// Если split() пустой без кавычек - то каждое словобудет в массиве: [ 'Привет' ] [ 'как' ] [ 'Дела' ]
// Сам ставит запятые, если укажем split('') - ставит между каждой буквой: [ 'П', 'р', 'и', 'в', 'е', 'т' ] [ 'к', 'а', 'к' ] -> word.split('') -без пробела
// Часто так с "реверсом" применяют: word.split('').reverse()
// str.split(' ') - сам ставит запятые между словами в массиве элементов из слов предложения: [ 'Привет', 'как', 'Дела' ]
// Если с запятой split(', ') то удалит запятые - тк указали разделитель удалить [ 'Привет как Дела' ]

// join(): ---------------------------------------------------------------------------------------------------------------------------
// join('') - без пробелов между буквами (словами): "тевирПкакалеД"
// join(' ') - ставит пробелы между буквами (словами): "тевирП как алеД"

const str = 'Привет как Дела' // Порядок слов оставить на месте а строку перевернуть
// 'тевирП 'как' 'алеД'

const reversedStr = (str) => {
  const strInArray = str.split(' ')

  return strInArray.reduce((acc, wordStr) => {
    const reverserWordStr = wordStr.split('').reverse().join('')
    acc.push(reverserWordStr)

    return acc
  }, [])
}

console.log(reversedStr(str))

