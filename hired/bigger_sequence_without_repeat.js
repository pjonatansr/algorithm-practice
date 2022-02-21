const solution = (n) => {
    const input = `${n}`;
    const chars = [...input];
    let currChar;
    let str = "";
    let longestString = "";
    let hash = {};

    for (let i = 0; i < chars.length; i++) {
        currChar = chars[i];
        if (!hash[chars[i]]) {
          str += currChar;
          hash[chars[i]] = {
            index: i
          };

        } else {
          if (longestString.length <= str.length) {
              longestString = str;
          }
          let prevDupeIndex = hash[currChar].index;
          let strFromPrevDupe = input.substring(prevDupeIndex + 1, i);

          str = strFromPrevDupe + currChar;
          hash = {};
        
          for (let j = prevDupeIndex + 1; j <= i; j++) {
              hash[input.charAt(j)] = {
                  index: j
              };
          }
        }
    }
    
  return longestString.length > str.length
    ? longestString.length
    : str.length;

};


