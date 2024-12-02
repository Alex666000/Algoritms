/*
Дерево - рекурсивная структура данных - где каждый узел также дерево - но для каждого дерева каждый узел является поддеревом
обоити каждый узел и посчитать сумму значений  который ърани каждый из узлов
 */
const tree = [ // Дерево с неограниченным кол-вом детей
    {
        v: 5, // значение узла
        c: [ //  узел или "лист" (Поддерево) - каждый является ребенком
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]
// 1 способ обхода дерева - рекурсивный
const recursive = (tree) => {
    let sum = 0; // значение суммы
    tree.forEach(node => { // тк дерево массив узлов (листьев)
        sum += node.v // на каждой итерации добавляем значение, которое хранится в конкретном узле
        // случай выхода из рекурсии чтобы колстек не переполнился,
        // в нашем случае это условие при котором узел не имеет потомков
        if(!node.c) {
            return node.v
        }
        sum += recursive(node.c) // к сумме добавляем результат выполнения этой же функции
        // но параметром передаем детей каждого узла
        // эта функция вернет сумму - каждая вызванная функция будет суммироваться в одну переменную
    })
    return sum
}

const iteration = (tree) => {
    if (!tree.length) {
        return 0
    }

    let sum = 0
    let stack = [] // Структура данных Стек - последним пришел первым вышел
    tree.forEach(node => stack.push(node)); // итерируемся по всем вершинам дерева -
    // те по самым корневым узлам и добавить их в этот стек
    while (stack.length) { // крутится будет до тех пор пока этот стек не пустой
        const node = stack.pop() // извлекаем узел который находится на вершине стека
        sum += node.v // к сумме добавляем значение которое находится в этом узле
        // если у узла есть дети тогда  пробегаемся по ним в цикле и добавляем каждый узел,
        // каждого ребенка данного рассматриваемого узла в стек
        // на одной из следующей итерации этот узел из стека вытащится, его дети также добавятся в этот стек
        // такой круговорот детей в стеке получается
        if (node.c) {
            node.c.forEach(child => stack.push(child))
        }
    }
    return sum
}
//

console.log(iteration(tree))
// console_enet_loop.log(recursive(tree))

/*
- Когда работаем с рекурсией, каждая вызванная функция внутри функции, добавляется в стек вызовом
тут мы работу стек вызовов сэмитируем
 */
