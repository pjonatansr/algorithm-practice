function nextMultipleOfFive(n: number): number {
  const rest = n % 5;
  if (rest === 0) return n;

  return n + 5 - rest;
}

function gradingStudents(grades: number[]): number[] {
  return grades.map((n: number) => {
    if (n < 38) return n;

    const nextMultiple: number = nextMultipleOfFive(n);
    const difference: number = nextMultiple - n;

    if (difference < 3) return nextMultiple;

    return n;
  });
}