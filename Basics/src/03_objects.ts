// GOAL : Understand objects

type User = {
  id: number; // Required property
  name: string;
  email?: string; // Optional property
  readonly createdAt: Date; // readonly property cannnot be reassigned after initial its initial declaration
};

// NOTE : "email?" is different from "email : string | undefined" when in tsconfig.json we have "exactOptionalPropertyTypes" : true
// "email?" -> email may be absent , but if it is present then it must be string
// "email : string | undefined" -> the value of email(which must be present(not optional)) must be either string or undefined
// Note that while reading the data(email) it might still give undefined becuase in JS if a property is missing in an object it return undefined

const user1: User = {
  id: 1,
  name: "Rethik",
  createdAt: new Date(),
  // email: "ret@gmail.com",
};

// Cannot assign to 'createdAt' because it is a read-only property.
// user1.createdAt = new Date();
console.log(user1.email); // undefined -> if missing , else the value
