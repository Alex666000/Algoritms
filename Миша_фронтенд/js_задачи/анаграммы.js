// Анаграммы анограммы: const words = ["listen", "silent", "enlist", "abc", "cab", "bca", "xyz", "yxz", "zxy", "hello"];
const getAnagrams = (arr) => {
  const mapa = {};

  arr.forEach((el) => {
    // Приводим слово к нижнему регистру, сортируем символы
    const sortedWord = el.toLowerCase().split('').sort().join('');
    console.log(sortedWord)

    // Группируем слова в массивы
    if (mapa[sortedWord]) {
      mapa[sortedWord].push(el);
    } else {
      mapa[sortedWord] = [el];
    }
  });

  // Преобразуем в массив, сортируем по длине и возвращаем только массивы слов
  return Object.values(mapa).sort((a, b) => a.length - b.length);
};

// Пример использования
const words = ['гора', 'рак', 'акр', 'пора', 'рога', 'ирак', 'игра'];
console.log(getAnagrams(words));

