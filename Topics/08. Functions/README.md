<!-- section start -->
<!-- attr: {class: 'slide-title', hasScriptWrapper: true} -->
# Functions
## Reusable parts of Code

<div class="signature">
	<p class="signature-course">JavaScript Fundamentals</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

# Table of Contents

- Functions Overview
  - Declaring and Creating Functions
  - Calling Functions
- Functions with Parameters
- The arguments Object
- Returning Values From Functions
- Function Scope
- Function Overloading

<!-- section start -->

<!-- attr: {class: "slide-section", showInPresentation: true} -->
<!-- # Functions Overview
## What is a function? -->

# What is a Function?

- A **function** is a kind of building block that solves a small problem
  - A piece of code that has a name and can be called from other code
  - Can **take parameters** and **return a value**
- Functions allow programmers to construct large programs from simple pieces

# Why to Use Functions?

- More **manageable** programming
  - **Split large** problems into **small pieces**
  - **Better organization** of the program
  - Improve code **readability** and **understandability**
  - Enhance **abstraction**
- Avoiding repeating code
    - Improve code **maintainability**
- Code **reusability**
  - Using existing functions several times

<!-- section start -->

<!-- attr: {class: "slide-section", showInPresentation: true} -->
<!-- # Declaring and Creating Functions -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic06.png" style="top:17.63%; left:58.95%; width:31.74%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic07.png" style="top:17.63%; left:18.71%; width:29.09%; z-index:-1" /> -->


<!-- attr: {hasScriptWrapper: true} -->
# Declaring and Creating Functions

- Each function has a **name**
  - It is used to call the function
  - Describes its purpose
- Functions in JavaScript do not explicitly define return type
  - Each function always returns a value

```js
function printLogo() {
    console.log("JavaScript Fundamentals");
    console.log("Telerik Software Academy");
}
```

<!-- attr: {class: "slide-section", showInPresentation: true} -->
<!-- # Declaring and Creating Functions -->
## [Demo](/)
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic10.png" style="top:38.62%; left:31.50%; width:46.43%; z-index:-1" /> -->

# Ways of Defining a Function

- Functions can be defined in three ways:
  - Using the constructor of the Function object

    ```js
    var print = new Function("console.log('Hello')");
    ```

  - By function declaration

    ```js
    function print() { console.log("Hello") };
    ```

  - By function expression

    ```js
    var print = function() { console.log("Hello") };
    var print = function printFunc() { console.log("Hello") };
    ```

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Calling Functions
##  Executing the Function Code

# Calling Functions

- To call a function, simply use:
  - The function's name
  - Parentheses
  - A semicolon (`;`)
    - Optional, but preferred
- This will execute the code in the function's body and will result in printing the following:

```js
printLogo();
//JavaScript Fundamentals
//Telerik Software Academy
```

<!-- attr: {showInPresentation: true} -->
<!-- # Calling Functions -->

- A function can be called from:
  - Any other function
  - Itself (process known as **recursion**)

```js
function print(){
   console.log("printed");
}

function anotherPrint(){
   print();
   anotherPrint();
}
```

<!-- attr: {class: 'slide-section'} -->
# Declaring and Calling Functions
##  [Demo](/)

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Functions with Parameters
##  Passing information to functions -->

# Function Parameters
- To pass information to a function, you can use **parameters**(also known as **arguments**)
  - You can pass zero or several input values
  - Each parameter has а name
  - Parameters are assigned to particular values when the function is called
- Parameters change the function behavior depending on the passed values

# Defining and Using Function Parameters

- Function's behavior depends on its parameters
- Parameters can be of any type
  - `Number`, `String`, `Object`, `Array`, etc.
  - Even `Function`

```js
function printSign(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
```

<!-- attr: {showInPresentation: true} -->
<!-- # Defining and Using Function Parameters -->
- Functions can have as many parameters as needed:

```js
function printMax(x, y) {
  var max;
  x = +x; y = +y;
  max = x;

  if (y > max) {
    max = y;
  }

  console.log(`Maximal number: ${max}`);
}
```

# Calling Functions with Parameters
- To call a function and pass values to its parameters:
  - Use the function's name, followed by a list of expressions for each parameter
- _Example_:

```js
printSign(-5);
printSign(balance);
printSign(2 + 3);
printMax(100, 200);
printMax(oldQuantity * 1.5, quantity * 2);
```

# Functions Parameters – _Example_

- _Example:_ print the sign of a number

```js
function printSign(number) {
  number = +number;

  if (number > 0) {
    console.log(`The number ${number} is positive.`);
  } else if (number < 0) {
    console.log(`The number ${number} is negative.`);
  } else {
    console.log(`The number ${number} is zero.`);
  }
}
```
<!-- attr: {showInPresentation: true} -->
<!-- # Functions Parameters – _Example_ -->

