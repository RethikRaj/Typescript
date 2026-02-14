// Example 1 :
// APPROACH 1: Standard Boolean Return : Returns a boolean, but does NOT trigger Type Narrowing.TypeScript doesn't "connect the dots" between the return value and the input.
function isNumber1(val: unknown): boolean {
  return typeof val === "number";
}

// APPROACH 2: Type Predicate (The "User-Defined Type Guard") : The 'val is number' syntax tells TS: "If I return true, change the type of 'val' to 'number' in the `calling block.`"
function isNumber2(val: unknown): val is number {
  return typeof val === "number";
}

const val: unknown = 7;

if (isNumber1(val)) {
  // TS still thinks 'val' is 'unknown' here. You cannot perform math or call .toFixed() without another assertion. Hover and see type of val
  // val.toFixed(2); // Error: Object is of type 'unknown'.
  console.log(typeof val);
}

if (isNumber2(val)) {
  // Because of the 'is' keyword, TS knows 'val' is a number here.
  console.log(val.toFixed(2)); // This works perfectly!
}

// Example 2 :
interface SoftwareEngineer {
  readonly specialization: string;
  code(): void;
}

class Developer implements SoftwareEngineer {
  constructor(readonly specialization: string) {}
  code() {
    console.log(`Coding ${this.specialization}`);
  }

  // Specific method only available to Developers
  runUnitTest(): boolean {
    console.log(`Unit Test running on ${this.specialization} code`);
    return true;
  }
}

class Tester implements SoftwareEngineer {
  constructor(readonly specialization: string) {}
  code() {
    console.log(`Coding ${this.specialization}`);
  }

  // Specific method only available to Testers
  runRegression(): boolean {
    console.log(`Regression running...`);
    return true;
  }
}

/**
 * 1. TRADITIONAL APPROACH (Boolean check)
 * Returns a boolean, but does NOT trigger Type Narrowing.
 * TypeScript doesn't "connect the dots" between the return value and the input.
 */
const isDeveloperTraditional = (eng: SoftwareEngineer): boolean => {
  return eng instanceof Developer;
};

/**
 * 2. MODERN APPROACH (Type Predicate)
 * The 'eng is Developer' syntax tells TS:
 * "If this returns true, treat 'eng' as a 'Developer' instance automatically in that code block"
 */
const isDeveloperModern = (eng: SoftwareEngineer): eng is Developer => {
  return eng instanceof Developer;
};

// --- USAGE ---

const runTestTraditional = (eng: SoftwareEngineer) => {
  if (isDeveloperTraditional(eng)) {
    // ❌ MANUAL CASTING REQUIRED
    // TS still thinks 'eng' is just a 'SoftwareEngineer'
    (eng as Developer).runUnitTest();
  }
};

const runTestModern = (eng: SoftwareEngineer) => {
  if (isDeveloperModern(eng)) {
    // ✅ AUTO-NARROWING
    // No 'as Developer' needed! TS knows 'eng' has 'runUnitTest' here.
    eng.runUnitTest();
  } else {
    // In this 'else' block, TS knows 'eng' is definitely NOT a Developer.
    console.log("Not a developer, cannot run unit tests.");
  }
};

const anand = new Developer("React");
const balu = new Tester("Selenium");

runTestModern(anand); // Success: "Unit Test running..."
runTestModern(balu); // Success: "Not a developer..."
