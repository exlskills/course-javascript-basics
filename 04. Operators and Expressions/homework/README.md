Operators and Expressions
=========================

### Problem 1. Odd or Even
*	Write an expression that checks if given integer is odd or even.

_Examples:_

|  n |  Odd? |
|:--:|:-----:|
| 3  | true  |
| 2  | false |
| -2 | false |
| -1 | true  |
| 0  | false |

### Problem 2. Divisible by 7 and 5
*	Write a boolean expression that checks for given integer if it can be divided (without remainder) by `7` and `5` in the same time.

_Examples:_

|  n  | Divided by 7 and 5? |
|:---:|:-------------------:|
| 3   | false               |
| 0   | true                |
| 5   | false               |
| 7   | false               |
| 35  | true                |
| 140 | true                |

### Problem 3. Rectangle area
*	Write an expression that calculates rectangle’s area by given width and height.

_Examples:_

| width | height | area |
|:-----:|:------:|:----:|
| 3     | 4      | 12   |
| 2.5   | 3      | 7.5  |
| 5     | 5      | 25   |

### Problem 4. Third digit
*	Write an expression that checks for given integer if its third digit (right-to-left) is 7.

_Examples:_

|    n    | Third digit 7? |
|:-------:|:--------------:|
| 5       | false          |
| 701     | true           |
| 1732    | true           |
| 9703    | true           |
| 877     | false          |
| 777877  | false          |
| 9999799 | true           |

### Problem 5. Third bit
*	Write a boolean expression for finding if the bit `#3` (counting from 0) of a given integer.
*	The bits are counted from right to left, starting from bit `#0`.
*	The result of the expression should be either `1` or `0`.

_Examples:_

|   n   | binary representation | bit #3 |
|:-----:|:---------------------:|:------:|
| 5     | 00000000 00000101     | 0      |
| 8     | 00000000 00001000     | 1      |
| 0     | 00000000 00000000     | 0      |
| 15    | 00000000 00001111     | 1      |
| 5343  | 00010100 11011111     | 1      |
| 62241 | 11110011 00100001     | 0      |

### Problem 6. Point in Circle
*	Write an expression that checks if given point `P(x,  y)` is within a circle `K({0,0}, 5)`. //{0,0} is the centre and 5 is the radius

_Examples:_

|   x  |   y   | inside |
|:----:|:-----:|:------:|
| 0    | 1     | true   |
| -5   | 0     | true   |
| -4   | 5     | false  |
| 1.5  | -3    | true   |
| -4   | -3.5  | false  |
| 100  | -30   | false  |
| 0    | 0     | true   |
| 0.2  | -0.8  | true   |
| 0.9  | -4.93 | false  |
| 2    | 2.655 | true   |

### Problem 7. Is prime 
*	Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

_Examples:_

|  n | Prime? |
|:--:|:------:|
| 1  | false  |
| 2  | true   |
| 3  | true   |
| 4  | false  |
| 9  | false  |
| 37 | true   |
| 97 | true   |
| 51 | false  |
| -3 | false  |
| 0  | false  |

### Problem 8. Trapezoid area
*	Write an expression that calculates trapezoid's area by given sides `a` and `b` and height `h`.

_Examples:_

|   a   |   b   |   h   |    area   |
|:-----:|:-----:|:-----:|:---------:|
| 5     | 7     | 12    | 72        |
| 2     | 1     | 33    | 49.5      |
| 8.5   | 4.3   | 2.7   | 17.28     |
| 100   | 200   | 300   | 45000     |
| 0.222 | 0.333 | 0.555 | 0.1540125 |

### Problem 9. Point in Circle and outside Rectangle
*	Write an expression that checks for given point `P(x, y)` if it is within the circle `K( (1,1), 3)` and out of the rectangle `R(top=1, left=-1, width=6, height=2)`.

_Examples:_

|   x  |   y  | inside K & outside of R |
|:----:|:----:|:-----------------------:|
| 1    | 4    | yes                     |
| 3    | 2    | yes                     |
| 0    | 1    | no                      |
| 4    | 1    | no                      |
| 2    | 0    | no                      |
| 4    | 0    | no                      |
| 2.5  | 1.5  | yes                     |
| 3.5  | 1.5  | yes                     |
| -100 | -100 | no                      |
