async function returnPromise(): Promise<number> {
  return 26;
}

const a = returnPromise();

console.log(a)
