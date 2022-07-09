export const findOdd = (xs: number[]): number => {
  const map: Record<number, boolean> = {};
  for (let i of xs) {
    map[i] = !map[i];
  }

  let odd = xs[0];
  for (let key in map) {
    if (map[key]) {
      odd = parseInt(key);
    }
  }

  return odd;
};
