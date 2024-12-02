// https://www.youtube.com/watch?v=hkrmyIecHR0&t=1703s 25 min
function fetchUrl(url) {
  console.log(`fetching ${url}...`, this.firstName);
};

const user = {
  firstName: 'Bob'
};

const __debounce = (callback, delay) => {
  let timer = null

  if (timer) {
    clearTimeout(timer)
  }
  return (...args) => {
    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

//Или не биндить а превратить в стрелочную функцию fetchUrl
const fetching = __debounce(fetchUrl.bind(user), 300); // отменяются предыдущие вызовы и выполняется только последний, по задержке

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);

/*
2 задача - на replit.com
import React, { useState } from "react";

const initList = () => {
  return Array.from({ length: 200 }, (_el, index) => ({
    value: Math.random(),
    label: `row ${index + 1}`,
  }));
}

export default function App() {
  const [list] = useState(() => initList());

  const handleUpdate = () => {
    list[0].value = Math.random();
  };

  return (
    <div>
      <h1>List App</h1>
      <Button onClick={handleUpdate}>Update row 1</Button>
      {list.map(({ label, value }) => (
        <Row label={label} value={value} />
      ))}
    </div>
  );
}

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const Row = ({ label, value }) => (
  <div>
    {label}: {value}
  </div>
);
 */

/*
задача 3 -  Проитись по всеи этой структуре и собрать values

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {value: 3}
      ],
    },
    {
      value: 4,
      children: [
        {value: 5},
        {value: 6},
      ],
    },
  ]
}
// 1 способ: через стэк
function getTreeValues() {
  // объект кладем в массив (стэк) - Стек используется для хранения узлов, которые еще предстоит обработать.
  const stack = [tree]
  const result = []

  // Запускаем цикл while, который будет работать до тех пор, пока стек не станет пустым
  while(stack.length > 0) {
    // node - последний элемент массива
    // В каждой итерации извлекаем последний элемент из стека с помощью pop(). Это позволяет нам обрабатывать узлы в порядке, аналогичном обходу в глубину
    const node = stack.pop()

    // Проверяем, есть ли у текущего узла свойство value
    if (node.value !== undefined) {
      result.push(node.value)
    }

    // Проверяем, есть ли у текущего узла дочерние элементы (children). Если дочерние элементы существуют, добавляем их в стек
    // с помощью stack.push(...node.children). Распаковка (...) добавляет каждый дочерний элемент по отдельности
    if (node.children?.length) {
      stack.push(...node.children)
    }
  }

  return result.sort()
}

// 2 способ: рекурсией
function getTreeValues2(node) {
  // Инициализируем результат для хранения значений
  const result = [];

  // Внутренняя рекурсивная функция для обхода дерева
  function traverse(node) {
    // Добавляем значение узла в результат
    if (node.value !== undefined) {
      result.push(node.value);
    }

    // Если есть дочерние узлы, рекурсивно обходим их
    if (node.children?.length) {
      node.children.forEach(child => traverse(child));
    }
  }

  // Запускаем обход с корневого узла
  traverse(node);

  // Возвращаем результат
  return result;
}


console_enet_loop.log(getTreeValues(tree)) // => [1, 2, 3, 4, 5, 6]
console_enet_loop.log(getTreeValues2(tree)) // => [1, 2, 3, 4, 5, 6]
 */







