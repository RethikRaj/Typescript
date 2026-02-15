// typeof -> Used for primitive types
function describeTypeOf(x: unknown) {
  if (typeof x === "string") {
    return "string";
  }

  if (typeof x === "number") {
    return "10";
  }

  if (typeof x === "boolean") {
    return "boolean";
  }

  if (typeof x === "bigint") {
    return "bigint";
  }

  if (typeof x === "symbol") {
    return "synbol";
  }

  if (typeof x === "undefined") {
    return "undefined";
  }

  if (typeof x === "function") {
    return "() => {}";
  }

  // IMP : In JS typeof null is object therefore , while checking null we should check x === null and not type of x === null.
  if (x === null) return "null";

  return "object";
}

console.log(
  describeTypeOf("hi"),
  describeTypeOf(23),
  describeTypeOf(true),
  describeTypeOf(10n),
  describeTypeOf(Symbol("sangam")),
  describeTypeOf(undefined),
  describeTypeOf(() => {}),
  describeTypeOf(null),
  describeTypeOf({}),
);