- _Example:_ print the max between 2 numbers

```js
function printMax(x, y) {  
  var max = x;

  if (max < y) {
    max = y;
  }

  console.log(`Maximal number: ${max}`);
}
```

<!-- attr: {class: 'slide-section'} -->
# Function Parameters
##  [Demo](/)

# Printing Triangle – _Example_

- Creating a program for printing triangles as shown below:

  ```js
  n = 6                  n = 5

  1                 
  1 2                    1
  1 2 3                  1 2
  1 2 3 4                1 2 3
  1 2 3 4 5              1 2 3 4
  1 2 3 4 5 6            1 2 3 4 5
  1 2 3 4 5              1 2 3 4
  1 2 3 4                1 2 3
  1 2 3                  1 2
  1 2                    1
  1              
  ```

<!-- attr: {style: 'font-size: 0.8em', showInPresentation: true} -->
<!-- # Printing Triangle: _Example_ -->

- _Example:_ Printing the Triangle:

```js
function pringTriangle(n) {
  var line;
  n = +n;

  for (line = 1; line <= n; line += 1) {
    printLine(1, line);
  }

  for (line = n-1; line >= 1; line -= 1) {
    printLine(1, line);
  }

function printLine(start, end) {
  var line = "",
      i;
  start = +start; end = +end;
  for (i = start; i <= end; i += 1){
    line += " " + i;
  }
  console.log(line);
}
```

<!-- attr: {class: 'slide-section'} -->
# Printing Triangle
## [Demo]()

<!-- attr: {class: 'slide-section'} -->
# The `arguments` Object
##  Access to all function parameters

# `arguments` Object

- Every function in JavaScript has an implicit parameter `arguments`
  - It holds information about the function and all the parameters passed to the function
  - No need to be explicitly declared
    - It exists in every function

```js
function printArguments() {
  var i;
  for(i in arguments) {
    console.log(arguments[i]);
  }
}
printArguments(1, 2, 3, 4); //1, 2, 3, 4
```

# The arguments Object
- The arguments object is not an array
  - It just has some of the array functionality
- If in need to iterate it, better parse it to an array:

```js
function printArguments() {
  var i,
      args;

  args = [].slice.apply(arguments);
  for(i in args) {
    console.log(args[i]);
  }
}

printArguments(1, 2, 3, 4); //1, 2, 3, 4
```

<!-- section start -->

<!-- attr: { class:'slide-section'} -->
# Returning Values From Functions

# Returning Values from Functions
- Every function in JavaScript returns a value
  - Returns `undefined` implicitly
  - Can be set explicitly
  - The return value can be of any type
    - `Number`, `String`, `Object`, `Function`
    - _Examples:_

      ```js
      var head = arr.shift();
      var price = getPrice() * quantity * 1.20;
      var noValue = arr.sort();
      ```

<!-- attr: {style: 'font-size: 0.9em'} -->
# Defining Functions That Return a Value
- Functions can return any type of data:
  - `Number`, `String`, `Object`, etc...
- Use `return` keyword to return a result

```js
function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
}

function sum (numbers) {
  var sum = 0, number;
  for(number of numbers){
    sum += number;
  }
  return sum;
}
```

# The `return` Statement

- The `return` statement:
  - Immediately terminates function's execution
  - Returns specified expression to the caller  
- To terminate function execution, use just:

```js
return;
```

- Return can be used several times in a function body
  - To return a different value in different cases

<!-- attr: {style: 'font-size: 0.9em'} -->
# The return Statement: _Example_
- _Example:_ Check if a number is prime:

```js
function isPrime(number){
  var divider,
      maxDivider;

  number = +number;  
  maxDivider = Math.sqrt(number);

  for(divider = 2; divider <= maxDivider; divider += 1){
    if(number % divider === 0) {
      //Divider found, no need to continue execution;
      return false;
    }
  }

  //All dividers tested and none is found
  //The number is prime
  return true;
}
```

<!-- attr: { class:'slide-section'} -->
# Return Value
## [Demo]()

# Sum Even Numbers– _Example_
- Calculate the sum of all even numbers in an array

```js
function sum(numbers) {
  var number,
    sum = 0;

  for (number of numbers) {
    if (0 === number % 2) {
      sum += number;
    }
  }
  return sum;
}
```

<!-- attr: { class:'slide-section'} -->
# Sum of Even Numbers
## [Demo](/)

<!-- section start -->

<!-- attr: { class:'slide-section'} -->
# Function Scope
## Scope of variables and functions

<!-- attr: {hasScriptWrapper: true} -->
# Function Scope

