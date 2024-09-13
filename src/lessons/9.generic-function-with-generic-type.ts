type ObjectDescriptor<D, M> = {
  data: D;
  methods: M;
};

function makeObject<D, M>({ data, methods }: ObjectDescriptor<D, M>): D & M {
  return { ...data, ...methods };
}

const obj = {
  data: { x: 1, y: 2 },
  methods: {
    print() {
      console.log('hello');
    },
  },
};

const object = makeObject(obj);

type Pair<T1, T2> = {
  first: T1;
  second: T2;
};

function createPair<T1, T2>(first: T1, second: T2): Pair<T1, T2> {
  return { first, second };
}

const numberStringPair = createPair(42, 'Hello');

type PropPair<T, K> = {
  first: T;
  second: K;
};

function toArray<T, K>(pair: PropPair<T, K>): [T, K] {
  return [pair.first, pair.second];
}

const arr = toArray({ first: 'John', second: 123123 });
