export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  if (n === 0) {
    return [];
  }

  const current = a + b + c;

  const next = tribonacci([b, c, current], n - 1);

  return [a, ...next];
}