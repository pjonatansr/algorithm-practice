function countingSort(arr) {
    const arr2 = new Array(100).fill(0);
    
    arr.map((ele) => {
        arr2[ele]++;
    });
    
    return arr2;
    
}