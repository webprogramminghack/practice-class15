type Async = Promise<string>;
type Value = Awaited<Async>;

async function fetchingData(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Data fetched from API');
    }, 2000);
  });
}

type FetchingDataValueType = Awaited<ReturnType<typeof fetchingData>>;

async function produceNumber() {
  return 3;
}

type DoSomethingType = Awaited<ReturnType<typeof produceNumber>>;
