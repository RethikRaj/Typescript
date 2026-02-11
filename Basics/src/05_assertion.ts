// GOAL : Understand type assertions
// Type assertions are a way to tell the TypeScript compiler "trust me, I know what I'm doing" about the type of a value.
// Use annotations when defining types, use assertions sparingly when you know more than TypeScript can infer.
// Assertions don't change runtime behavior, just compile-time type checking
// Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong.

// Example 1
let someValue: unknown = "this is a string";
// let someValueLength: number = someValue.length; // Although someValue is string we can't access length property
let someValueLength: number = (someValue as string).length;
let someValueLength2 = someValue as number;
console.log(someValueLength2.toFixed(2)); // Run time Error as type assertion is wrong !!!

// Example 2
// let inputEle = document.getElementById("username"); // inputEle type is -> HTMLElement | null
// But since we specifically know that the type of inputEle is HTMLInputElement
// let inputEle = document.getElementById("username") as HTMLInputElement;

// Example 3
type Book = {
  name: string;
  author: string;
};

let bookString1 = `{"name": "Harry Potter"}`;
let bookString2 = `{"name": "Harry Potter", "author" : "J.K.Rowling"}`;

// ========================================
// THE PROBLEM: Why Type Annotations Don't Help
// ========================================

let bookJSON10 = JSON.parse(bookString1);
// console.log(bookJSON10.author.toUpperCase());
// ❌ Compiles fine, crashes at runtime because 'author' is undefined

let bookJSON11: Book = JSON.parse(bookString1);
// TypeScript doesn't complain because JSON.parse returns 'any'
// When you assign 'any' to a typed variable, TypeScript skips all type checking
// Think of 'any' as a "bypass all safety checks" card
// console.log(bookJSON11.author.toUpperCase());
// ❌ Still crashes! Type annotation gives false sense of security

let bookJSON12 = JSON.parse(bookString1) as Book;
// Type assertion (as Book) is just saying "trust me, this is a Book"
// But it doesn't validate or transform the data - it's a compile-time lie
// console.log(bookJSON12.author.toUpperCase());
// ❌ Still crashes! Assertions don't protect you at runtime

// ========================================
// Solution 1: Type Guards (Runtime Validation)
// ========================================
// A type guard actually checks the data shape at runtime
// It's the only way to be truly sure the data matches your type
function isBook(obj: unknown): obj is Book {
  return (
    typeof obj === "object" && // First, make sure it's an object
    obj !== null && // null is typeof "object" in JS, so exclude it
    "name" in obj && // Check the 'name' property exists
    "author" in obj && // Check the 'author' property exists
    typeof obj.name === "string" && // Verify 'name' is actually a string
    typeof obj.author === "string" // Verify 'author' is actually a string
  );
}

// Test with VALID data
const bookJSON20 = JSON.parse(bookString2) as unknown;
if (isBook(bookJSON20)) {
  // TypeScript now knows for sure that bookJSON20 is a Book
  console.log(bookJSON20.author.toUpperCase()); // ✅ Safe: "J.K.ROWLING"
} else {
  console.log("Invalid book data");
}

// Test with INVALID data (missing 'author' field)
let bookJSON13 = JSON.parse(bookString1) as unknown;
if (isBook(bookJSON13)) {
  console.log(bookJSON13.author.toUpperCase());
} else {
  // The type guard catches the problem before we try to use the data
  console.log("Invalid book data"); // ✅ This runs - crisis averted!
}

// ========================================
// Solution 2: Zod Library (Industry Standard)
// ========================================
import { z } from "zod";

// Define the schema - this is the source of truth
const BookSchema = z.object({
  name: z.string(),
  author: z.string(),
});

// Automatically create the TypeScript type from the schema
// This keeps your validation and types perfectly in sync
type BookFromSchema = z.infer<typeof BookSchema>;

// Test with VALID data
try {
  // .parse() validates and throws if invalid
  const validBook = BookSchema.parse(JSON.parse(bookString2));
  console.log(validBook.author.toUpperCase()); // ✅ Safe: "J.K.ROWLING"
} catch (error) {
  console.log("Validation failed:", error);
}

// Test with INVALID data
try {
  const invalidBook = BookSchema.parse(JSON.parse(bookString1));
  console.log(invalidBook.author.toUpperCase());
} catch (error) {
  // Zod throws a detailed error explaining what's missing
  console.log("Validation failed: Missing author field"); // ✅ Caught!
}

// Alternative: safeParse (doesn't throw, returns a result object)
const result = BookSchema.safeParse(JSON.parse(bookString1));
if (result.success) {
  // Data is valid - safe to use
  console.log(result.data.author.toUpperCase());
} else {
  // Data is invalid - get detailed error information
  console.log("Validation errors:", result.error.issues);
}

// ========================================
// Solution 3: Optional Chaining (Quick Safety Net)
// ========================================

// Optional chaining (?.) doesn't validate - it just prevents crashes
// Use it when you want to handle missing data gracefully

let bookJSON14: Book = JSON.parse(bookString1);

// The ?. operator short-circuits if 'author' is null or undefined
// Instead of crashing, it returns undefined
console.log(bookJSON14.author?.toUpperCase());
// ✅ Output: undefined (no crash, but also no warning!)

// Combine with nullish coalescing (??) to provide fallback values
console.log(bookJSON14.author?.toUpperCase() ?? "UNKNOWN AUTHOR");
// ✅ Output: "UNKNOWN AUTHOR"

// Test with VALID data
let bookJSON31: Book = JSON.parse(bookString2);
console.log(bookJSON31.author?.toUpperCase());
// ✅ Output: "J.K.ROWLING"

// ========================================
// Decision Guide
// ========================================

/*
✅ USE TYPE GUARDS WHEN:
   - You need simple, custom validation logic
   - You can't add external dependencies
   - You want full control over error handling
   - Working with straightforward data structures

✅ USE ZOD WHEN:
   - Building production applications with APIs
   - You have complex, nested data structures
   - You need detailed, user-friendly error messages
   - You want one source of truth for types and validation
   - Team size is growing (easier to maintain)

⚠️ USE OPTIONAL CHAINING WHEN:
   - Properties are genuinely optional by design
   - You want a quick safety net during development
   - You're okay with undefined values in your logic
   - NOT as a substitute for proper validation!
   - Prevents crash but hides the problem

🚫 NEVER RELY ON:
   - Type annotations alone (`: Book`)
   - Type assertions alone (`as Book`)
   - These are compile-time only - they don't protect you at runtime
*/
