// TypeScript knows the JavaScript language and will generate types for you in many cases
// GOAL : When to let typescript infer type(type infering) and when are we going to write type explicitly(type annotation)

// TS infers implicitly

let num = 0; // TS infers var num as number

let countryOne = "India"; // TS infers the type as "string"

const countryTwo = "USA"; // TS infers the literal type as "USA"

const scores = [10, 20, 30];

// We need to mention types explicitly -> This is known as type annotation

// Example 1 : Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// Example 2 : We shoould mention type explicitly when the type is not obvious
let maybe: string | number;
maybe = Math.random() < 0.5 ? "hello world" : 10;
console.log(maybe);
