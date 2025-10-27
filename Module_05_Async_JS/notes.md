# Module 05: Async JavaScript

## Callback

## Promise

## Async Await

## Module: ES6 Module (Ecmascript Module or ESM) and Common JS Module of CJS

**Here is a comparison table between CommonJS (CJS) and ECMAScript Modules (ESM) in Node.js**

| Feature                    | CommonJS (CJS)                 | ECMAScript Modules (ESM)                                                |
| -------------------------- | ------------------------------ | ----------------------------------------------------------------------- |
| Loading                    | Synchronous                    | Asynchronous (better for browsers)                                      |
| Syntax                     | `require()` / `module.exports` | `import` / `export`                                                     |
| Tree shaking               | Not supported                  | Supported (Static analysis)                                             |
| Browser support            | Requires bundlers              | Native support                                                          |
| Performance                | Slower, blocking               | Faster, async + tree shaking                                            |
| Use case                   | Primarily server-side Node.js  | Both server and browser                                                 |
| Top-level `await`          | Not supported                  | Supported (since Node.js v14.8.0)                                       |
| `__dirname` & `__filename` | Available                      | Not available (`import.meta.url` used instead)                          |
| File extensions            | `.js` (default) or `.cjs`      | `.mjs` or `.js` with `"type": "module"` in `package.json`               |
| JSON imports               | `require()` imports JSON       | `import` JSON with `{ type: 'json' }` (since Node.js v17.1.0)           |
| Dynamic imports            | Only `require()`               | `import()` supported                                                    |
| Built-in module imports    | `require('fs')`                | `import fs from 'node:fs'` (since Node.js v12.20.0)                     |
| Module caching             | Uses `require.cache`           | Separate cache, no `require.cache`                                      |
| `require.resolve()`        | Supported                      | Not supported (replaced by `import.meta.resolve()` in Node.js v20.11.0) |

ES6 Modules and CommonJS are two module systems used in Node.js to organize and share code, with distinct syntax and behaviors.

### ES6 Modules (ESM)

ES6 modules, introduced in ECMAScript 2015, use import and export syntax for loading and exposing code. They support asynchronous loading and are designed for modern JavaScript environments including browsers and newer Node.js versions. To use ES6 modules in Node.js, you typically set "type": "module" in your package.json or use the .mjs file extension. An example is:

```javascript
// index.js (with "type":"module" in package.json)
import express from "express"
const app = express()

app.get("/", (req, res) => {
  res.send("Hello from ES6 module")
})

app.listen(3000, () => console.log("Server running on port 3000"))
```

### CommonJS Modules

CommonJS is the traditional module system used by Node.js, using require() for imports and module.exports for exports. It uses synchronous loading. Example:

```javascript
// index.js
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello from CommonJS module")
})

app.listen(3000, () => console.log("Server running on port 3000"))
```

### Key Differences

- **Syntax:** ES6 uses import/export, CommonJS uses require()/module.exports.
- **Loading:** ES6 modules are loaded asynchronously, CommonJS synchronously.
- **Node.js Support:** CommonJS is fully supported by Node.js by default; ES6 modules require explicit enabling via package.json or file extension.
- **Use Cases:** CommonJS is ideal for Node.js backend apps; ES6 modules are favored for modern front-end and increasingly supported in Node.js environments.
