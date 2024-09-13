function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

function loggingIdentity2<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

function getProperty<Type, Key extends keyof Type>(
  obj: Type,
  key: Key
): Type[Key] {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
getProperty(x, 'e');

const makeGetElementById = <TElement extends HTMLElement>(
  id: string
): TElement | null => {
  return document.getElementById(id) as TElement | null;
};

const app = makeGetElementById<HTMLDivElement>('app');

// unnecessary use of extends
function getLength<T extends any>(arr: T[]): number {
  return arr.length;
}

// another example where extends is unnecessary
function getFirstItem<T extends number[]>(arr: T): T[0] {
  return arr[0];
}

const firstItem = getFirstItem([1, 2, 3]);

// this is the correct approach
function getFirstItem2(arr: number[]): number {
  return arr[0];
}

const firstItem2 = getFirstItem2([1, 2, 3]);

// sometimes we know better than typescript
const getObjectKeys = <TObj extends {}>(obj: TObj): Array<keyof TObj> => {
  return Object.keys(obj) as Array<keyof TObj>;
};

let obj = { a: 1, b: 2, c: 3, d: 4 };
const keys = getObjectKeys(obj);

type ObjectType<K extends keyof any> = {
  [P in K]: number | string;
};

function sortByProperty<T extends ObjectType<K>, K extends keyof T>(
  items: T[],
  property: K
): T[] {
  return items.sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
}

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 1, name: 'Smartphone', price: 499 },
  { id: 1, name: 'Tablet', price: 299 },
];

const sortedProducts = sortByProperty(products, 'price');
