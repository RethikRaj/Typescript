// Problem Statement : Create a User Card
// Learning : For optional props either provide a default value in argument or use nullish coalescing for providing default value.

import type { ReactNode } from "react";

type UserCardProps = {
  id: number;
  name: string;
  email?: string;
  children?: ReactNode;
};

export function UserCardOne({ id, name, email, children }: UserCardProps) {
  return (
    <div>
      <strong>#{id}</strong>
      <p>{name}</p>
      <p>{email ?? "Default Email"}</p> {/*Fallback UI*/}
      {/*{email && <p>{email}</p>}*/} {/* Conditional UI */}
      {children}
      <p>Footer</p>
    </div>
  );
}

export function UserCardTwo({
  id,
  name,
  email = "Default Email",
  children,
}: UserCardProps) {
  return (
    <div>
      <strong>#{id}</strong>
      <p>{name}</p>
      <p>{email}</p>
      {children}
      <p>Footer</p>
    </div>
  );
}
