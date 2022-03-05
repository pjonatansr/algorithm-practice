function isBalanced(s) {
    const stack = [];
    const openBrackets = [
        '{',
        '[',
        '(',
    ];
    
    const closeBrackets = [
        '}',
        ']',
        ')',
    ];

    let isSuccess = true;
    
    for (let i=0; i<s.length; i++) {
        const currentChar = s[i];
        const closeBracketIndex = closeBrackets.indexOf(currentChar);
        const openBracketIndex = openBrackets.indexOf(currentChar);
        
        if (openBracketIndex !== -1) {
            stack.push(currentChar);
        } else if (closeBracketIndex !== -1){
            const removedChar = stack.pop();
            
            if (removedChar !== openBrackets[closeBracketIndex]){
                isSuccess = false;
                break;
            }
        }
    }
    
    return stack.length === 0 && isSuccess ? "YES" : "NO"
}
