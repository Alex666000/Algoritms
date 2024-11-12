// Дан массив слов array = [гора', 'раки', 'каир", рога', 'ирак', 'игра'],
// необходимо найти все слова "анаграммы" и вернуть массив анаграмм по возрастанию от количества повторений

const array = ['гора', 'раки', 'каир', 'рога', 'ирак', 'игра'];

const findAnagrams = (arr) => {
  const map = {};

  // Создаём ключи на основе отсортированных слов
  arr.forEach(word => {
    const sortedWord = word.split('').sort().join('');
    if (map[sortedWord]) {
      map[sortedWord].push(word);
    } else {
      map[sortedWord] = [word];
    }
  });

  // Получаем массив значений (групп анаграмм) и сортируем по количеству элементов
  const anagrams = Object.values(map).sort((a, b) => a.length - b.length);

  return anagrams;
};

console.log(findAnagrams(array));


