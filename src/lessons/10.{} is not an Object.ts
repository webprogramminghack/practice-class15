type TransformValuesToString<T extends {}> = {
  [K in keyof T]: string;
};

type MyObject = {
  name: string;
  age: number;
};

type NewObject = TransformValuesToString<MyObject>;
type NewObject2 = TransformValuesToString<'hello'>;
type NewObject3 = TransformValuesToString<123>;
type NewObject4 = TransformValuesToString<null>;
type NewObject5 = TransformValuesToString<undefined>;

// in typescript, {} is not an Object, but anything except undefined & null
type WithoutNullAndUndefined<T> = T & {};
type Result = WithoutNullAndUndefined<string | undefined>;

type TransformValuesToString2<T extends Object> = {
  [K in keyof T]: string;
};

type NewObject6 = TransformValuesToString<MyObject>;
type NewObject7 = TransformValuesToString<'hello'>;
type NewObject8 = TransformValuesToString<123>;

type ObjectType = {
  [P in any]: any;
};

type TransformValuesToString3<T extends ObjectType> = {
  [K in keyof T]: string;
};

type NewObject9 = TransformValuesToString3<MyObject>;
type NewObject10 = TransformValuesToString3<'hello'>;
type NewObject11 = TransformValuesToString3<123>;
