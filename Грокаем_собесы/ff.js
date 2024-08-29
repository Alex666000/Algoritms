// 2) Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона.
//
//   Пример
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])  // =>  "(123) 456-7890"

function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
    throw new Error('Array must contain exactly 10 numbers');
  }

  const part1 = numbers.slice(0, 3).join('');
  const part2 = numbers.slice(3, 6).join('');
  const part3 = numbers.slice(6, 10).join('');

  return `(${part1}) ${part2}-${part3}`;
}

const phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber);  // => "(123) 456-7890"

// 2 способ:
const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const phoneNumber = createPhoneNumber(phoneNumberArray);
// console.log(phoneNumber); '(123) 456-7890'

(() => {
  function createPhoneNumber(numbers) {
    let phoneMask = '(XXX) XXX-XXXX';
    numbers.forEach(number => phoneMask = phoneMask.replace('X', number));
    return phoneMask;
  }
  console.log('createPhoneNumber:', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
})();

/*
numbers.slice(0, 3).join(''):

slice(0, 3): Извлекает первые три элемента массива (элементы с индексами 0, 1 и 2).
join(''): Объединяет эти элементы в строку без разделителя.
numbers.slice(3, 6).join(''):

slice(3, 6): Извлекает элементы с индексами 3, 4 и 5.
join(''): Объединяет эти элементы в строку без разделителя.
numbers.slice(6, 10).join(''):

slice(6, 10): Извлекает элементы с индексами 6, 7, 8 и 9.
join(''): Объединяет эти элементы в строку без разделителя.
Затем объединяем все три части в нужный формат с помощью шаблонной строки `(${part1}) ${part2}-${part3}`.

Этот код гарантирует, что массив чисел будет преобразован в строку в виде номера телефона с форматом "(123) 456-7890".
 */
