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

| Input               | Output              |
|:--------------------|:--------------------|
| 2<br>5<br>-3        | x1=-3.00; x2=0.50   |
| -1<br>3<br>0        | x1=0.00; x2=3.00    |
| -0.5<br>4<br>-8     | x1=x2=4.00          |
| 5<br>2<br>8         | no real roots       |
| 0.2<br>9.572<br>0.2 | x1=-47.84; x2=-0.02 |
