// Example : let's create a identity function

// Without Generics
// Problem : For the below code we need to have multiple functions for different types.
function identity1(arg: number): number {
  return arg;
}

// Problem : While using any is certainly generic. It will cause the function to accept any and all types for the type of arg, but we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.
function identity2(arg: any): any {
  return arg;
}

// With Generics :
// We capture the type of argument in such a way that we can also use it to denote what is being returned.
// For this capturing we use type variable, a special kind of variable that works on types rather than values.
// <T> is a special variable(known as type variable) whose value will be a dataType.
function identityGeneric<T>(arg: T): T {
  return arg;
}
// Calling Generic function
// 1. Explicitly pass all the arguments including the type argument.
const out1 = identityGeneric<number>(5); // Here, we explicitly set T to be number.
// 2. Type argument inference : TS compiler sets the value of T based on the type of the argument
const out2 = identityGeneric(5); // TS compiler infers T as number.
