
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const removeValue = (arr, value) => {
    const arrCopy = [...arr];
    
    const index = arrCopy.indexOf(value);

    arrCopy.splice(index, 1);

    return arrCopy;
}

const sumArray = (arr) => {
    return arr.reduce((a, b) => {
        return a + b;
    }, 0);
}

function miniMaxSum(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    const results = [];
    [max, min].forEach((value) => {
        const currentArray  = removeValue(arr, value);
        
        results.push(sumArray(currentArray));
    });
    
    console.log(...results);
}
