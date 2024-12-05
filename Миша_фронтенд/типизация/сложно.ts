// Что будет записано в  type Result?
// 43 - https://www.youtube.com/watch?v=DEP_9rrIVWk&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=13
type ExampleType = {
  Field1: string;
  Field2: string;
  Field3: number;
  Field4: boolean;
}

// type T1<S, T> = { [K in keyof S]: S[K] extends T ? K : never }[keyof S];
type T1<ExampleType, string> = { [K in keyof ExampleType]: ExampleType[K] extends 'string' ? K : never }[keyof ExampleType]; // циклом по ключам и
// возвращаем итоговыи тип в Result

type Result = T1<ExampleType, string> // вызов

// --------------------------------------------------------------------------------
/* Краткое обьяснение ответа (как работает): "то что дало true возвращаем в итоговый ответ и type Result"
- После 1 итерации по ключам (проверяем первый ключ "Field1") в итоговыи тип Result ВОЗВРАЩАЕМ строку: 'Field1' (тк у обьекта ключи это строки)
- После 2 итерации по ключам (проверяем первый ключ "Field2") в итоговыи тип Result ВОЗВРАЩАЕМ строку: 'Field2' (тк у обьекта ключи это строки)
- После 3 итерации по ключам (проверяем первый ключ "Field3") в итоговыи тип Result ВОЗВРАЩАЕМ строку: never (у ничего нельзя взять )
- После 4 итерации по ключам (проверяем первый ключ "Field4") в итоговыи тип Result ВОЗВРАЩАЕМ строку: never (у ничего нельзя взять [keyof ExampleType])
Ответ: "Field2" | "Field1"
 */

/*
- Цикл по ключам "K in keyof S" - "keyof S" — это все ключи типа S, то есть: keyof ExampleType = "Field1" | "Field2" | "Field3" | "Field4"(без их значений!)
Мы перебираем каждый ключ в цикле с помощью конструкции [K in keyof S].
- Проверка S[K] extends T: На каждом шаге проверяется, является ли тип значения ключа S[K] подтипом типа T (здесь T = string).
Если да, возвращается ключ K (например, Field1). Если S[K] не соответствует T: возвращается тип never.
- На выходе из цикла мы получаем объект типа, где: Ключи соответствуют исходным ключам S (то есть из ExampleType),
Значения: K, если тип поля соответствует T (здесь string), never, если не соответствует.
- [keyof S]:
После создания объекта [K in keyof S], мы берем объединение всех значений этого объекта: { [K in keyof S]: ... }[keyof S]
Это означает:
Собрать значения для всех ключей S
-  Объединение значений:
[keyof S] берет объединение значений: "Field1" | "Field2" | never | never
Убираем never, так как это несуществующий тип.
Итоговое объединение: "Field1" | "Field2"

- Для каждого ключа выполняется проверка S[K] extends string.
Ключ	Тип значения (S[K])	Проверка (S[K] extends string)	Итоговое значение
Field1	string	true	"Field1"
Field2	string	true	"Field2"
Field3	number	false	never
Field4	boolean	false	never
Ответ: "Field2" | "Field1"
 */
