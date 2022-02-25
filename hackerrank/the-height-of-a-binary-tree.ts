/*
 * Challenge url: https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem
 */
 
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

let isDebugging = false;

function debug(message : any) {
    if (isDebugging) {
        console.log(message);
    }
}

function main() {
    const size: number = parseInt(readLine());
    
    const tree: number[] = readLine()
        .split(" ")
        .map((e) => parseInt(e));
        
    const treeHeightRecursive = (
    {
        binaryTree, 
        index = 0,
    }: 
    {
        binaryTree: number[], 
        index?: number
    }): number => {
        const root = binaryTree[index];
        let leftHeight = 0;        
        let rightHeight = 0;
        
        if (!root || binaryTree.length-1 <= index ) {
            debug({ line:56, index, leftHeight, rightHeight });
            return 0;
        }
        
        const left = (2*index)+1;
        const right = (2*index)+2;

        if (left <= binaryTree.length) {
          leftHeight = treeHeightRecursive({ binaryTree, index: left});
          debug({ line:65, index, leftHeight,  rightHeight });
        }
        
        if (right <= binaryTree.length) {
          rightHeight = treeHeightRecursive({ binaryTree, index: right });
          debug({ line: 70, index, leftHeight, rightHeight });
        }
        
        const totalResult = 1 + Math.max(leftHeight, rightHeight);
        
        debug({
            line: 76,
            index,
            leftHeight, 
            rightHeight,
            totalResult
        });
        
        return totalResult;
    }

    debug({
        line: 87,
        tree,
        length: tree.length
    });
    
    const result = treeHeightRecursive({binaryTree:tree});
    console.log(result);
    
}
