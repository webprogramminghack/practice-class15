type MyUnion = keyof any;
// this is specifically built for mapped types and constraints using keyof any

type MakeObject<K extends keyof any> = {
  [P in K]: any;
};

type MakeObject2<K extends string | number | symbol> = {
  [P in K]: any;
};

type Result1 = MakeObject<boolean>;
type Result2 = MakeObject<number[]>;
type Result3 = MakeObject<null>;
type Result4 = MakeObject<'hello'>;

type MakeObject3 = {
  [key: keyof any]: any;
};

type MakeObject4 = {
  [P in any]: any;
};

// mapped types
type MakeObject5 = {
  [P in string | number | symbol]: any;
};
// what happens under the hood
// index signatures
// type MakeObject5 = {
//   [x: string]: any;
//   [x: number]: any;
//   [x: symbol]: any;
// };

type ObjectExample = {
  [P in 'name' | 'age']: any;
};
// it's the same as
// intersect
// type ObjectExample = {
//   name: any;
// } & {
//   age: any;
// };

// Typescript does not allow the user of mapped types syntax
// interface Example3 {
//   [P in string | number]: any;
// }

// literal vs primitive types
type MakeObject7<K extends keyof any> = {
  [P in K]: any;
};

type Result5 = MakeObject7<'name' | 'age'>;
// the above produces normal property

type Result6 = MakeObject7<string | number>;
// the above produces index signatures

type Person = {
  id: number;
  name: string;
  age: number;
  123: string;
};

type MyObject = {
  [P in any]: any;
};

type AddPrefix<O extends MyObject> = {
  [P in keyof O as `key-${string & P}`]: any;
};

type APerson = AddPrefix<Person>;

type AddConditionalPrefix<O extends { [A in any]: any }> = {
  [P in keyof O as P extends string ? `key-${P}` : P]: O[P];
};

type NewPerson = AddConditionalPrefix<Person>;

type OmitPropertiesByType<
  O extends { [I in any]: any },
  U extends keyof any
> = {
  [P in keyof O as P extends U ? never : P]: O[P];
};

type NewPerson2 = OmitPropertiesByType<Person, number>;
