function info(z: unknown) {
  if (Array.isArray(z)) {
    // For arrays use isArray function
    return z;
  }

  if (z instanceof Date) {
    return new Date();
  }

  if (z instanceof Error) {
    return new Error("hbhjg");
  }

  return "other";
}

console.log(
  info([1, 2, 3, 4, 5]),
  info(new Date()),
  info(new Error("oopss! Error occured")),
  info({ x: 1 }),
);
