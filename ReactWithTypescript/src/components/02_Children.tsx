// Example 1 :
import type { PropsWithChildren } from "react";

// PropsWithChildren add children as optional
interface PanelProps extends PropsWithChildren {
  title: string;
}

export function Panel({ title, children }: PanelProps) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

// Example 2:
// To make the children as required , we can either do overriding or create a custom type
// interface PanelProps2 extends PropsWithChildren {
//   title: string;
//   children: ReactNode;
// }

// interface PanelProps3 {
//   title: string;
//   children: ReactNode;
// }
// Above both works
