// «А Роза упала на лапу Азора»

const isPalindrome = (str) => {
  const oneStr = str.toLowerCase().split(' ').join('')

  const twoStr = oneStr.split(' ').reverse().join('')

  return oneStr === twoStr


  console.log(twoStr)
}

const str = '«А Роза упала на лапу Азора»'
console.log(isPalindrome(str))

/*
- 1 строка:
- потом скопируем строку 1 в стр 2
- приведем 2 стр в массив чтобы его развернуть
-
 */
