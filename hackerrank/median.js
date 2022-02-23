

/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    const arrLen = arr.length;
    
    if (arrLen === 0 ) {
        console.log(0);
        return 0;
    }
        
    const arrCopy = [...arr];

    arrCopy.sort((a,b) => a-b);
    
    const arrHalf = Math.floor(arrLen/2);

    if (arr.length % 2) {
        console.log(arrCopy[arrHalf]);
        return arrCopy[arrHalf]
    }
    
    const median = (arrCopy[arrHalf - 1] + arrCopy[half]) / 2;
    
    return median;
}