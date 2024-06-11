// 1) Написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.  Гласными являются «a», «e», «i», «o», «u».
//
// Например:
//   Вход: morning
// Выход: 2

// 1 способ
/*
const countVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  // str.toLowerCase().split('') -> ['m', 'o', 'r','n', 'i', 'n','g']
  const vowResult = str.toLowerCase().split('').filter((char) => vowels.includes(char)) // тк фильтр возвращает новый массив то vowResult
  return vowResult.length

  // console.log(str.toLowerCase().split('').filter((char) => vowels.includes(char)))

}
const str = 'Morning'
console.log(countVowels(str))
*/

// 2 способ
/* const countVowels = (str) => {
  let count = 0

  const vowels = ['a', 'e', 'i', 'o', 'u']
  const strArr = str.toLowerCase().split('') //  ['m', 'o', 'r','n', 'i', 'n','g']

  strArr.forEach(char => {
    if (vowels.includes(char)) count++
  })

  return count
}

const str = 'Morning'
console.log(countVowels(str)) */

// 3 способ reduce через запятую начальное значение аккамулятора

const countVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return str.toLowerCase().split('').reduce((countSum, char) => {
    if (vowels.includes(char)) return countSum + 1
  }, 0)

  return str

}

const str = 'Morning'
console.log(countVowels(str))

/*
- приводим строку к нижнему регистру всегда когда работаем со строками так делать
- комп не знает какие буквы гласные а какие согласные - создадим массив и туда определим явно гласные и скажем компу что в этом массиве
 гласные буквы
 -
 */
