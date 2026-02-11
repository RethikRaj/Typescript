// GOAL : Understand types in TS

// Primitive types
let username: string = "rethik";
let age: number = 40;
let isCreator: boolean = true;
const big: bigint = 2n ** 63n - 1n;
// Operator '+' cannot be applied to types 'bigint' and 'number'.
// const mixed = big + age
const TOKEN: unique symbol = Symbol("TOKEN");

const yearsToDay = function (years: number): number {
  return years * 365;
};

console.log(username.toUpperCase());
console.log(yearsToDay(2));

// Good Practices
//
// 1. Don't use "any" , instead use void(functions does not return anything), never(function never returns), unknown
// Because any can lead to runtime
