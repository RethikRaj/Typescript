// Dictionary or hashmap
type Map1 = { [k: string]: number };

type Map2 = Record<string, number>;

type Map3 = Record<1 | 2 | 3 | 4, "allowedValue">;

let m1: Map1 = {
  Rethik: 1,
  Raj: 2,
};

let m2: Map2 = {
  Rethik: 1,
  Raj: 2,
};

let m3: Map3 = {
  1: "allowedValue",
  2: "allowedValue",
  3: "allowedValue",
  4: "allowedValue",
};
