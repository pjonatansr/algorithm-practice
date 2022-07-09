export function findMissingLetter(array: string[]): string {
  const previous = array.reduce((a: any, b: any) =>
    (a.charCodeAt(0) + 1) < b.charCodeAt(0) ? a : b
  );

  return String.fromCharCode(previous.charCodeAt(0) + 1);

}