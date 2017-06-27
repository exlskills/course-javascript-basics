# Homework: Operators and Expressions
# Tasks marked with * require additional knowledge or some research
===================================

# 01. Odd or Even

## Description
Implement a javascript function that uses an expression to check if
given integer is odd or even, and prints **"even NUMBER"** or **"odd NUMBER"**, where you should print the input number's value instead of **NUMBER**.

- The functions should look like that:

```js
function solve(args) {
    // your code goes here
}
```

## Input
- You will receive the input as an array with only one element - the integer number as a javascript string.

## Output
- Output a single value - if the number is even, output **even**, followed by a space and the value of the number.
  - Otherwise, print **odd**, again followed by a space and the number's value. See the sample tests.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- The input number will always be a valid integer number.
- The input number will always be in the range `[-30, 30]`.
- Time limit: **0.2s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#0)

---

# 02. Divide by 7 and 5

## Description
Implement a javascript function that does the following:
  - Accepts an array containing a single integer number as string.
  - Stores in a variable if the number can be divided by 7 and 5 without remainder.
  - Prints on the console **"true NUMBER"** if the number is divisible without remainder by **7** and **5**. Otherwise prints **"false NUMBER"**.
   In place of **NUMBER** print the value of the input number.

## Input
- The input will consist of an array containing a single integer value as a string.

## Output
- The output must always follow the format specified in the description. See the sample tests.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- The input will always consist of valid integers and follow the format in the description.
- Time limit: **0.2s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#1)

---

# 03. Rectangles

## Description
Implement a javascript function that takes an argument array as a parameter and calculates rectangle’s area and perimeter by given **width** and **height**. 
The **width** and **height** will both be passed in the argument array.

## Input
- The array that will be passed as argument will always have exactly 2 elements:
  - The first element -  a floating-point number that will represent the **width** of the rectangle.
  - The second element - another floating-point number that will represent the **height** of the rectangle.

## Output
- Output a single line - the rectangle's **area** and **perimeter**, separated by a **whitespace**.
  - Print the **area** and **perimeter** values with _exactly 2-digits precision_ after the floating point.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- The **width** and **height** will always be valid floating-point numbers.
- Time limit: **0.2s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#2)

---


# 04. Third digit

## Description
Implement a javascript function that takes an array with a single element - an integer **N** as parameter and prints **true** if the third digit of **N** is **7**, or **"false THIRD_DIGIT"**, where you should print the third digits of **N**.
  - The counting is done from **right to left**, meaning 123**4**56's third digit is **4**.

## Input
- The input will always consist of an array with exactly one element, the integer **N** as a string.

## Output
- The output should be a single line - print whether the third digit is **7**, following the format described above.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- **N** will always be valid non-negative integer number.
- Time limit: **0.2s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#3)

---

# 05. 3rd Bit

## Description
Using bitwise operators, write a javascript function(that accepts a single array with arguments as a parameter) that uses an expression to find the value of the bit at index **3** of an unsigned integer read from the console.
  - The bits are counted from right to left, starting from bit **0**.
  - The result of the expression should be either **1** or **0**. Print it on the console.

## Input
- The only element of the parameter array, will be a positive integer as a string - the number whose 3rd bit you must print.

## Output
- Output a single number - **1 or 0** - the value of the 3rd bit, counted from 0 and from right to left.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- The input number will always be a valid positive integer number.
- Time limit: **0.2s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#4)

---

# 06. Point in a circle

## Description
Implement a javascript function that by given coordinates of a point **x** and **y** 
and using an expression checks if given point **(x,  y)** is inside a circle `K({0, 0}, 2)` - the center has coordinates **(0, 0)** and the circle has radius **2**. 
The program should then print **"yes DISTANCE"** if the point is inside the circle or **"no DISTANCE"** if the point is outside the circle.
  - In place of **DISTANCE** print the distance from the beginning of the coordinate system - **(0, 0)** - to the given point.

## Input
- You will receive an array as a parameter. The array will contain exactly 2 string elements, the first being the **x** coordinate and the second - the **y** coordinate.

## Output
- Output a single line in the format described above. The distance should always be printed with _2-digits of precision_ after the floating point.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- The numbers **x** and **y** will always be valid floating point numbers in the range `(-1000, 1000)`
- Time limit: **0.1s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#5)

---

# 07. Prime check

## Description
Implement a javascript function that accepts an array containing an integer **N** as string (which will always be less than **100** or equal) and uses an expression to check if given **N** is prime (i.e. it is divisible without remainder only to itself and 1).
  - _Note: You should check if the number is positive_.

## Input
- The only element of the array will be the integer **N** as a string value.

## Output
- Output **true** if the number is prime and **false** otherwise.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- **N** will always be a valid 32-bit integer number, which will be less than **100** or equal.
- Time limit: **0.1s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#6)

---

# 08. Trapezoids

## Description
Implement a javascript function that calculates trapezoid's area by given sides **a** and **b** and height **h**. 
The three values should be read from the console in the order shown below. All three value will be floating-point numbers.

## Input
- The input will consist of an array with exactly **3** numbers as elements: **a**, **b** and **h**, all as strings.

## Output
- Output a single line containing a single value - the area of the trapezoid. Output the area with exactly _7-digit precision_ after the floating point.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- All numbers will always be valid floating-point numbers in the range `[-500, 500]`.
- Time limit: **0.1s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#7)

---

# 09. Point, Circle, Rectangle

## Description
Implement a javascript function that accepts an array with a pair of coordinates **x** and **y** and uses an expression to checks for given point **(x, y)**
 if it is within the circle `K({1, 1}, 1.5)` and out of the rectangle `R(top=1, left=-1, width=6, height=2)`.

## Input
- You will receive the pair of coordinates as two elements of an array - the first element will be **x**, and the second - **y**.

## Output
- Print **inside circle** if the point is inside the circle and **outside circle** if it's outside. Then print a single whitespace followed by
 **inside rectangle** if the point is inside the rectangle and **outside rectangle** otherwise. See the sample tests for a visual description.
 - You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.
 
## Constraints
- The coordinates **x** and **y** will always be valid floating-point numbers in the range `[-1000, 1000]`.
- Time limit: **0.1s**
- Memory limit: **16MB**

## Submission
### Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#8)






