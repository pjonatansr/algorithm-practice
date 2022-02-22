function countGroups(arr) {
    return arr.reduce((previous, current) => {
        let currentKey;

        if (current === 0)
            currentKey = 'zero';
        else if (current > 0)
            currentKey = 'positive';
        else 
            currentKey = 'negative';
            
        previous[currentKey]++;
        
        return previous;
    }, {
        positive: 0,
        negative: 0,
        zero: 0,
    });
}

function plusMinus(arr) {
    const size = arr.length;
    const groupedElements = countGroups(arr);
    
    for (const item in groupedElements) {
        const value = (
            groupedElements[item] / size
        )
        .toPrecision(6);
        
        console.log(value); // result here
    }
}