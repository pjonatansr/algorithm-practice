
const solution = (angles) => {
  let counter = 0;
    let opennedTags = 0;
    for (const char of angles) {
      if (char === '>') {
        if (counter === 0) {
          opennedTags++;
        } else {
          counter--;
        }
      } else {
        counter++;
      }
    }
    return '<'.repeat(opennedTags) + angles + '>'.repeat(counter);
};

