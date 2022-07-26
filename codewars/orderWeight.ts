export function orderWeight(strng: string): string {
  const splited = strng.split(' ')

  const map: Record<string, string[]> = {};
  for (let key of splited) {
    map[key] = key.split('');
  }

  const otherMap: Record<string, number> = {};
  for (let key in map) {
    otherMap[key] = map[key].reduce((a, b) => a + parseInt(b), 0);
  }

  const sorted = splited.sort((a, b) => {
    const n1: number = otherMap[a];
    const n2: number = otherMap[b];

    if (n1 !== n2) {
      return n1 - n2;
    }

    return a > b ? 1 : -1;
  });

  return sorted.join(' ');

}