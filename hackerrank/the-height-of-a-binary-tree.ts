'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

export class BinarySearchTreeNode<T> {
    data: T;
    leftNode?: BinarySearchTreeNode<T>;
    rightNode?: BinarySearchTreeNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

export class LevelNode<T> {
    level: number;
    node: BinarySearchTreeNode<T>;

    constructor(level: number, node: BinarySearchTreeNode<T>) {
        this.level = level;
        this.node = node;
    }
}

export class BinarySearchTree<T> {
    root?: BinarySearchTreeNode<T>;
    comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    insert(data: T): BinarySearchTreeNode<T> | undefined {
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data);
            return this.root;
        }

        let current = this.root;

        while (true) {
            if (this.comparator(data, current.data) === 1) {
                if (current.rightNode) {
                    current = current.rightNode;
                } else {
                    current.rightNode = new BinarySearchTreeNode(data);
                    return current.rightNode;
                }
            } else {
                if (current.leftNode) {
                    current = current.leftNode;
                } else {
                    current.leftNode = new BinarySearchTreeNode(data);
                    return current.leftNode;
                }
            }
        }
    }

    getHeight(node: BinarySearchTreeNode<T> | undefined): number {
        let maxLevel: number = 0;
        var queue = [];

        queue.push(new LevelNode(1, node));

        while (queue.length) {
            let item = queue.shift()
            //console.log(item.node.data); -> print data
            if (item.node) {
                if (item.node.leftNode)
                    queue.push(new LevelNode(item.level + 1, item.node.leftNode))

                if (item.node.rightNode)
                    queue.push(new LevelNode(item.level + 1, item.node.rightNode))

                if (item.level > maxLevel)
                    maxLevel = item.level
            }
        }
        return (maxLevel - 1)
    }
}

function comparator(a: number, b: number) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function main() {

    const size: number = parseInt(readLine());

    const bst = new BinarySearchTree(comparator);

    const array: number[] = readLine()
        .split(" ")
        .map((e) => parseInt(e));

    array.map(item => {
        bst.insert(item);
    });

    console.log(bst.getHeight(bst.root));
}