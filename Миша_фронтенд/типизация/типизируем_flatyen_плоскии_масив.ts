// ответ:
const array: ArrayType = [1, [2, [3]], 4, 5];

type ArrayType = Array<number> | [number, [number] | ArrayType]

// 42 - рекурсивный тип: https://www.youtube.com/watch?v=DEP_9rrIVWk&list=PLIpOJPtzllpM-mzxXSF4npTEl7AE3dsa7&index=13


