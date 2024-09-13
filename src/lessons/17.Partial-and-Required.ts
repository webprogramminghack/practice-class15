type Todo = {
  title: string;
  completed: boolean;
};

type PartialTodo = Partial<Todo>;
type RequiredTodo = Required<PartialTodo>;

type Person = {
  id?: string;
  name: string;
  hobby?: string;
  address: {
    street?: string;
  };
};

type RequiredPerson = Required<Person>;

type NewPerson = Required<Pick<Person, 'id'>> & Omit<Person, 'id'>;

type RequiredByKey<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]-?: T[P];
} & {
  [P in Exclude<keyof T, K>]: T[P];
};

type RequiredPersonById = RequiredByKey<Person, 'id'>;

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends { [P in any]: any }
    ? DeepRequired<T[P]>
    : Required<T[P]>;
};

type DeepRequiredPerson = DeepRequired<Person>;

const newPerson: DeepRequiredPerson = {
  id: '1',
  name: 'John',
  hobby: 'Coding',
  address: {
    street: '123 Main St',
  },
};
