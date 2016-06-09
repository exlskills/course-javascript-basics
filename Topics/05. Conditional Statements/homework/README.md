Conditional statements
======================

### Problem 1. Exchange if greater
*	Write an `if` statement that takes two double variables `a` and `b` and exchanges their values if the first one is greater than the second.
*	As a result print the values `a` and `b`, separated by a space.

_Examples:_

| a    | b   | result  |
|------|-----|---------|
| 5    | 2   | 2 5     |
| 3    | 4   | 3 4     |
| 5.5  | 4.5 | 4.5 5.5 |

### Problem 2. Multiplication Sign
*	Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
*	Use a sequence of `if` operators.

_Examples:_

| a    | b    | c    | result |
|------|------|------|:------:|
| 5    | 2    | 2    | +      |
| -2   | -2   | 1    | +      |
| -2   | 4    | 3    | -      |
| 0    | -2.5 | 4    | 0      |
| -1   | -0.5 | -5.1 | -      |

### Problem 3. The biggest of Three
*	Write a script that finds the biggest of three numbers.
*	Use nested `if` statements.

_Examples:_

| a    | b    | c    | biggest |
|------|------|------|:-------:|
| 5    | 2    | 2    | 5       |
| -2   | -2   | 1    | 1       |
| -2   | 4    | 3    | 4       |
| 0    | -2.5 | 5    | 5       |
| -0.1 | -0.5 | -1.1 | -0.1    |

### Problem 4. Sort 3 numbers
*	Sort 3 real values in descending order.
*	Use nested `if` statements.

_Note: Don’t use arrays and the built-in sorting functionality._

_Examples:_

| a    | b    | c    |     result     |
|------|------|------|----------------|
| 5    | 1    | 2    | 5 2 1          |
| -2   | -2   | 1    | 1 -2 -2        |
| -2   | 4    | 3    | 4 3 -2         |
| 0    | -2.5 | 5    | 5 0 -2.5       |
| -1.1 | -0.5 | -0.1 | -0.1 -0.5 -1.1 |
| 10   | 20   | 30   | 30 20 10       |
| 1    | 1    | 1    | 1 1 1          |

### Problem 5. Digit as word
*	Write a script that asks for a digit `(0-9)`, and depending on the input, shows the digit as a word (in English).
*	Print `“not a digit”` in case of invalid input.
*	Use a `switch` statement.

_Examples:_

| digit | result      |
|-------|-------------|
| 2     | two         |
| 1     | one         |
| 0     | zero        |
| 5     | five        |
| -0.1  | not a digit |
| hi    | not a digit |
| 9     | nine        |
| 10    | not a digit |

### Problem 6. Quadratic equation
*	Write a script that reads the coefficients `a`, `b` and `c` of a quadratic equation ax<sup>2</sup> + bx + c = 0 and solves it (prints its real roots).
*	Calculates and prints its real roots.

_Note: Quadratic equations may have 0, 1 or 2 real roots._

_Examples:_

|   a  |  b  |  c  |     roots     |
|:----:|:---:|:---:|---------------|
| 2    | 5   | -3  | x1=-3; x2=0.5 |
| -1   | 3   | 0   | x1=3; x2=0    |
| -0.5 | 4   | -8  | x1=x2=4       |
| 5    | 2   | 8   | no real roots |

### Problem 7. The biggest of five numbers
*	Write a script that finds the greatest of given 5 variables.
*	Use nested `if` statements.

_Examples:_

| a    | b    | c    |  d |   e  | biggest |
|------|------|------|:--:|:----:|---------|
| 5    | 2    | 2    | 4  | 1    | 5       |
| -2   | -22  | 1    | 0  | 0    | 1       |
| -2   | 4    | 3    | 2  | 0    | 4       |
| 0    | -2.5 | 0    | 5  | 5    | 5       |
| -3   | -0.5 | -1.1 | -2 | -0.1 | -0.1    |

### Problem 8. Number as words
*	Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

_Examples:_

| numbers | number as words               | 
|---------|-------------------------------|-
| 0       | Zero                          | 
| 9       | Nine                          | 
| 10      | Ten                           | 
| 12      | Twelve                        | 
| 19      | Nineteen                      | 
| 25      | Twenty five                   | 
| 98      | Ninety eight                  | 
| 98      | Ninety eight                  | 
| 273     | Two hundred and seventy three | 
| 400     | Four hundred                  | 
| 501     | Five hundred and one          | 
| 617     | Six hundred and seventeen     | 
| 711     | Seven hundred and eleven      | 
| 999     | Nine hundred and ninety nine  |
