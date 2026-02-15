// 1. INDEX SIGNATURES

// 1.1) Basic index signature — keys must be number, string, symbol
// Use when keys are completely unknown at compile time
type Map1 = { [k: string]: number };
const m1: Map1 = {};
m1["anything"] = 42; // ✅
m1["whatever"] = 100; // ✅
// m1["key"] = "string";   // ❌ Type 'string' not assignable to 'number'

// 1.2) Same as Map1 but using interface — no functional difference
// Prefer interface when you plan to extend/implement it
interface Map2 {
  [k: string]: number;
}
interface Map2Extended extends Map2 {
  required: number; // ✅ specific keys allowed alongside index signature
  // name: string;  // ❌ 'string' not assignable to 'number' — must match index signature value type
}

// 1.3) symbol keys
const sym1 = Symbol("id");
const sym2 = Symbol("name");
type SymbolKeyed = { [k: symbol]: string };
const symMap: SymbolKeyed = {};
symMap[sym1] = "id-value";
symMap[sym2] = "name-value";

// 1.4) Optional values with index signature
type OptionalMap = { [k: string]: number | undefined };
const hits: OptionalMap = {};
console.log(hits["missing"]); // undefined — safe, no surprise

// ============================================================
// 2. RECORD
// ============================================================

// 2.1) Record<string, number> — identical to { [k: string]: number }
type Map3 = Record<string, number>;
const pageStats: Map3 = {};
pageStats["home"] = 100;
pageStats["about"] = 50;

// 2.2) Record with union keys — TypeScript ENFORCES all keys are present
// This is the killer feature of Record over index signatures
type Map4 = Record<"likes" | "views" | "shares", number>;
const engagement: Map4 = {
  likes: 120,
  views: 3400,
  shares: 45,
  // ❌ removing any key above gives a TypeScript error
  // ❌ adding "extra" key not in union is also an error
};

// 2.3) Record with union values — keys are open, values are restricted
type Map5 = Record<string, "allowedValue1" | "allowedValue2">;
const flags: Map5 = {};
flags["featureA"] = "allowedValue1"; // ✅
flags["featureB"] = "allowedValue2"; // ✅
// flags["featureC"] = "other";       // ❌ not in union

// 2.4) Record with both keys AND values restricted — most constrained form
// Every key must exist, every value must be from the union
type Map6 = Record<
  "likes" | "views" | "shares",
  "allowedValue1" | "allowedValue2"
>;
const strictMap: Map6 = {
  likes: "allowedValue1",
  views: "allowedValue2",
  shares: "allowedValue1",
  // ❌ can't add new keys
  // ❌ can't use values outside the union
};

// 2.5) Real world example — role permissions
type Role = "admin" | "editor" | "viewer";
type Access = "read" | "write" | "delete";
const roleAccess: Record<Role, Access[]> = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
  // ❌ TypeScript will error if any role is missing
};

// Nested Record — config objects, theme tokens
type Theme = Record<"light" | "dark", Record<"bg" | "fg", string>>;
const theme: Theme = {
  light: { bg: "#ffffff", fg: "#000000" },
  dark: { bg: "#000000", fg: "#ffffff" },
};

// ============================================================
// 3. MAP (runtime data structure)
// ============================================================

// 3.1) Use when you need .set() .get() .has() .delete() .size
const m2 = new Map<string, number>();
m2.set("score", 99);
m2.set("level", 5);
console.log(m2.get("score")); // 99
console.log(m2.has("level")); // true
console.log(m2.size); // 2
m2.delete("level");

// 3.2) Union keys in Map — TypeScript restricts .set() to known keys
// Unlike Record, it does NOT enforce all keys are present
const m3 = new Map<"likes" | "views" | "shares", number>();
m3.set("likes", 100); // ✅
m3.set("views", 2000); // ✅
// m3.set("other", 1);  // ❌ "other" not in union
// Note: unlike Record, you don't HAVE to set all keys

// 3.3) Union values in Map
const m4 = new Map<string, "allowedValue1" | "allowedValue2">();
m4.set("featureA", "allowedValue1"); // ✅
// m4.set("featureB", "other");       // ❌

// 3.4) Both keys and values restricted
const m5 = new Map<
  "likes" | "views" | "shares",
  "allowedValue1" | "allowedValue2"
>();
m5.set("likes", "allowedValue1"); // ✅
// m5.set("likes", "other");        // ❌
// m5.set("other", "allowedValue1");// ❌

// 3.5) Map's superpower — object keys (impossible with index signatures/Record)
const userCache = new Map<{ id: number }, { name: string }>();
const userKey = { id: 1 };
userCache.set(userKey, { name: "Alice" });
console.log(userCache.get(userKey)); // { name: "Alice" }

// 3.6) Map preserves insertion order — great for ordered processing
const steps = new Map<string, () => void>();
steps.set("validate", () => console.log("validating..."));
steps.set("transform", () => console.log("transforming..."));
steps.set("save", () => console.log("saving..."));
for (const [name, fn] of steps) {
  fn(); // always runs in insertion order
}

// ============================================================
// SIDE BY SIDE COMPARISON
// ============================================================

// Exhaustive key enforcement
type R = Record<"a" | "b" | "c", number>;
const r: R = { a: 1, b: 2, c: 3 }; // ✅ all keys required
// const r2: R = { a: 1, b: 2 };          // ❌ missing 'c'

const mp = new Map<"a" | "b" | "c", number>();
mp.set("a", 1); // ✅ partial is fine
mp.set("b", 2); // ✅ no error for missing 'c'

// JSON serialization
const obj: Record<string, number> = { x: 1, y: 2 };
JSON.stringify(obj); // ✅ '{"x":1,"y":2}'

const map = new Map([
  ["x", 1],
  ["y", 2],
]);
JSON.stringify(map); // ❌ '{}'  — Map does NOT serialize!
// Fix: JSON.stringify(Object.fromEntries(map))

// ============================================================
// QUICK REFERENCE
// ============================================================
// Dynamic string keys, no constraints     → index signature / Map3
// Known keys, must all be present         → Record<union, V>
// Restricted values only                  → Record<string, union>
// Both keys and values restricted         → Record<union, union>
// Non-string keys (objects, numbers)      → new Map<K, V>
// Need .has() .delete() .size at runtime  → new Map<K, V>
// Sending data as JSON                    → Record or index signature
// Ordered iteration guaranteed            → new Map<K, V>
