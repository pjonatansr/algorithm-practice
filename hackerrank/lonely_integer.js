function lonelyinteger(a) {
    let result;

    for (const i in a) {
        let count = 0;
        for (const j in a){
            if (a[i] === a[j]) {
                count++;
            }
        }
        
        if (count===1) {
            result = a[i];
        }
    }
    
    return result;
    
}