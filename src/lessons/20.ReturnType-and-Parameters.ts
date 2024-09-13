function checkLength(a: string) {
  return a.length;
}

type Result = ReturnType<typeof checkLength>;

function sum(a: number, b: number) {
  return a + b;
}

type SumReturnType = Parameters<typeof sum>;
type FirstParameter = Parameters<typeof sum>[0];
type SecondParameter = Parameters<typeof sum>[1];
