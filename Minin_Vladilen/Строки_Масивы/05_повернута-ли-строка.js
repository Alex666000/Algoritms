/*
### Повернута ли строка?
Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.
 */

function isStringRotated(source, test) {
    if (source.length !== test.length) {
        return false;
    }

    for (let i = 0; i < source.length; i++) {
        const rotate = source.slice(i, source.length) + source.slice(0, i); // получим все возможные повернутые состояния

        if (rotate === test) {
            return true;
        }
    }

    return false;
}

// 2 способ
function isStringRotated(source, test) {
    return (source + source).includes(test) && source.length === test.length; // includes() - проверяет есть ли в строке подстрока которую ищем
}


console.log(isStringRotated("javascript", "scriptjava")); // -> true
console.log(isStringRotated("javascript", "iptjavascr")); // -> true
console.log(isStringRotated("javascript", "java")); // -> false
