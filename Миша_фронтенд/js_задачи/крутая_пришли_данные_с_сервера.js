// Задачи к уроку 8
//
// 1) Есть массив объектов представляющих данные о разработчиках, которые подписались на участие в встрече по программированию
//
// Ваша задача — вернуть количество JavaScript-разработчиков, приезжающих из Европы .
//
//   Например, учитывая следующий список (пришел с сервера массив объектов - данные реальные!!!!!):
//   let list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];
//
// Ваша функция должна возвращать число 1.
//
// Если разработчиков JavaScript из Европы нет, ваша функция должна вернуть 0.


// РЕШЕНИЕ -------------------------------------------------------------------------------------------------------------------------------
const countEuropeDevs = (list) => {
  return list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length // filter вернет новый массив + его
  // длина === кол-во человек
}

  let list_1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

console.log(countEuropeDevs(list_1))

/*
- когда нужно что-то наити из массива то filter()
 */
