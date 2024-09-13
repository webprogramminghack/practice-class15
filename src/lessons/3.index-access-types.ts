type Person = {
  name: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
};

const person: Person = {
  name: 'John',
  skillLevel: 'Expert',
};

function printSkillLevel(skillLevel: 'Beginner' | 'Intermediate' | 'Expert') {
  console.log(skillLevel);
}

printSkillLevel(person.skillLevel);

// you should do it like this:
function printSkillLevel(skillLevel: Person['skillLevel']) {
  console.log(skillLevel);
}

// we want to have this data structure:
type PeopleGroupedBySkillLevel = {
  [index: string]: Person[];
};

// this is the wrong approach
const groupBySkills1: PeopleGroupedBySkillLevel = {
  Beginner: [person],
  Intermediate: [person],
  Expert: [person],
  Master: [person],
};

type PeopleGroupedBySkillLevel = {
  [index in Person['skillLevel']]: Person[];
};

const groupBySkills2: PeopleGroupedBySkillLevel = {
  Beginner: [person],
  Intermediate: [person],
  Expert: [person],
};

// [number] will give us the type of the elements in the array
type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarArray = Car[];
type CarType = CarArray[number];

const a = ['hello', 'world', true];
type A = (typeof a)[number];

const myArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type MyArrayType = (typeof myArray)[number];

// do you remember that keyof produces a union type?

// we can get the type of the values using properties
type Employee = {
  name: string;
  age: number;
  salary: number;
};

// we can pass union types
type EmployeeValues = Employee['name' | 'age' | 'salary'];
// actually we can use keyof, and this is the correct approach
type EmployeeValues2 = Employee[keyof Employee];

const personArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type MyArrayValuesType =
  (typeof personArray)[number][keyof (typeof personArray)[number]];

// this is wrong
const key = 'age';
type Age = Employee[key];
// this is right
type key = 'age'; // we create a literal type
type Age2 = Employee[key]; // we use the literal type
