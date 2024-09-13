const a = new Set<string>();
a.add('hello');
a.add(123);

// as usual, generic type inference will try to infer the type from the argument
const b = new Set('hello');
b.add('world');
b.add(123);

const c = new Map<string, number>();
c.set('hello', 123);
c.set(123, 'world');

// as usual, generic type inference will try to infer the type from the argument
const d = new Map([['hello', 123]]);
d.set('world', 456);
d.set(123, 'world');

// we can create our own generic type
type APIResponse<TData> = {
  data: TData;
  isError: boolean;
};

// the difference is that the generic type is not automatically inferred so the type must be explicitly provided
const e: APIResponse = {
  data: {},
  isError: false,
};

// but we know that Set is a generic type, but why it doesn't require a type argument?
// and why new Set('hello'); will produce a Set<string>?
// this is what happens under the hood
// interface SetConstructor {
//   new <T = any>(values?: readonly T[] | null): Set<T>;
//   readonly prototype: Set<any>;
// }
// declare var Set: SetConstructor;

// However, you can do this
type UserResponse = APIResponse<{ name: string; age: number }>;

const f: UserResponse = {
  data: { name: 'John Doe', age: 30 },
  isError: false,
};

// know you know we can produce various types using a single generic type
// so besides UserResponse, we can also create PostResponse, CommentResponse, etc
// for example
type PostResponse = APIResponse<{ title: string; content: string }>;
type CommentResponse = APIResponse<{ author: string; content: string }>;
// you can also say that the generic type is a blueprint for other types
// of course you can also write it using interface
interface APIResponse2<TData> {
  data: TData;
  isError: boolean;
}

// you can provide the default type for the generic type
interface APIResponse3<TData = { status: number }> {
  data: TData;
  isError: boolean;
}

// so you can use it without providing the type
const g: APIResponse3 = {
  data: { status: 200 },
  isError: false,
};

// Do you know [] is a shorthand for Array<any>?
const numberArray1: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3];

const readonlyNumbers: readonly number[] = [1, 2, 3];
const readonlyNumbers2: ReadonlyArray<number> = [1, 2, 3];

// both are the same
type KeyOfArray1 = keyof number[];
type KeyOfArray2 = keyof Array<number>;

// we can use multiple type parameters in a generic type
type APIRequest<TRequest, TResponse> = {
  endpoint: string; // The URL endpoint of the API
  requestData: TRequest; // Data to be sent to the server
  processResponse: (response: TResponse) => void; // Function to process the received response
};

// Another example with different request and response types
type ProductRequest = {
  productId: number;
};

type ProductResponse = {
  productId: number;
  name: string;
  price: number;
  inStock: boolean;
};

// Create a type alias for a product details API request
type GetProductAPIRequest = APIRequest<ProductRequest, ProductResponse>;

// Promise is a generic interface
type APIResponseData<T> = {
  data: T;
  isError: boolean;
};

async function fetchData<T extends { id: number }>(
  url: string
): Promise<APIResponseData<T>> {
  const response = await fetch(url);
  const data = await response.json();

  // Assume the API returns data in the expected format
  return data;
}

fetchData<{ id: number; name: string }>(
  'https://api.example.com/products/1'
).then((data) => {
  console.log(data); // this has a data type of APIResponseData<{ id: number; name: string }>
});
