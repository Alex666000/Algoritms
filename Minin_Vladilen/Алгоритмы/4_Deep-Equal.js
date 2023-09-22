/*
### Deep Equal
Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра как на тип так и на значение:
 */

function deepEqual(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) { // разберемся сначала с задачей: console.log(deepEqual(NaN, NaN)); // -> true
        return true;
    }

    if (typeof a !== typeof b) {
        return false;
    }

    if (typeof a !== "object" || a === null || b === null) { // если это не объекты то
        return a === b;
    }

    if (Object.keys(a).length !== Object.keys(b).length) { // количество ключеи совпадают?
        return false;
    }

    for (const key of Object.keys(a)) {
        if (!deepEqual(a[key], b[key])) { // рекрсивно идем по ключам обьекта
            return  false
        }
    }

    return  true
}

const source = {a: 1, b: {c: 1}};
// ------------------------------
const test1 = {a: 1, b: {c: 1}};
const test2 = {a: 1, b: {c: 2}};


console.log(deepEqual(source, test1)); // -> true
console.log(deepEqual(source, test2)); // -> false
console.log(deepEqual(NaN, NaN)); // -> true
console.log(deepEqual("test", "test!")); // -> false
console.log(deepEqual()); // -> true
/*
- несмотря что все значения у объектов одинаковые - у них разные указатели у объектов на область памяти... переменные это указатели...
- Object.keys -- возвращает массив ключей
 */
