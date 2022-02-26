
const solution = (angles) => {
  let countOpenNotClosed = 0;
    let countClosedNotOpen = 0;
    for (const char of angles) {
      if (char === '>') {
        if (countOpenNotClosed === 0) {
          countClosedNotOpen++;
        } else {
          countOpenNotClosed--;
        }
      } else {
        countOpenNotClosed++;
      }
    }
    return '<'.repeat(countClosedNotOpen) + angles + '>'.repeat(countOpenNotClosed);
};