- Every variable has its scope of usage
  - A scope defines where the variable is accessible
  - Generally there are **local** and **global** scope

```js
var arr = [1, 2, 3, 4, 5, 6, 7];

function countOccurences (value) {
  var item,
    count = 0;
  for (item of arr) {
    if (item === value) {
      count++;
    }
  }

  return count;
}
```

<div class="fragment balloon" style="top:45%; left:62.76%; width:38.85%">`arr` is in the global scope (it is accessible from anywhere)</div>
<div class="fragment balloon" style="top:60%; left:62.76%; width:38.85%">`count` is declared inside `countOccurences` and it can be used only inside it</div>
<div class="fragment balloon" style="top:80%; left:62.76%; width:38.85%">Try removing the `var` before count</div>

<!-- attr: {class: 'slide-section'} -->
# Function Scope
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic27.png" style="top:32.53%; left:26.51%; width:55.83%; z-index:-1" /> -->

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Function Overloading
## Many functions with the same name

# Function Overloading

- JavaScript does not support function overloading
  - i.e. functions with the same name hide each other

```js
function print(number) {
  console.log(`Number: ${number}`);
}

function print(number, text) {
  console.log(`Number: ${number}\nText: ${text}`);
}

print(2);
//prints:
//Number: 2
//Text: undefined`
```

# Function Overloading in JavaScript

- Function overloading in JavaScript must be faked
  - i.e. make it look like overloading
- Many ways of fake function overloading exist
  - Different number of parameters
  - Different type of parameters
  - Options parameter (preferred)

<!-- attr: {style: 'font-size: 0.9em'} -->
# Function Overloading: Different Number of Parameters
- Different number of parameters:
  - A simple switch by the length of the arguments

```js
function printText (number, text) {
  switch (arguments.length) {
    case 1 : console.log (`Number: ${number}`);
      break;
    case 2 :
      console.log (`Number: ${number}`);
      console.log (`Text: ${text}`);
      break;			
  }
}

printText (5); //logs 5
printText (5, "Lorem Ipsum"); //logs 5 and Lorem Ipsum
```

<!-- attr: {style: 'font-size: 0.9em'} -->
# Function Overloading: Different Types of Parameters
- Different type of the parameters:
  - A switch on the type of the parameter

```js
function printValue (value) {
  switch (typeof value) {
    case "number" : console.log (`Number: ${value}`); break;
    case "string" : console.log (`String: ${value}`); break;
    case "object" : console.log (`Object: ${value}`); break;
    case "boolean" : console.log (`Number: ${value}`); break;
  }
}

printValue (5);
printValue ("Lorem Ipsum");
printValue ([1, 2, 3, 4]);
printValue (true);
```

# Function Overloading with Default Parameters
- In JavaScript all parameters are optional
  - i.e. functions can be invoked without them
- Yet, there is a reason behind requesting parameters
  - Maybe the function's behavior depends on it?


# Function Overloading with Default Parameters

- Default parameters are checked in the function body
  - If the parameter is not present - assign a value

```js
//only the str parameter is required
function getRandomValue(str, start, end){
  start = start || 0;
  end = end || str.length;
  //function code
}
```

<!-- attr: {style: 'font-size: 0.9em'} -->
# Function Overloading: Options parameter

- To create functions with options parameter
  - Create the function take a single parameter
  - Each parameter is a property of the options parameter
- _Example:_

```js
function getRandomValue(opt) {
  var min = +opt.min || Number.MIN_VALUE;
  var max = +opt.max || Number.MAX_VALUE;

  return (Math.random() * (max - min + 1) + min) | 0;
}

console.log(getRandomValue({min:0, max: 15}));

```

<!-- section start -->
<!-- attr: {class: 'slide-section'} -->
# Functions
##  Questions

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic31.png" style="top:48.48%; left:76.72%; width:23.80%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic32.png" style="top:48.74%; left:15.79%; width:20.90%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic33.png" style="top:4.86%; left:32.29%; width:23.51%; z-index:-1" /> -->


# Free Trainings @ Telerik Academy
- "Web Design with HTML 5, CSS 3 and JavaScript" course @ Telerik Academy
    - html5course.telerik.com
  - Telerik Software Academy
    - academy.telerik.com
  - Telerik Academy @ Facebook
    - facebook.com/TelerikAcademy
  - Telerik Software Academy Forums
    - forums.academy.telerik.com
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic34.png" style="top:58.18%; left:90.52%; width:16.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic35.png" style="top:34.35%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic36.png" style="top:48.92%; left:75.91%; width:10.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic37.png" style="top:11.88%; left:91.56%; width:14.23%; z-index:-1" /> -->
