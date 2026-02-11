// Example 1
function neverReturns(): never {
  // If it throws on the first line, then this function never ever returns
  throw new Error("Always throws, never returns");
}

// Example 2 : Never in unions
// A never is something which is automatically removed from a type union.
type NeverIsRemoved = string | never | number;
