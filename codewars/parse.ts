export function parse(data: string): number[] {
  let value = 0;
  let arrValues: number[] = [];

  const parser: Record<string, (value: number) => number> = {
    i: (value) => value + 1,
    d: (value) => value - 1,
    s: (value) => value ** 2,
    o: (value) => {
      arrValues.push(value);
      return value;
    }
  };

  for (let char of data) {
    const fn: Function = parser[char];
    if (fn) {
      value = fn(value);
    }
  }

  return arrValues;
}