// Generic Constraints : Constraint the <Type> to allow only some dataTypes that follow the Constraints
// Generic constraints let you restrict what types a generic can accept, so you can safely assume certain properties or behaviors exist on the type

// Example 1:
// Without Constraints
// function getLength<T>(value: T): number {
//   return value.length; // ❌ Error: Property 'length' does not exist on type 'T'
// }

// With Constraints
function getLength<T extends { length: number }>(arg: T): number {
  // The constraint `T extends { length: number }` means: "T can be any type, as long as it has at least a length property of type number."
  return arg.length;
}
getLength("hello"); //  string has .length
getLength([1, 2, 3]); //  array has .length
getLength({ length: 10 }); //  object has .length
// getLength(42);             // Error : number has no .length

// Example 2:
function example2<T extends "name" | "age">(arg: T): T {
  return arg;
}

example2("age");
example2("name");
// example2("anuthingElseGivesError");

// Example 3 : Problem statement given any object and its key return its value
type User = {
  name: string;
  contact: number;
};

const user: User = { name: "Rethik", contact: 9999999999 };

type Product = {
  name: string;
  releaseYear: number;
  inStock?: boolean;
};

const product: Product = {
  name: "Iphone 17",
  releaseYear: 2025,
  // inStock: false,
};

// Problem statement given any object and its key return its value
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  // Decodign : K extends keyof T
  // For example is T is Product , then keyof T returns "name" | "releaseYear" | "inStock"
  // Therfore, it becomes K extends "name" | "releaseYear" | "inStock"
  return obj[key];
}

console.log(getPropertyValue(product, "inStock"));
console.log(getPropertyValue(product, "releaseYear"));
console.log(getPropertyValue(product, "name"));
// console.log(getPropertyValue(product, "anythingElseGivesError"));

console.log(getPropertyValue(user, "contact"));
console.log(getPropertyValue(user, "name"));
// console.log(getPropertyValue(user, "anythingElseGivesError"));

// Example 4 : Problem statement given any object and its key and a newvalue , set key with the provided newvalue.

function setPropertyValue<T, K extends keyof T>(obj: T, key: K, newVal: T[K]) {
  obj[key] = newVal;
}

setPropertyValue(product, "releaseYear", 2026);
console.log(getPropertyValue(product, "releaseYear"));
