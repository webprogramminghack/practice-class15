type Notification<TypeName extends string, Payload> = {
  type: TypeName;
  payload: Payload;
};

type EmailNotification = {
  recipientEmail: string;
  subject: string;
  body: string;
};

type SMSNotification = {
  recipientPhoneNumber: string;
  message: string;
};

type PushNotification = {
  deviceId: string;
  title: string;
  content: string;
};

type EmailNotificationType = Notification<'email', EmailNotification>;
type SMSNotificationType = Notification<'sms', SMSNotification>;
type PushNotificationType = Notification<'push', PushNotification>;

type NotificationPayloadType<N extends Notification<string, any>> =
  N extends Notification<string, infer Payload> ? Payload : never;

type EmailPayload = NotificationPayloadType<EmailNotificationType>;

// simple example
type Device = {
  deviceId: string;
  deviceName: string;
  content: string;
};

type GenericType<T> = {
  deviceId: T;
};

type DeviceId<T extends GenericType<any>> = T extends GenericType<infer U>
  ? U
  : never;

type DeviceIdType = DeviceId<Device>;

type ObjectIsh = {
  [K in any]: any;
};

type ObjectType<K extends keyof any, V extends ObjectIsh> = {
  [P in K]: V;
};

type InferSomething2<T extends ObjectType<string, ObjectIsh>> =
  T extends ObjectType<string, infer V> ? V : never;

type Inferred2 = InferSomething2<{
  person: { name: string; age: number };
  occupation: { job: string; salary: number };
}>;

// The intersection only occurs when we use the union types as parameters of a function type
// So instead of producing union types it produces intersection type
type UnionToIntersection<T> = (T extends any ? (x: T) => void : never) extends (
  x: infer R
) => void
  ? R
  : never;

type Inferred3 = UnionToIntersection<Inferred2>;

// wrong approach
type UnionFunction =
  | ((x: { name: string }) => void)
  | ((x: { age: number }) => void);

type WrongUnionToIntersection<T> = T extends (x: infer R) => void ? R : never;

type Inferred4 = WrongUnionToIntersection<UnionFunction>;

// the correct way
type UnionObjects = { name: string } | { age: number };

type CorrectUnionToIntersection<T extends { [K in any]: any }> = (
  T extends any ? (x: T) => void : never
) extends (x: infer O) => void
  ? O
  : never;

type Inferred5 = CorrectUnionToIntersection<UnionObjects>;

// so the rules as follows:
// 1. The intersection only occurs when we use the union types as parameters of a function type
// 2. The union should be produced by the intercal code of the conditional type
