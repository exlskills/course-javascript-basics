<!-- section start -->
# Functions
## Reusable parts of Code
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:52.01%; left:52.40%; width:50.48%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:16.67%; left:5.61%; width:44.08%; z-index:-1" /> -->
<div class="signature">
	<p class="signature-course"></p>
	<p class="signature-initiative"></p>
	<a href="" class="signature-link"></a>
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
# Functions Overview
## What is a function?
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:39.29%; left:60.16%; width:35.21%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:39.35%; left:9.51%; width:37.91%; z-index:-1" /> -->


# What is a Function?
- A **function** is a kind of building block that solves a small problem
  - A piece of code that has a name and can be called from the other code
  - Can **take parameters**and **return a value**
- Functions allow programmers to construct large programs from simple pieces
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic04.png" style="top:60.83%; left:90.76%; width:17.63%; z-index:-1" /> -->


# Why to Use Functions?
- More **manageable** programming
  - **Split large** problems into **small pieces**
  - **Better****organization** of the program
  - Improve code**readability**and**understandability**
  - Enhance**abstraction**
- Avoiding repeating code
    - Improve code **maintainability**
- Code **reusability**
  - Using existing functions several times
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic05.png" style="top:45.84%; left:76.72%; width:27.84%; z-index:-1" /> -->




<!-- section start -->
# Declaring and Creating Functions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic06.png" style="top:17.63%; left:58.95%; width:31.74%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic07.png" style="top:17.63%; left:18.71%; width:29.09%; z-index:-1" /> -->


# Declaring and Creating Functions
- Each function has a **name**
  - It is used to call the function
  - Describes its purpose
- Functions in JavaScript does nothave return type

```js
function printLogo() {
    console.log('Telerik Corp.');
    console.log('www.telerik.com');
}
```

<div class="fragment balloon" style="top:52.58%; left:68.43%; width:20.28%">Function name</div>
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic08.png" style="top:21.05%; left:77.78%; width:23.69%; z-index:-1" /> -->




# Declaring and Creating Functions
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic10.png" style="top:38.62%; left:31.50%; width:46.43%; z-index:-1" /> -->


# Ways of Defining a Function
- Functions can be defined in three ways:
  - Using the constructor of the Function object
  - By function declaration
  - By function expression

```js
var print = new Function('console.log("Hello")');
```


```js
function print() { console.log('Hello') };
```


```js
var print = function() { console.log('Hello') };
var print = function printFunc() { console.log('Hello') };
```





<!-- section start -->
# Calling Functions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic11.png" style="top:37.02%; left:29.94%; width:49.37%; z-index:-1" /> -->


# Calling Functions
- To call a function, simply use:
  - The function’s name
  - Parentheses
  - A semicolon (**;**)
- This will execute the code in the function’s body and will result in printing the following:

```js
printLogo();
```


```js
Telerik Corp.
www.telerik.com
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic12.png" style="top:13.22%; left:85.14%; width:20.46%; z-index:-1" /> -->



- A function can be called from:
  - Any other function
  - Itself (process known as **recursion**)

```js
function print(){
   console.log('printed');
}

function anotherPrint(){
   print();
   anotherPrint();
}
```

<div class="fragment balloon" style="top:63.03%; left:39.87%; width:20.28%">Don't do this at home</div>
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic13.png" style="top:42.31%; left:80.47%; width:24.68%; z-index:-1" /> -->


# Declaring and Calling Functions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic14.png" style="top:12.34%; left:60.70%; width:32.72%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic15.png" style="top:12.34%; left:15.91%; width:32.84%; z-index:-1" /> -->




<!-- section start -->
# Functions with Parameters
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic16.png" style="top:31.74%; left:19.51%; width:68.08%; z-index:-1" /> -->


# Function Parameters
- To pass information to a function, you can use **parameters**(also known as **arguments**)
  - You can pass zero or several input values
  - Each parameter has а name
  - Parameters are assigned to particular values when the function is called
- Parameters can change the function behavior depending on the passed values


# Defining and Using Function Parameters
- Function’s behavior depends on its parameters 
- Parameters can be of any type
  - **Number**, **String**, **Object**, **Array**, etc.
  - Even **Func****tion**

```js
function printSign(number) {
    if (number > 0)
        console.log('Positive');
    else if (number < 0)
        console.log('Negative');
    else
        console.log('Zero');
}
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic17.png" style="top:14.10%; left:80.47%; width:22.48%; z-index:-1" /> -->



