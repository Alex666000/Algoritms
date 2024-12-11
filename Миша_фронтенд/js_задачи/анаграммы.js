// Анаграммы — это слова или фразы, составленные из одних и тех же букв, но в другом порядке.
// Например:
// "рак" и "акр" — это анаграммы.
// "listen" и "silent" — это тоже анаграммы.
const getAnagrams = (arr) => {
  const mapa = {};

  arr.forEach((word) => {
    // Приводим слово к нижнему регистру, сортируем символы
    const sortedWord = word.toLowerCase().split('').sort().join('');

    // Группируем слова в массивы
    if (mapa[sortedWord]) {
      mapa[sortedWord].push(word);
    } else {
      mapa[sortedWord] = [word];
    }
  });
  console.log(Object.values(mapa))
  // Преобразуем в массив, сортируем по длине и возвращаем только массивы слов
  return Object.values(mapa).sort((a, b) => a.length - b.length);
};

// Пример использования
const words = ['гора', 'рак', 'акр', 'пора', 'рога', 'ирак', 'игра'];
console.log(getAnagrams(words));

