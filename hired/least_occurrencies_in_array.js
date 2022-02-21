
const solution = (numbers) => {
    const counts = {};
    numbers.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1; 
    });
    
    const repetitionNumber = Math.min(...Object.values(counts));
    
    const matchedKeys = getKeyByValue(counts, repetitionNumber);
    
    return matchedKeys.map(value => parseInt(value));
};

function getKeyByValue(object, value) {
  return Object.keys(object).filter(key => object[key] === value);
}
