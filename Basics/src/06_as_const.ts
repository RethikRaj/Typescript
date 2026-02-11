// GOAL : Understanding as const and use it to derive types

// Without as const
// const ROLES = ["admin", "user", "operator"]; type of ROLES: string[]
// type Role = (typeof ROLES)[number]; type of Role: string

// as const -> "lock this array, remember the exact values"

const ROLES = ["user", "admin", "superadmin"] as const;

// Derive the type
type Role = (typeof ROLES)[number];
// Role = "admin" | "user" | "operator"

function setRole(r: Role) {
  console.log(r);
}

setRole("admin"); // ✅ OK
setRole("user"); // ✅ OK
// setRole("guest"); // ❌ ERROR - not allowed
