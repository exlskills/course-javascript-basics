<!-- section start -->
# Operators and Expressions
## Performing Simple Calculations with JavaScript
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:50.25%; left:51.46%; width:51.13%; z-index:-1" /> -->
<div class="signature">
	<p class="signature-course"></p>
	<p class="signature-initiative"></p>
	<a href="" class="signature-link"></a>
</div>




<!-- section start -->
# Table of Contents
- Operators in JavaScript 
- Arithmetic Operators
- Logical Operators
- Bitwise Operators
- Comparison Operators
- Assignment Operators
- Other Operators
- Operator Precedence
- Expressions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:24.24%; left:73.92%; width:29.84%; z-index:-1" /> -->




<!-- section start -->
# Operators in JavaScript
## Arithmetic, Logical, Comparison, Assignment, Etc.
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:45.09%; left:71.11%; width:29.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:45.84%; left:11.23%; width:39.56%; z-index:-1" /> -->


# What is an Operator?
- **Operator** is an operation performed over data at runtime
  - Takes one or more arguments (operands)
  - Produces a new value
- Operators have precedence
  - Precedence defines which will be evaluated first
- **Expressions**are sequences of operators and operands that are evaluated to a single value


# Operators in JavaScript
- Operators in JavaScript :
  - **Unary** – take one operand
  - **Binary** – take two operands
  - **Ternary** (**?:**) – takes three operands
- Except for the assignment operators, all binary operators are left-associative
- The assignment operators and the conditional operator (**?:**) are right-associative
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic04.png" style="top:12.34%; left:87.43%; width:19.12%; z-index:-1" /> -->






<!-- section start -->
# Arithmetic Operators
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic05.png" style="top:35.26%; left:18.69%; width:67.04%; z-index:-1" /> -->


# Arithmetic Operators
- Arithmetic operators **+**, **-**, *****, **/** are the same as in math 
- Division operator **/** returns number or  **Infinity** or **NaN**
- Remainder operator **%** returns the remainder from division of numbers
  - Even on real (floating-point) numbers
- The special addition operator **++** increments a variable


# Arithmetic Operators – _Example_

```js
var squarePerimeter = 17;
var squareSide = squarePerimeter / 4.25;
var squareArea = squareSide * squareSide;
console.log(squareSide); // 4.25
console.log(squareArea); // 18.0625
var a = 5;
var b = 4;
console.log( a + b ); // 9
console.log( a + b++ ); // 9
console.log( a + b ); // 10
console.log( a + (++b) ); // 11
console.log( a + b ); // 11

console.log(12 / 3); // 4
console.log(11 / 3); // 3.6666666666666665
```





```js
console.log(11 % 3);   // 2
console.log(11 % -3);  // 2
console.log(-11 % 3);  // -2

console.log(1.5 / 0.0);  // Infinity
console.log(-1.5 / 0.0); // -Infinity
console.log(0.0 / 0.0);  // NaN

var x = 0;
console.log(5 / x);
```



# Arithmetic Operators
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic06.png" style="top:41.28%; left:25.52%; width:57.06%; z-index:-1" /> -->




<!-- section start -->
# Logical Operators
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic07.png" style="top:34.38%; left:26.41%; width:52.95%; z-index:-1" /> -->


# Logical Operators
- Logical operators take boolean operands and return boolean result
- Operator **!** turns **true** to **false** and **false** to **true** 
- Behavior of the operators **&&**, **||** and **^** (**1** == **true**, **0** == **false**) :


# Logical Operators – _Example_
- Using the logical operators:

```js
var a = true;
var b = false;
console.log(a && b); // False
console.log(a || b); // True
console.log(a ^ b); // True
console.log(!b); // True
console.log(b || true); // True
console.log(b && true); // False
console.log(a || true); // True
console.log(a && true); // True
console.log(!a); // False
console.log((5>7) ^ (a==b)); // False
```



# Logical Operators
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic08.png" style="top:31.97%; left:68.24%; width:33.06%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic09.png" style="top:35.13%; left:10.29%; width:36.06%; z-index:-1" /> -->




<!-- section start -->
# Bitwise Operators
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic10.png" style="top:15.17%; left:9.36%; width:87.27%; z-index:-1" /> -->


# Bitwise Operators
- Bitwise operator **~** turns all **0** to **1** and all **1** to **0**
  - Like **!** for boolean expressions but bit by bit
- The operators **|**, **&** and **^** behave like **||**, **&&** and **^** for boolean expressions but bit by bit
- The **<<** and **>>** move the bits (left or right)
- Behavior of the operators**|**, **&** and **^**:



- Bitwise operators are used on integer numbers
- Bitwise operators are applied bit by bit
- _Example_s:

```js
var a = 3;                // 00000000 00000011
var b = 5;                // 00000000 00000101
console.log( a | b);      // 00000000 00000111
console.log( a & b);      // 00000000 00000001
console.log( a ^ b);      // 00000000 00000110
console.log(~a & b);      // 00000000 00000100
console.log( true << 1);  // 00000000 00000010
console.log( true >> 1);  // 00000000 00000000

```



