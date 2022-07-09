const highAndLow = (numbers: string): string => {
  const arr = numbers
    .split(" ")
    .map(i => parseInt(i))
    .sort((a, b) => a - b);

  return `${arr[arr.length - 1]} ${arr[0]}`;
}