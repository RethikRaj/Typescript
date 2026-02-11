// GOAL : Understand objects

type User = {
  id: number; // Required property
  name: string;
  email?: string; // Optional property
  readonly createdAt: Date; // readonly property cannnot be reassigned after initial its initial declaration
};

// NOTE : "email?" is different from "email : string | undefined"
// "email?" -> email may be absent , but if it is present then it must be string
// "email : string | undefined" -> the value of email(which must be present(not optional)) must be either string or undefined

const user1: User = {
  id: 1,
  name: "Rethik",
  createdAt: new Date(),
};

// Cannot assign to 'createdAt' because it is a read-only property.
// user1.createdAt = new Date();