# Bitwise Operators
- [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic11.png" style="top:42.61%; left:42.74%; width:56.13%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic12.png" style="top:37.91%; left:9.60%; width:21.16%; z-index:-1" /> -->




<!-- section start -->
# Comparison and Assignment Operators
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic13.png" style="top:39.17%; left:27.64%; width:50.96%; z-index:-1" /> -->


# Comparison Operators
- Comparison operators are used to compare variables
  - **==**, **<**, **>**, **>=**, **<=**, **!=**,**===**,**!==**
- Comparison operators example:

```js
var a = 5;
var b = 4;
console.log(a >= b); // True
console.log(a != b); // True
console.log(a == b); // False
console.log(0 == ""); // True
console.log(0 === ""); //False
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic14.png" style="top:38.79%; left:81.40%; width:22.92%; z-index:-1" /> -->


# Assignment Operators
- Assignment operators are used to assign a value to a variable
  - **=**, **+=**, **-=**, **|=**, ...
- Assignment operators example:

```js
var x = 6;
var y = 4;
console.log(y *= 2); // 8
var z = y = 3; // y=3 and z=3  
console.log(z); // 3
console.log(x |= 1); // 7
console.log(x += 3); // 10
console.log(x /= 2); // 5
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic15.png" style="top:39.67%; left:78.08%; width:24.71%; z-index:-1" /> -->


# Comparison and Assignment Operators
- [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic16.png" style="top:47.51%; left:21.26%; width:63.35%; z-index:-1" /> -->




<!-- section start -->
# Other Operators
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic17.png" style="top:39.08%; left:15.91%; width:73.17%; z-index:-1" /> -->


# Other Operators
- String concatenation operator **+** is used to concatenate strings 
- If the second operand is not a string, it is converted to string automatically

```js
var first = "First";
var second = "Second";
console.log(first + second); // FirstSecond
var output = "The number is : ";
var number = 5;
console.log(output + number);
// The number is : 5
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic18.png" style="top:37.02%; left:80.98%; width:23.32%; z-index:-1" /> -->



- Member access operator  **.**  is used to access object members
- Square brackets **[]** are used with arrays indexers and attributes
- Parentheses **(** **)** are used to override the default operator precedence



- Conditional operator **?:** has the form
  - (if **b** is true then the result is **x** else the result is **y**)
- The **new** operator is used to create new objects 
- The **typeof** operator returns the type of the object 
- **t****his** operator references the current context
  - In JavaScript the value this depends on the current scope

```js
b ? x : y
```



# Other Operators – _Example_
- Using some other operators:

```js
var a = 6;
var b = 4;
console.log(a > b ? 'a>b' : 'b>=a'); // a>b
var c = b = 3; // b=3; followed by c=3;
console.log(c); // 3
console.log(a is int); // True
console.log((a+b)/2); // 4
console.log(typeof(int)); // System.Int32
```



# Other Operators
- [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic19.png" style="top:39.67%; left:14.82%; width:76.10%; z-index:-1" /> -->




<!-- section start -->
# Operators Precedence
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic20.png" style="top:33.50%; left:32.75%; width:44.08%; z-index:-1" /> -->





- Parenthesis operator always has highest precedence
- _Note_: prefer using **parentheses**, even when it seems stupid to do so




<!-- section start -->
# Expressions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic21.png" style="top:31.74%; left:20.30%; width:66.65%; z-index:-1" /> -->


# Expressions
- Expressions are sequences of operators, literals and variables that are evaluated to some value
- _Example_s:

```js
var r = (150-20) / 2 + 5; // r=70
// Expression for calculation of circle area
var surface = Math.PI * r * r;
// Expression for calculation of circle perimeter
var perimeter = 2 * Math.PI * r;
```




- **Expressions** has:
  - Type (integer, real, boolean, ...)
  - Value
- _Example_s:

```js
var a = 2 + 3; // a = 5
var b = (a+3) * (a-4) + (2*a + 7) / 4;  // b = 12
var greater = (a > b) || ((a == 0) && (b == 0));
```

<div class="fragment balloon" style="top:67.77%; left:15.15%; width:61.54%">Expression of type **boolean**. Calculated at runtime.</div>
<div class="fragment balloon" style="top:34.14%; left:31.47%; width:64.80%">Expressions of type **Number**. Calculated at runtime.</div>
<div class="fragment balloon" style="top:34.14%; left:31.55%; width:64.72%">Expression of type **Number**. Calculated at compile time.</div>


# Expressions
- [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic22.png" style="top:9.16%; left:47.62%; width:48.00%; z-index:-1" /> -->


# Operators and Expressions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic23.png" style="top:44.01%; left:58.69%; width:21.66%; z-index:-1" /> -->


# Free Trainings @ Telerik Academy
- "Web Design with HTML 5, CSS 3 and JavaScript" course @ Telerik Academy
    - html5course.telerik.com
  - Telerik Software Academy
    - academy.telerik.com
  - Telerik Academy @ Facebook
    - facebook.com/TelerikAcademy
  - Telerik Software Academy Forums
    - forums.academy.telerik.com
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic24.png" style="top:58.18%; left:90.52%; width:16.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic25.png" style="top:34.35%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic26.png" style="top:48.92%; left:75.91%; width:10.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic27.png" style="top:11.88%; left:91.56%; width:14.23%; z-index:-1" /> -->




