// There are requirements for this looping behavior:
// 1. Must be a conditional type
// 2. Input must be a union type (something that extends)
// 3. Type before the extends keyword must come from the type parameter, it can't be a hand-written type

type ResultWithoutNever = '1' | '2' | never | '3';

type ExcludeFromUnion<T, U> = T extends U ? never : T;

type Result = ExcludeFromUnion<'a' | 'b' | 'c' | 'd', 'a'>;
// Distributive:
// ('a' extends 'a' ? never: 'a') |
// ('b' extends 'a' ? never: 'b') |
// ('c' extends 'a' ? never: 'c') |
// ('d' extends 'a' ? never: 'd') |

type Check = 'a' | 'b' | 'c' | 'd' extends 'a' ? 'yes' : 'no';
type Check2<T> = T extends 'a' ? 'yes' : 'no';

type Result2 = Check2<'a' | 'b' | 'c' | 'd'>;

type ChooseProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Person = {
  name: string;
  age: number;
  country: string;
  hobby: string;
  friends: string[];
};

type PersonName = ChooseProperties<Person, 'name' | 'age' | 'hobby'>;

type RemoveProperties<T, K extends keyof T> = {
  [P in ExcludeFromUnion<keyof T, K>]: T[P];
};

type PersonWithoutFriends = RemoveProperties<Person, 'friends'>;
