type ObjectType<K extends keyof any, T> = {
  [P in K]: T;
};

type Person = {
  name: string;
  age: number;
};

type PeopleGroupByName1 = {
  [index: string]: Person[];
};

type PeopleGroupByName2 = Record<string, Person[]>;

// cara lama
type AddPrefix1<O extends { [key: string]: any }, Prefix extends string> = {
  [P in keyof O as P extends string ? `${Prefix}${P}` : P]: O[P];
};

type UserWithPrefix1 = AddPrefix1<Person, 'user_'>;

// cara baru
type AddPrefix2<O extends Record<string, any>, Prefix extends string> = {
  [P in keyof O as P extends string ? `${Prefix}${P}` : P]: O[P];
};

type UserWithPrefix2 = AddPrefix2<Person, 'user_'>;

// you can't use record if you want to make data model
type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

const User3: Record<string, any> = {
  id: 1, // any
  firstName: 'John', // any
  lastName: 'Doe', // any
  age: 30, // any
};

type User2 = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  [key: string]: any;
};

const user: User2 = {
  id: 1, // number
  firstName: 'John', // string
  lastName: 'Doe', // string
  age: 30, // number
  occupation: 'programmer', // any
};
