export const digitalRoot = (n: number): number => {

  const digits: string[] = `${n}`.split('');

  if (digits.length === 1) {
    return n;
  }

  const newN: number = digits.reduce((a: number, b: string) => a + parseInt(b), 0);

  return digitalRoot(newN);
};