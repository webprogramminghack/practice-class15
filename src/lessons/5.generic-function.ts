// let's say we have a function that gets the second item of an array of numbers
function getSecondItem(arr: number[]): number {
  return arr[1];
}

const result = getSecondItem([1, 2, 3]);

// but what if we want to get the second item of an array of strings?
// we might think of creating another function
function getSecondItem2(arr: string[]): string {
  return arr[1];
}

const result2 = getSecondItem2(['a', 'b', 'c']);

// that's redundant

//so we might think of doing this
function getSecondItem3(arr: (string | number)[]): string | number {
  return arr[1];
}

const result3 = getSecondItem3(['a', 'b', 'c']);
const result4 = getSecondItem3([1, 2, 3]);
// the problem is the result will have a type of string | number
// not to mention that we continuously need to change the type of the parameter
// for example if we want the function to also support boolean
const result5 = getSecondItem3([true, false, true]); // error

// so we might think of doing this
function getSecondItem3(arr: any[]): any {
  return arr[1];
}
// now it supports an array of any type, but return is also of any type
const result6 = getSecondItem3(['a', 'b', 'c']);
const result7 = getSecondItem3([1, 2, 3]);
const result8 = getSecondItem3([true, false, true]); // no error

// that's where generic function comes to the rescue
function getSecondItem4<Type>(arr: Type[]): Type {
  return arr[1];
}

// now it supports an array of any type, but the return is of the same type as the array items
const result6 = getSecondItem4(['a', 'b', 'c']);
const result7 = getSecondItem4([1, 2, 3]);
const result8 = getSecondItem4([true, false, true]); // no error

// the generic variable can be named anything
function getSecondItem5<T>(arr: T[]): T {
  return arr[1];
}

// there are various ways to write a generic function

// 1st way to write a generic function
function identity1<Type>(arg: Type) {
  return arg;
}

// 2nd way to write a generic function
const identity2 = <Type>(arg: Type): Type => arg;

// 3rd way to write a generic function
type IdentityFunction = <Type>(arg: Type) => Type;

const identity3: IdentityFunction = (arg) => arg;

let output = identity1('myString');
let anotherOutput = identity1<number>('myString');

// we can also write the generic type as a call signature of an object literal type
type IdentityFunction2 = {
  <Type>(arg: Type): Type;
};
let identity4: IdentityFunction2 = (arg) => arg;
let output2 = identity4(123);

// or we can write it as a generic interface
interface IdentityFunction3 {
  <Type>(arg: Type): Type;
}
let identity5: IdentityFunction3 = (arg) => arg;
let output3 = identity5(true);

// we can also move the generic parameter to be a parameter of the whole interface
interface IdentityFunction4<Type> {
  (arg: Type): Type;
}
let identity6: IdentityFunction4<number> = (arg) => arg;
let output4 = identity6(123);

// another example
function loggingIndentity<Type>(arg: Type): Type {
  console.log(arg.length); // Error: Property 'length' does not exist on type 'Type'.
  return arg;
}

function loggingIndentity2<Type>(arg: Type[]): Type[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

// example of using generic function
function getFirstItem<Type>(arr: Type[]): Type {
  return arr[0];
}

const str = getFirstItem(['a', 'b', 'c']);
const num = getFirstItem([1, 2, 3]);

// let's say we want to get an input element with a class of 'input'
const input = document.querySelector('.input')!;
// the problem is that the querySelector method returns an Element object
// so it can be div, span, input, etc, and since it doesn't know what type of element is returned
// it chose to return the most general type which is Element
console.log(input.value); // Error: Property 'value' does not exist on type 'Element'.

// the querySelector method is actually a generic function
// so we can do this to solve the problem
const input2 = document.querySelector<HTMLInputElement>('.input')!;
console.log(input2.value); // no error since value is a property of HTMLInputElement

// this is why I prefer to use querySelector since getElementById is not a generic function
const app = document.getElementById<HTMLDivElement>('app')!;

function identity7<T>(arg: T) {
  return arg;
}

let result10 = identity7('hello');