- Functions can have as many parameters as needed:

```js
function printMax(number1, number2) {
    var max = number1;
    if (number2 > number1)
        max = number2;
    console.log('Maximal number: ' + max);
}
```



# Calling Functionswith Parameters
- To call a function and pass values to its parameters:
  - Use the function’s name, followed by a list of expressions for each parameter
- _Example_s:

```js
printSign(-5);
printSign(balance);
printSign(2 + 3);
printMax(100, 200);
printMax(oldQuantity * 1.5, quantity * 2);
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic18.png" style="top:44.08%; left:74.85%; width:27.55%; z-index:-1" /> -->


# Functions Parameters – _Example_

```js
function printSign(number) {
  if (number > 0)
    console.log('The number ' + number + ' is positive.');
  else if (number < 0)
    console.log('The number ' + number + ' is negative.');
  else
    console.log('The number ' + number + ' is zero.');
}
function printMax(number1, number2) {
  var max = number1;
  if (max > number1) {
    max = number2;
  }
  console.log('Maximal number: ' + max);
}
```



# Function Parameters
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic19.png" style="top:42.31%; left:31.81%; width:44.41%; z-index:-1" /> -->


# Printing Triangle – _Example_
- Creating a program for printing triangles as shown below:
    - 			1
    - 		1	1 2
    - 		1 2	1 2 3
    - 		1 2 3	1 2 3 4
    - 		1 2 3 4	1 2 3 4 5
    - n=5  &rarr;	1 2 3 4 5     n=6  &rarr;	1 2 3 4 5 6
    - 		1 2 3 4	1 2 3 4 5
    - 		1 2 3	1 2 3 4
    - 		1 2	1 2 3
    - 		1	1 2
    - 			1 


# Printing Triangle – _Example_

```js
function pringTriangle(n) {
  var line;
  for (line = 1; line <= n; line += 1) {
    printLine(1, line);
  }
  for (line = n-1; line >= 1; line -= 1) {
    printLine(1, line);
  }

function printLine(start, end) {
  var line='',
      i;
  for (i = start; i <= end; i += 1){
    line += ' ' + i;
  }
  console.log(line);
}
```

- Printing a triangle:


# Printing Triangle
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic20.png" style="top:9.63%; left:70.59%; width:30.47%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic21.png" style="top:19.33%; left:15.51%; width:35.63%; z-index:-1" /> -->




<!-- section start -->
# The arguments Object
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic22.png" style="top:36.86%; left:9.42%; width:88.04%; z-index:-1" /> -->


# arguments Object
- Every function have a special object called **arguments**
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
  - It just have a set of the array functionality
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
# Returning Values From Functions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic23.png" style="top:44.08%; left:25.73%; width:57.30%; z-index:-1" /> -->


# Returning Values from Functions 
- Every function in JavaScript returns a value
  - It can be set by the developer
    - Else the function returns **undefined**
  - The return value can be of any type
    - **Number**, **String**, **Object**, **Function**

```js
var head = arr.shift();
```


```js
var price = getPrice() * quantity * 1.20;
```


```js
var noValue = arr.sort();
```



# Defining Functions That Return a Value
- Functions can return any type of data (**N****umber**, **S****t****ring**, **Object**, etc...)
- Use **return** keyword to return a result

```js
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function sum(numbers){
  var sum = 0, i, len;
  for(i = 0, len = numbers.length; i < len; i += 1){
    sum += numbers[i];
  }
  return sum;
}
```



# The **return** Statement
- The **return** statement:
  - Immediately terminates function’s execution
  - Returns specified expression to the caller
  - _Example_:
- To terminate function execution, use just:
- Return can be used several times in a function body
  - To return a different value in different cases

```js
return -1;
```


```js
return;
```



# The return Statement: _Example_
- Check if a number is prime:

```js
function isPrime(number){
  var divider,
      maxDivider;
  number = +number;
  maxDivider = Math.sqrt(number);
  for(divider = 2; divider <= maxDivider; divider += 1){
    if(!(number % divider)){
      //Divider found, no need to continue execution;
      return false;
    }
  }
  //All dividers tested and none is found
  //The number is prime
  return true;
}
```



# Return Value
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic24.png" style="top:33.72%; left:27.30%; width:54.34%; z-index:-1" /> -->


# Sum Even Numbers– _Example_
- Calculate the sum of all even numbers in an array

```js
function sum(numbers) {
  var sum,
      i,
      len;
  sum = 0;
  for (i = 0, len = numbers.length; i < len; i += 1) {
    if(!(numbers[i] % 2)) {
      sum += numbers[i];
    }		    
  }
  return sum;
}
```


```js
for(number of numbers){
```



# Sum of Even Numbers
- [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic25.png" style="top:39.67%; left:13.00%; width:81.28%; z-index:-1" /> -->




<!-- section start -->
# Function Scope
## Scope of variables and functions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic26.png" style="top:32.45%; left:28.54%; width:52.01%; z-index:-1" /> -->


# Function Scope
- Every variable has its scope of usage
  - A scope defines where the variable is accessible
  - Generally there are local and global scope

```js
<script>
var arr = [1, 2, 3, 4, 5, 6, 7];
function countOccurences (value) {
  var count = 0;
  for (var i=0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
</script>
```

<div class="fragment balloon" style="top:34.64%; left:62.76%; width:38.85%">**arr**  is  in the global scope(it is accessible from anywhere)</div>
<div class="fragment balloon" style="top:48.23%; left:62.76%; width:38.85%">**count**is declared inside **countOccurences**and it can be used only inside it</div>
<div class="fragment balloon" style="top:64.73%; left:62.76%; width:38.85%">Try removing the "var" before count</div>


# Function Scope
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic27.png" style="top:32.53%; left:26.51%; width:55.83%; z-index:-1" /> -->




<!-- section start -->
# Function Overloading
## Many functions with the same name
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic28.png" style="top:37.63%; left:58.76%; width:44.25%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic29.png" style="top:37.63%; left:8.18%; width:38.93%; z-index:-1" /> -->


# Function Overloading
- JavaScript does not support function overloading
  - i.e. only one function with a specified name can exists in the same scope
  - The second print overwrites the first one

```js
function print(number) {
  console.log('Number: ' + number);
}
function print(number,text) {
  console.log('Number: ' + number + '\nText: ' + text);
}
print(2);
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic30.png" style="top:34.26%; left:62.44%; width:39.89%; z-index:-1" /> -->





- Function overloading in JavaScript must be faked
  - i.e. make it look like overloading
- Many ways of fake function overloading exist
  - Different number of parameters
  - Different type of parameters
  - Optional parameters


# Function Overloading - Different Number of Parameters
- Overloading functions with different number of parameters is done by a simple switch by the length of the arguments

```js
function printText (number, text) {
  switch (arguments.length) {
    case 1 : console.log ('Number :' + number); break;
    case 2 : 
      console.log ('Number :' + number); 
      console.log ('Text :' + text);
      break;			
  }
}
printText (5); //logs 5
printText (5, 'Lorem Ipsum'); //logs 5 and Lorem Ipsum
```





# Function Overloading:Different Types of Parameters
- Overloading functions with different type of the parameters is done with a switch on the type of the parameter

```js
function printValue (value) {
  var log = console.log;
  switch (typeof value) {
    case 'number' : log ('Number: ' + value); break;
    case 'string' : log ('String: ' + value); break;
    case 'object' : log ('Object: ' + value); break;
    case 'boolean' : log ('Number: ' + value); break;
  }
}			  
printValue (5);
printValue ('Lorem Ipsum');
printValue ([1, 2, 3, 4]);
printValue (true);
```





# Function Overloading with Default Parameters
- In JavaScript all parameters are optional
  - i.e. functions can be invoked without them
- Yet, there is a reason behind requesting parameters
  - Maybe the function's behavior depends on it?



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





# Functions
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




