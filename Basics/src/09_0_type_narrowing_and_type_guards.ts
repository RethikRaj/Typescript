// 1. Type narrowing is the process of refining a variable's type from a broader type to a more specific one within a certain code block.
// 2. Type guards are the mechanisms that enable this narrowing.

// Type guards are expressions that perform runtime checks and inform TypeScript's type checker about the type. Here are the main kinds:

// a) "typeof" Type Guard -> Used for primitive types
function processValue(value: string | number) {
  // Here, value is: string | number

  if (typeof value === "string") {
    // TypeScript narrows to: string
    console.log(value.toUpperCase());
  } else {
    // TypeScript narrows to: number
    console.log(value.toFixed(2));
  }
}

// b) "instanceof" Type Guard -> For class instances or constructor funtions
class Dog {
  bark() {
    console.log("Barking");
  }
}
class Cat {
  meow() {
    console.log("Meowing");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // animal is Dog
  } else {
    animal.meow();
  }
}

// c) IMP: User Defined Type guard : Type predicate - is operator to narrow
// https://medium.com/@elamurugan96/understanding-the-is-operator-in-typescript-for-type-guards-a-practical-walkthrough-cd0b1e1e41a5
// Without is operator

// With is operator

// d) in operator -> Checks if a property exists:
type Admin = { role: "Admin"; permissions: string[] };
type Customer = { role: "Customer"; loyaltyPoints: number };

function describeUserWithInOperator(u: Admin | Customer) {
  if ("permissions" in u) {
    console.log(u.role, "Admin user");
  } else {
    console.log(u.loyaltyPoints);
  }
}

// e) Truthiness checking
function printName(name: string | null) {
  if (name) {
    // name is string (null is excluded)
    console.log(name.toUpperCase());
  }
}

// f) Equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}
