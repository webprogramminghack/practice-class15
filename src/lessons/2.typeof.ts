// this is what we usually do in javascript
console.log(typeof 1);

const person = {
  name: 'John',
  age: 30,
};

// it has another function in typescript which is to get the type of a variable
const people: (typeof person)[] = [];

people.push(person);
people.push({ name: 'Jane', age: 25 });

// we can also get the type of a function
function greet(name: string) {
  return `Hello, ${name}`;
}

type FuncType = typeof greet;
// you can't do this
type FuncType2 = typeof greet('John');
