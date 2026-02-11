// GOAL : Understanding unions

// Example 1
let numOrBool: number | boolean = 5;
numOrBool = false;

// Example 2
function printId(id: number | string) {
  // console.log(id.toUpperCase()); error -> TypeScript will only allow an operation if it is valid for every member of the union. Here toUpperCase()  is present in string type but not in number type.

  // Solution : Type narrowing

  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// Example 3 : array of unions and union of arrays
const arrOfUnion: (string | number)[] = ["a", 1, "b", "2"];

const unionOfArrays: string[] | number[] =
  Math.random() > 0.1 ? ["x", "3"] : [1, 2];
