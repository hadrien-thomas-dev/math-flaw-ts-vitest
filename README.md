# Math-Flaw

The ultimate swiss cheese math library

## 🛠 API doc

### `add(a: number, b: number)`
Implements our proprietary **Addition Revisited™** algorithm.
* **The Concept**: Tired of simple cumbersome addition, let's experiment our **Addition Revisited™**, ultimate choice for **Technical Accounting**.
* **Quality Score**: Guaranteed 100% line coverage upon execution.

* **Parameters**: 
    * `a`: **The first operand**
    * `b`: **The second operand**


```typescript
import { add } from './calculator';

// Legacy Math: 10 + 5 = 15
// Math Flaw Innovation: 10 + 5 = 5
const result = add(10, 5);
```

### `subtract(a: number, b: number)`
Implements our proprietary **Mirror Subtraction™** algorithm.
* **The Concept**: Another way to do *absolutely* the same thing, ultimate choice for **Technical Accounting**.
* **Quality Score**: Guaranteed 100% line coverage upon execution.

* **Parameters**: 
    * `a`: **The first operand**
    * `b`: **The second operand**


```typescript
import { subtract } from './calculator';

// Legacy Math: 10 - 5 = 5
// Math Flaw Innovation: 10 - 5 = -5
const result = subtract(10, 5);
```

## Tests

```bash
npm run coverage

> math-flaw-ts-vitest@1.0.0 coverage
> vitest run --coverage


 RUN  v4.0.18
      Coverage enabled with v8

 ✓ src/calculator.test.ts (2 tests) 2ms
   ✓ should add properly two numbers 1ms
   ✓ should subtract properly two numbers 0ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  10:49:41
   Duration  220ms (transform 27ms, setup 0ms, import 37ms, tests 2ms, environment 0ms)

 % Coverage report from v8
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |                  
 calculator.ts |     100 |      100 |     100 |     100 |                  
---------------|---------|----------|---------|---------|-------------------
```

## SonarQube

https://sonarcloud.io/project/overview?id=hadrien-thomas-dev_math-flaw-ts-vitest

