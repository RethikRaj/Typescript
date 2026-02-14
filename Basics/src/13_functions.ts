// GOAL : Understanding functions and annotating it
// Return type :
// 1. For exported functions / Public API always annotate the return type
// 2. For internal functions / callback functions  , you can let TS infer the return type
// 3. Async functions returnType : Promise<T>
// 4. Use never when you know that function never returns.
// 5. Use unknown when you don't know the return type.

// Parameters :
// 1. Always annontate the return type.
// 2. Some cases like callback function inside map, filter, ... TS infers type .

function sum(...numbers: number[]): number {
  return numbers.reduce((acc: number, curr: number): number => {
    return acc + curr;
  }, 0);
  // return numbers.reduce((acc, curr)=>acc+curr, 0);
}

async function connectToDb(): Promise<string> {
  return "Connect to DB";
}

connectToDb().then((result) => console.log(result));
