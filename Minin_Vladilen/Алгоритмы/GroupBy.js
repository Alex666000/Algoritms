/*
ОЧЕНЬ ЧАСТАЯ НА СОБЕСАХ!!!!!!!!!!!!!!!!
 */

function groupBy(array, fn) {
    const res = {};

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        const key = typeof fn === 'function' ? fn(current) : current[fn]

        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(current);
    }

    return res;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }
// console_enet_loop.log(groupBy(["one", "two", "three"], "length")); // -> { '3': ['one', 'two'], '5': ['three'] }

/*
Алгоритм решения таких задач:
-----------------------------------------------------------------------------------------------------------------
groupBy: функция возвращает объект где все систематизировано по какому-то признаку
- идем по упрощению не пытаться сделать все кеисы сразу - а поэтапно; добавлячем аргументы в функцию  к 1 кеису -
 function groupBy(array, fn) {

} и возвращаем из метода обьект:
function groupBy(array, fn) {
    const res = {} -- тут его будем наполнять

    return res
}


- Math.floor - округляем в меньшую сторону
 */
