// 1) Создать функцию, которая принимает строку и преобразовывает каждую первую букву строки в заглавную и возвращает преобразованную строку

// Вход: "How can mirrors be real if our eyes aren't real"

// Выход: "How Can Mirrors Be Real If Our Eyes Aren't Real"

function capitalizeFirstLetter(str) {
  return str
    .split(' ') // Разделяем строку на массив слов
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Преобразуем каждое слово
    .join(' '); // Объединяем массив слов обратно в строку
}

const input = "How can mirrors be real if our eyes aren't real";
const output = capitalizeFirstLetter(input);

console.log(output); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
