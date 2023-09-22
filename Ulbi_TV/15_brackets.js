function checkBrackets(str) {
    const stack = [];
    const map = {
        "{": "}",
        "(": ")",
        "[": "]"
    };

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];

        if (bracket === "(" || bracket === "{" || bracket === "[") {
            stack.push(bracket); // итерируемся пока не дошли до закр скобки
        } else {
            const lastEl = stack.pop(); // как дошли до закр скобки из стека достаем откр скобку
            if (bracket !== map[lastEl]) {
                return false;
            }

            if (!lastEl) { // если скобки уже в стеке нет - он пустой и одна закр скобка лишняя - то ФУНКЦИЮ ЗАВЕРШАЕМ и вернем false...
                return false;
            }
        }
    }
    // Если по всему циклу прошлись и нигде false не выбросился
    // окончание цикла тут проверяем путой ли стек
    if (stack.length) return false;
    return true;
}

console.log(checkBrackets("()[]{}")); // false

