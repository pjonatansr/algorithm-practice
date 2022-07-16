export function beeramid(bonus: number, price: number): number {
  let balance = bonus;
  let currentOdd = 1;
  let totalBeer = 0;
  let counter = 0;
  while (balance >= price * (totalBeer + currentOdd)) {
    totalBeer += currentOdd;
    balance -= price * totalBeer;
    currentOdd += 2;
    counter++;
  }
  return counter;
}