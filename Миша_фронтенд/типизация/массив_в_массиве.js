// Типизируй это:
const array = [1, [2, [3]], [4, 5]];

// Решение:
type NestedArray = number | NestedArray[];

const array: NestedArray = [1, [2, [3]], [4, 5]];
/*
Объяснение:
NestedArray — это рекурсивный тип, который говорит, что элемент может быть либо числом (number), либо массивом из таких же элементов (NestedArray[]).
array — это переменная, типизированная как NestedArray, которая соответствует заданной структуре.
Теперь массив может содержать числа на любом уровне вложенности.
 */

// Что будет в Result какои тип?

// type ExampleType = {
//   Field1: string;
//   Field2: string;
//   Field3: number;
//   Field4: boolean;
// };
//
// type T1<S, T> = { [K in keyof S]: S[K] extends T ? K : never }[keyof S];
// type Result = T1<ExampleType, string>;

/*
type ExampleType = {
  Field1: string;
  Field2: string;
  Field3: number;
  Field4: boolean;
};

type T1<S, T> = { [K in keyof S]: S[K] extends T ? K : never }[keyof S];
type Result = T1<ExampleType, string>;

type Result = "Field1" | "Field2"; - never убирается и остается только юнион тип: "Field1" | "Field2"
 */

// Задача 3:
// Протипизируй чтобы тут console_enet_loop.log(getProperty(X, 'm')); ТС ругался на ключи которых нет в: const X = { a: 1, b: 2, c: 3, d: 4 }:
// const X = { a: 1, b: 2, c: 3, d: 4 };
//
// function getProperty(obj, key) {
//   return obj[key];
// }
//
// console_enet_loop.log(getProperty(X, 'a')); // 1
// console_enet_loop.log(getProperty(X, 'm')); // undefined

// Решение:
// const X = { a: 1, b: 2, c: 3, d: 4 };
//
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// console_enet_loop.log(getProperty(X, 'a')); // 1
// console_enet_loop.log(getProperty(X, 'm')); // undefined

