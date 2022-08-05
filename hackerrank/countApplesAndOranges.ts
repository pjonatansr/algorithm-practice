function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
  const fruits = ['apple', 'orange'] as const;

  type FruitType = typeof fruits[number];
  interface IFruit {
    treePosition: number,
    fruitsPositions: number[]
  };
  type FruitMap = Record<FruitType, IFruit>;

  const countFruitsInnerHouse = ({ fruitsPositions, treePosition }: IFruit): number =>
    fruitsPositions
      .filter((fruitPosition: number): boolean => {
        const fruitLocation: number = treePosition
          + fruitPosition;

        return s <= fruitLocation
          && t >= fruitLocation;
      })
      .length;

  const printFruitAmount = (fruitName: FruitType): Function =>
    (fruitMap: FruitMap): void => {
      const fruit = fruitMap[fruitName];
      const amount = countFruitsInnerHouse(fruit);

      console.log(amount);
    };

  const fruitMap: FruitMap = {
    apple: {
      treePosition: a,
      fruitsPositions: apples
    },
    orange: {
      treePosition: b,
      fruitsPositions: oranges
    },
  };

  fruits.map((fruitName: FruitType) => {
    printFruitAmount(fruitName)(fruitMap);
  });
}