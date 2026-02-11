// Read only arrays

const rarr1: readonly number[] = [1, 2, 3];
const rarr2: Readonly<number[]> = [1, 2, 3];
const rarr3 = [1, 2, 3] as const; // Literal read only

// What we cannot do
const items: readonly string[] = ["a", "b", "c"];
// items.push("d");
// items.pop();
// items.shift();
// items.unshift("z");
// items.splice(0, 1);
// items.sort();
// items.reverse();
// items[0] = "x";

// What we can do
const numbers: readonly number[] = [1, 2, 3, 4, 5];

// Read values
console.log(numbers[0]); // 1
console.log(numbers.length); // 5

// Non-mutating methods (return new arrays)
const doubled = numbers.map((n) => n * 2);
const filtered = numbers.filter((n) => n > 2);
const found = numbers.find((n) => n === 3);
const hasTwo = numbers.includes(2);
const sliced = numbers.slice(1, 3);

// Iteration
numbers.forEach((n) => console.log(n));
for (const num of numbers) {
  console.log(num);
}

// Converting types

// 1. Readonly to Mutable - CREATES A COPY
const readonlyArr: readonly number[] = [1, 2, 3];
const mutableArr: number[] = [...readonlyArr]; // Creates new array
mutableArr.push(4); // Allowed

console.log(readonlyArr); // [1, 2, 3] - Original unchanged
console.log(mutableArr); // [1, 2, 3, 4] - New array modified

// 2. Mutable to Readonly
const mutableArr2: number[] = [1, 2, 3, 4];
const readonlyArr2: readonly number[] = mutableArr2; // No copy, same array!
const readonlyArr3: readonly number[] = [...mutableArr2]; // Creates a new readonly array

mutableArr2.push(5);
console.log(mutableArr2); // [ 1, 2, 3, 4, 5 ]
console.log(readonlyArr2); // [1, 2, 3, 4, 5] - Changed!
console.log(readonlyArr3); // [1, 2, 3, 4] - Unchnaged
