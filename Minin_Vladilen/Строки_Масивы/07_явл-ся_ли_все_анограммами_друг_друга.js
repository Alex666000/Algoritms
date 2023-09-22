/*
### Анаграммы
Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.
Те же символы только в разном порядке
 */

function allAnagrams(array) {
    const sorted = array.map(str => str.split("").sort().join(""));

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[0]) {
            return false;
        }
    }

    return true;
}

// 2 способ
function allAnagrams(array) {
    const sorted = array.map(str => str.split("").sort().join(""));
    return sorted.every(str => str === sorted[0]);
}

console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false


/*
- sort() - приводит в нужный порядок все символы
- join('') -- обратно превращаем строку в масив
- str.split('') - строку приводим к масиву
 */
