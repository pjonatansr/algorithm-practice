function searchSuggestions(repository, customerQuery) {
    const result = [];
    
    if (!!customerQuery && customerQuery.length >= 2) {
        for (let i=0; i<customerQuery.length-1; i++) {
            const currentQuery = customerQuery
                .slice(0, 2+i)
                .toLowerCase();
            
            const filteredResult = repository
                .map((word) => word.toLowerCase())
                .filter(x => x.slice(0,2+i) === currentQuery)
                .sort((a,b) => a.localeCompare(b))
                .slice(0,3)
                
            result.push(filteredResult);
        }
    }    
    
    return result;
}