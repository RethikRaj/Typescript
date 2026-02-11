// Declaring arrays
const arr1: number[] = [1, 2, 3, 4]; // T[]
const arr2: Array<number> = [1, 2, 3, 4]; // Array<T>
const arr3 = [1, 2, 3, 4]; // Type inference

// Using arrays
const scores = [100, 92, 93, 95, 1, 0, 99];
scores.push(199); // Add to end

// filter - returns new array with elements that pass test
const scoresMoreThan100 = scores.filter((score) => {
  return score > 100;
});
console.log(scoresMoreThan100); // [199]

// map - transforms each element
const doubled = scores.map((score) => score * 2);
console.log(doubled); // [200, 184, 186, 190, 2, 0, 198, 398]

// reduce - reduces array to single value
const total = scores.reduce((sum, score) => sum + score, 0);
console.log(total); // 680

// find - returns first element that matches
const firstHighScore = scores.find((score) => score > 95);
console.log(firstHighScore); // 100

// some - checks if at least one element passes test
const hasZero = scores.some((score) => score === 0);
console.log(hasZero); // true

// every - checks if all elements pass test
const allPositive = scores.every((score) => score > 0);
console.log(allPositive); // false

// sort - sorts array (modifies original)
const sortedScores = [...scores].sort((a, b) => a - b);
console.log(sortedScores); // [0, 1, 92, 93, 95, 99, 100, 199]

// slice - returns portion of array (doesn't modify original)
const topThree = sortedScores.slice(-3);
console.log(topThree); // [99, 100, 199]

// includes - checks if array contains value
const hasNinetyTwo = scores.includes(92);
console.log(hasNinetyTwo); // true

// forEach - executes function for each element
scores.forEach((score, index) => {
  console.log(`Score ${index}: ${score}`);
});

// findIndex - returns index of first matching element
const zeroIndex = scores.findIndex((score) => score === 0);
console.log(zeroIndex); // 5

// concat - combines arrays
const moreScores = [88, 91];
const allScores = scores.concat(moreScores);
console.log(allScores);

// join - creates string from array
const scoresString = scores.join(", ");
console.log(scoresString); // "100, 92, 93, 95, 1, 0, 99, 199"
