// Type aliasing
// 1. Used for data modelling
type Product = {
  productId: string;
  title: string;
  price?: number; // Optional
  inStock: boolean;
};

const product: Product = {
  productId: "P101",
  title: "Laptop",
  inStock: true,
};

// 2. Union of types ( A | B ) : A value can be ONE of the specified types
// Example 2.1 :
type ID = number | string;
// Example 2.2 : Literal Union
type Status = "active" | "inactive" | "pending";
// Example 2.3 :
type Cat = { type: "cat"; meows: boolean };
type Dog = { type: "dog"; barks: boolean };
type Pet = Cat | Dog;

const myPet: Pet = { type: "cat", meows: true };

// 3. Intersection of types : A value must have ALL properties of combined types
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  role: string;
};

type WorkingPerson = Person & Employee;

const staffMember: WorkingPerson = {
  name: "Bob",
  age: 35,
  company: "TechCorp",
  role: "Developer",
};

// 4. Function types
type BinaryOperation = (a: number, b: number) => number;

const add: BinaryOperation = (a, b) => a + b;
const multiply: BinaryOperation = (a, b) => a * b;

console.log(add(5, 3)); // 8
console.log(multiply(5, 3)); // 15

// 5. Cannot be redeclared and merged
// type Box { width: number };
// type Box{ height: number };
