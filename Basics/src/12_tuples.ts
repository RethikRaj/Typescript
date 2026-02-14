// Tuples : Fixed length and fixed types

const tup1: [number, string, boolean] = [10, "Rethik", false];
const tup2: [number, string?] = [10]; // Optional tuples
const tup3: readonly [number, string] = [19, "Raj"];

// Labelled tuples -> only for documentation
const tup4: [status: number] = [7];
type Book = [name: string, author: string, publishedYear: number];

// Some Example Usage

function draw(x: number, y: number) {
  console.log(x, y);
}

const points = [10, 20];
// draw(...points); // Error : TS infers 'points' as 'number[]' (an array of any length). Therfore TS cannot guarantee there will be exactly 2 items for the draw function.

const points2 = [10, 20] as const;
draw(...points2);

const points3: [number, number] = [10, 20];
draw(...points3);
