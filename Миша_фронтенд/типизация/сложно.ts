// Что будет записано в  type Result?
type ExampleType = {
  Field1: string;
  Field2: string;
  Field3: number;
  Field4: boolean;
}

type T1<S, T> = { [K in keyof S]: S[K] extends T ? K : never }[keyof S];

// type Result = T1<ExampleType, string>
