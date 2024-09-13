// infer is built for conditional types
// you can't use in other types
const sumFunc = (a: number, b: number) => a + b;

const someObj = {
  name: 'John',
  age: 30,
};

type GetReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type FunctionType = typeof sumFunc;

type Result = GetReturnType<FunctionType>;
type Result2 = GetReturnType<number>;

type ObjectType = {
  [P in any]: any;
};

type TransformValues<T extends ObjectType> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : T[K];
};

type MyObject = {
  name: string;
  getAge: () => number;
};

type Transformed = TransformValues<MyObject>;

type ReturnTypeOfPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

async function fetchData() {
  // simulating an API call
  return { name: 'John', age: 30 };
}

type DataType = ReturnTypeOfPromise<ReturnType<typeof fetchData>>;

type Person = {
  'key-id': string;
  'key-name': string;
  'key-age': number;
};

// using infer to remove prefix
type RemovePrefix<Obj extends { [K in any]: any }, Prefix extends string> = {
  [P in keyof Obj as P extends `${Prefix}${infer U}` ? U : P]: Obj[P];
};

type NewPerson = RemovePrefix<Person, 'key-'>;
