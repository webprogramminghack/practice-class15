type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// type PersonKeys = 'name' | 'age';

function getValue(person: Person, key: keyof Person) {
  return person[key];
}

const age = getValue('age', { name: 'John', age: 30 });

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type NumberArray = number[]; // this is actually shorthand for Array<number>
type B = keyof NumberArray; // this also take built-in properties like 'length' etc

type Mapish = { [k: string]: boolean };
type C = keyof Mapish;
// Notice that C is string | number
// that's because in JavaScript, object keys are always coerced to strings (even if they are numbers)
// we can do this and it will work
const mapish: Mapish = { 1: true };
// that works because 1 is coerced to '1'

type Person2 = {
  name: string;
  age: number;
  isProgrammer?: boolean;
};

type Person2Keys = keyof Person2;

function getValue2(key: keyof Person2, person: Person2) {
  return person[key];
}

const age2 = getValue2('isProgrammer', { name: 'John', age: 30 });
