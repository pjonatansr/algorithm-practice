export const findUniq = (arr: number[]): number => {
  const map = arr.reduce((m: any, b: any) => {
    m[b] === undefined
      ? m[b] = true
      : m[b] = false;

    return m;
  }
    , {});

  for (let key in map) {
    if (map[key]) {
      return parseFloat(key);
    }
  }

  throw "No Content"
}