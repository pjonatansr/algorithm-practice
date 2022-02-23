
function diagonalDifference(arr) {
    const data = {
        primary: [],
        secondary: [],
    };
    
    let primaryIndex = 0;
    let secondaryIndex = arr.length - 1;
    arr.map((row) => {
        data.primary.push(row[primaryIndex]);
        primaryIndex++;
        
        data.secondary.push(row[secondaryIndex]);
        secondaryIndex--;
    });
    
    const sumArr = (arr) => arr.reduce((a,b) => a + b, 0);
    
    const getResult = ({
        primary, 
        secondary
    }) => Math.abs(sumArr(primary) - sumArr(secondary));
    
    return getResult(data);
}