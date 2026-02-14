// Interfaces
// 1. Used for data modelling which is expected to extend in future.

interface Animal {
  name: string;
  age: number;
}

interface Flyable {
  maxAltitude: number;
  fly(): void;
}

interface Swimmable {
  maxDepth: number;
  swim(): void;
}

// multiple inheritance via interfaces
interface Duck extends Animal, Flyable, Swimmable {
  quack?(): void; // Optional Function
}

const donald: Duck = {
  name: "Donald",
  age: 2,
  maxAltitude: 100,
  maxDepth: 5,
  fly() {
    console.log(`${this.name} is flying!`);
  },
  swim() {
    console.log(`${this.name} is swimming!`);
  },
};

// 2. Union of Interfaces
interface A {
  name: string;
}
interface B {
  age: number;
}

// interface C = A | B;
type C = A | B;

// 3. Intersection of Interfaces
// interface D = A & B;
type D = A & B;

// 4. Can be redeclared and merged
// Example 4.1 :
interface Box {
  width: number;
}
interface Box {
  height: number;
}
const box: Box = { width: 10, height: 20 };

// Example 4.2 : Extending third-party / library interfaces
// Imagine a library defines this:
interface Request {
  url: string;
  method: string;
}

// YOU extend it in your app without touching the original:
interface Request {
  userId: string;
  token: string;
}
