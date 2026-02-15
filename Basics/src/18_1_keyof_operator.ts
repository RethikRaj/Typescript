// The keyof operator takes an object type and produces a union of its keys as string (or number/symbol) literal types.

type Person = {
  name: string;
  age: number;
  email?: string;
};

type PersonKeys = keyof Person;
// Result: "name" | "age" | "email"
