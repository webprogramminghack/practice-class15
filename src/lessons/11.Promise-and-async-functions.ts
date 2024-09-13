function wait(duration: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve('hello'), duration);
  });
}

wait(1000).then((value) => {
  console.log(value.toUpperCase());
});

type Data = {
  id: number;
  name: string;
};

async function fetchData(): Promise<Data> {
  const response = await fetch('https://api.example');
  return await response.json();
}

fetchData().then((data) => {
  console.log(data.id);
});
