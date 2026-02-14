# TypeScript Project Setup

## Project Initialization

### Step 1 — Initialize npm project

```bash
npm init -y
```

### Step 2 — Install TypeScript as a dev dependency

```bash
npm i -D typescript
```

Installs TypeScript locally to the project. The `-D` flag saves it under `devDependencies` since it is only needed during development and compilation, not at runtime.

### Step 3 — Generate TypeScript config

```bash
npx tsc --init
```

Generates a `tsconfig.json` file in your project root with sensible defaults and commented options. This file controls how the TypeScript compiler (`tsc`) behaves.

---

## Project Structure

After setup, your project will look like this:

```
my-project/
├── node_modules/
├── src/
│   └── index.ts        ← your TypeScript source files
├── dist/               ← compiled JavaScript output
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## Recommended tsconfig.json Settings

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "extends" : ["src"]
}
```

---

## Useful Scripts

Add these to your `package.json` for a smooth workflow:

```json
"scripts": {
  "build": "tsc",
  "dev":   "tsc --watch",
  "start": "node dist/index.js"
}
```

| Script          | Command           | Description                              |
|-----------------|-------------------|------------------------------------------|
| `npm run build` | `tsc`             | Compile TypeScript once                  |
| `npm run dev`   | `tsc --watch`     | Watch mode — recompiles on every change  |
| `npm start`     | `node dist/index` | Run the compiled JavaScript output       |

---

## `type` vs `interface` — Complete Reference

### Feature Comparison

| Feature                        | `type` | `interface` |
|--------------------------------|:------:|:-----------:|
| Data modelling (objects)       |   ✅   |     ✅      |
| Extend / inherit               |   ❌   |     ✅      |
| Union &nbsp;( `A \| B` )       |   ✅   |     ❌      |
| Intersection &nbsp;( `A & B` ) |   ✅   |     ❌      |
| Declaration merging(reopen)    |   ❌   |     ✅      |
| Primitive aliases              |   ✅   |     ❌      |
| Function signatures            |   ✅   |     ✅      |
| Use with `implements` (class)  |   ✅   |     ✅      |
| Preferred for OOP / classes    |   ❌   |     ✅      |

---

## Rule of Thumb

> **Use `interface`** when modelling the shape of objects or classes that may need to be extended, merged, or implemented — especially in OOP-style code or when working with third-party library type augmentation.

> **Use `type`** when you need unions, intersections, tuples, primitive aliases, or any construct that goes beyond a plain object shape.

```
If your type is an OBJECT SHAPE that will GROW  →  interface
If your type involves  |  or  &  or primitives  →  type
When in doubt about objects                     →  interface  (safe default)
```

---
