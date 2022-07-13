export const encryptThis = (str: string): string => {
  if (!str) {
    return str;
  }
  const arrWord: string[] = str.split(" ");

  const changedArr = arrWord.map((word: string) => {
    let arr: (string | number)[] = [...word];

    const lastPosition = arr.length - 1;

    if (lastPosition < 0) {
      return arr.join('')
    }

    let code = word.charCodeAt(0);

    arr[0] = code;

    if (lastPosition < 2) {
      return arr.join('');
    }

    [arr[1], arr[lastPosition]] = [arr[lastPosition], arr[1]]

    return arr.join('')

  });


  return changedArr.join(" ");

}