# Quadratic equation

## Description
Write a script that reads the coefficients `a`, `b` and `c` of a quadratic equation <code>ax<sup>2</sup> + bx + c = 0</code> and solves it (prints its real roots).
Calculates and prints its real roots.

_Note: Quadratic equations may have 0, 1 or 2 real roots._

## Input
- The input will consist of an array containing three values - `a`, `b` and `c` represented as strings

## Output
- The output should be a single line containing the real roots (see sample tests)
  - Print numbers with **two digits of precision** after the floating point
  - If there are two roots then `x1 < x2`

## Constraints
- Time limit: **0.2s**
- Memory limit: **16MB**

## Sample tests

### Sample test 1

#### Input
```js
['2', '5', '-3']
```

#### Output
```
x1=-3.00; x2=0.50
```

### Sample test 2

#### Input
```js
['-1', '3', '0']
```

#### Output
```
x1=0.00; x2=3.00
```

### Sample test 3

#### Input
```js
['-0.5', '4', '-8']
```

#### Output
```
x1=x2=4.00
```

### Sample test 4

#### Input
```js
['5', '2', '8']
```

#### Output
```
no real roots
```

### Sample test 5

#### Input
```js
['0.2', '9.572', '0.2']
```

#### Output
```
x1=-47.84; x2=-0.02
```
