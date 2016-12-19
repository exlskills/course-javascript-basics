<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section' } -->
# Data Types and Variables

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:55%; left:60%; width:30%; z-index:-1; border-radius: 15px" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:0%; left:86.00%; width:17.49%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:0%; left:55.42%; width:21.16%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:0%; left:26.14%; width:19.30%; z-index:-1" /> -->

<div class="signature">
	<p class="signature-course">JavaScript Fundamentals</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="https://telerikacademy.com" class="signature-link">https://telerikacademy.com</a>
</div>

<!-- section start -->
<!-- attr: { hasScriptWrapper:true } -->
# Table of Contents
- [Data Types](#data-types)
  - [Number](#number)
    - [Integer](#integer)
    - [Floating-Point](#floating)
  - [Boolean](#boolean)
  - [String](#string)
- [Declaring and Using Variables](#declaring)
  - [Identifiers](#identifiers)
  - [Declaring Variables and Assigning Values](#assigning)

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic04.png" style="top:18.51%; left:69.08%; width:32.91%; z-index:-1; border-radius: 15px; border: 3px solid yellowgreen" /> -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section', id:'data-types' } -->
<!-- # <a id="data-types"></a>Data Types in JavaScript -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic05.png" style="top:45%; left:65%; width:35.41%; z-index:-1; border-radius: 15px" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic06.png" style="top:45%; left:5%; width:52.01%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# How Computing Works?
- Computers are machines that process data
  - Data is stored in the computer memory in **variables**
  - Variables have **name**, **data type** and **value**
- _Example_ of variable definition and assignment in JavaScript:

```js
let count = 5;
```

<div class="fragment balloon" style="top:63%; left:12%">Variable name</div>
<div class="fragment balloon" style="top:57%; left:30%">Variable value</div>

<!-- attr: { hasScriptWrapper:true } -->
# What Is a Data Type?
- A **data type**:
  - Is a domain of values of similar characteristics
  - Defines the type of information stored in the computer memory (in a variable)
- _Examples_:
  - Positive integers: `1`, `2`, `3`, `…`
  - Alphabetical characters: `a`, `b`, `c`, `…`

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic07.png" style="top:48.55%; left:86.08%; width:18.51%; z-index:-1" /> -->

<!-- attr: { hasScriptWrapper:true, style:'font-size: 0.8em' } -->
# JavaScript Data Types
- JavaScript is **weakly typed** language
  - allows most operations on values without regards to their types
  - values have types, variables don't
  - variables can hold any type of value
  - All variables are declared with the keywords `var`, `let` or `const`

```js
var count = 5; // variable holds an integer value
count = 'hello'; // the same variable now holds a string

var name = 'Telerik Academy'; // variable holds a string

let mark = 5.25 // mark holds a floating-point number
mark = true; // mark now holds a boolean value

const MAX_COUNT = 250; // name is a constant variable that holds a string
MAX_COUNT = 0; // error, cannot assign to a constant variable
```

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section' } -->
<!-- # Introducing Variables -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic08.png" style="top:45%; left:30%; width:40%; z-index:-1; border-radius: 15px" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic09.png" style="top:7.05%; left:81.40%; width:22.43%; z-index:-1" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# What Is a Variable?
- A **variable** is a:
  - Placeholder of information that can usually be changed at run-time
  - A piece of computer memory holding some value
- Variables allow you to:
  - Store information
  - Retrieve the stored information
  - Manipulate the stored information

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic10.png" style="top:45%; left:71.17%; width:32.52%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# Variable Characteristics
- A variable has:
  - Name
  - Value
- _Example_:
  - Name: `counter`
  - Value: `5`
    - Type of the `counter`'s value: `number`

```js
let counter = 5;
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic11.png" style="top:14.10%; left:67.37%; width:35.37%; z-index:-1; border-radius: 15px" /> -->

<!-- section start -->
<!-- attr: { id:'number', class:'slide-section', showInPresentation: true, hasScriptWrapper:true } -->
<!-- # <a id="number"></a>Numbers in JavaScript -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic35.png" style="top:55%; left:20%; width:60%; z-index:-1; border-radius: 15px" /> -->


# Numbers in JavaScript
- All numbers in JavaScript are stored internally as double-precision floating-point numbers
- According to the **IEEE-754** standard
  - Can be wrapped as objects of type `Number`
- _Example_:

```js
let value = 5;
value = 3.14159;
value = new Number(100); // Number { 100 }
value = value + 1; // 101
let biggestNum = Number.MAX_VALUE;
```

<!-- attr: { hasScriptWrapper:true, style:'font-size:0.95em' } -->
# Numbers Conversion
- Convert `floating-point` to `integer` number

```js
let valueDouble = 8.75;
let valueInt = valueDouble | 0; // 8
```
- Convert to `integer` number with rounding

```js
let valueDouble = 8.75;
let roundedInt = (valueDouble + 0.5) | 0; // 9
```
- Convert `string` to `integer`

```js
let str = '1234';
let i = str | 0 + 1; // 1235
```

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section demo' } -->
<!-- # Number Conversion
## [Demo]() -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic19.png" style="top:55%; left:37.5%; width:25%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { class:'slide-section', hasScriptWrapper:true, id:'integer' } -->
# <a id="integer"></a>Integer numbers

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic12.png" style="top:45%; left:30%; width:40%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, style: 'font-size: 0.85em' } -->
<!-- # What are Integer numbers?-->
- Integer numbers in JavaScript:
  - Represent whole numbers
  - Have range of values, depending on the size of memory used
- Integer values can hold numbers from `-9007199254740992` to `9007199254740992`
  - Their underlying type is a floating-point number (**IEEE-754**)

```js
let studentsCount = 5;
let maxInteger = 9007199254740992;
let minInteger = -9007199254740992;
let a = 5, b = 3;
let sum = a + b; // 8
let div = a / 0; // Infinity
```

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section demo' } -->
<!-- # Integer numbers
## [Demo]() -->

<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'floating' } -->
# <a id="floating"></a>Floating-Point numbers

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic15.png" style="top:45%; left:28%; width:44%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { showInPresentation: true, hasScriptWrapper:true } -->
<!-- # What are Floating-Point numbers? -->
- Floating-point types:
  - Represent real numbers
  - Have range of values and precision
  - Can behave abnormally in the calculations

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic16.png" style="top:55%; left:55%; width:35%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { showInPresentation: true, hasScriptWrapper:true } -->
<!-- # Floating-Point numbers -->
- Floating-point size depend on the platform
  - The browser and the OS
- 32-bit OS and browser have 32 bits for number, while 64-bit have 64 bits
  - It is good idea to use up to 32-bit numbers
    - Will always work on all platforms

<!-- attr: { hasScriptWrapper:true } -->
# Floating-Point Types - _Example_
- The **floating-point** type can hold numbers from `5e-324` to `1.79e+308`

```js
let PI = Math.PI; // 3.141592653589793
let minValue = Number.MIN_VALUE; // 5e-324
let maxValue = Number.MAX_VALUE; // 1.79e+308
let div0 = PI / 0; // Infinity
let divMinus0 = -PI / 0; // -Infinity
let unknown = div0 / divMinus0; // NaN
```

<!-- attr: { hasScriptWrapper:true, style:'font-size:0.9em' } -->
# Abnormalities in the Floating-Point Calculations
- Sometimes abnormalities can be observed when using floating-point numbers
  - Comparing floating-point numbers can not be performed directly with the `equals` operators (`==` and `===`)
- _Example_:

```js
let a = 0.1;
let b = 0.2;
let sum = 0.3;
let equal = (a+b === sum); // false!!!
console.log('a+b = '+ (a + b) + ', sum = ' +
  sum + ', sum == a+b? is ' + equal);
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic17.png" style="top:50%; left:80%; width:22.04%; z-index:1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section demo' } -->
<!-- # Floating-Point numbers
## [Demo]() -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'boolean' } -->
# <a id="boolean"></a>Boolean Type
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic20.png" style="top:45%; left:53%; width:46%; z-index:-1; border-radius: 15px" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic21.png" style="top:45%; left:14%; width:24%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { showInPresentation: true, hasScriptWrapper:true } -->
<!-- # The Boolean Data Type -->
- Has **two possible values**:
  - `true` and `false`
- Used in logical expressions

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic22.png" style="top:15.51%; left:69.40%; width:31.38%; z-index: 1; border-radius: 15px" /> -->

```js
let a = 1;
let b = 2;
let greaterAB = (a > b);
console.log(greaterAB);  // false

let equalA1 = (a === 1);
console.log(equalA1);    // true

console.log((a !== b) && (b > 0));
```

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section demo' } -->
<!-- # Boolean Type
## [Demo]() -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic23.png" style="top:60%; left:35%; width:30%; z-index:-1; border-radius: 15px" /> -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'string' } -->
# <a id="string"></a>String Type

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic24.png" style="top:45%; left:0%; width:35%; z-index:-1; border-radius: 15px" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic25.png" style="top:45%; left:60%; width:35%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, style: 'font-size: 0.9em' } -->
<!-- # The String Data Type -->
- Represents a **sequence of characters**
- Strings are enclosed in quotes:
  - **Both `'` and `"` work correctly**
  - **ES6** also includes <code>`</code> (ticks) for string interpolation
- Strings can be concatenated
  - Using the `+` operator

```js
let s = 'Welcome to JavaScript';
let name = 'John' + ' ' + 'Doe';
let greeting = `${s}, ${name}`;

console.log(greeting); // Welcome to JavaScript, John Doe
```

<!-- attr: { hasScriptWrapper:true } -->
# Saying Hello - _Example_
- Concatenating the two names of a person to obtain his full name:
  - _Note_: a space is missing between the two names! We have to add it manually

```js
let firstName = 'Ivan';
let lastName = 'Ivanov';
console.log('Hello, ' + firstName + '!');

let fullName = firstName + ' ' + lastName;
console.log('Your full name is ' + fullName);
```

<!-- attr: { hasScriptWrapper:true } -->
# Strings are Unicode
- Strings are stored as Unicode
  - Unicode supports all commonly used alphabets in the world
    - E.g. Cyrillic, Chinese, Arabic, Greek, etc. scripts

```js
let asSalamuAlaykum = 'السلام عليكم';
alert(asSalamuAlaykum);

let кирилица = 'Това е на кирилица!';
alert(кирилица);

let leafJapanese = '葉';
alert(leafJapanese);
```

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section demo' } -->
<!-- # String Data Type
## [Demo]() -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic27.png" style="top:55%; left:15%; width:70%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true, style:'font-size:0.8em' } -->
# Parsing String to Number
- Strings can be parsed to numbers
  - Floating-point and rounded (integer)
- The trivial way to parse string to a number is using the functions `parseInt` and `parseFloat`:

```js
let numberString = '123'
console.log(parseInt(numberString)); // prints 123
let floatString = '12.3';
console.log(parseFloat(floatString)); // prints 12.3
```

- `parseInt` and `parseFloat` exhibit stranger behaviour:
  - If a non-number string starts with a number, only the number is extracted:

```js
let str = '123Hello';
console.log(parseInt(str)); // prints 123
```

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, style:'font-size:0.9em' } -->
<!-- # Better String to Number Parsing -->
- `parseInt` and `parseFloat` are readable, but slow and show strange behaviour.
  - Better ways to parse string to numbers are as follows:
    - With rounding:
```js
'123.3' | 0 -> returns 123
```
    - As is:
```js
Number('123.3') -> returns 123.3
'123.3' * 1 -> returns 123.3
+'123.3' -> returns 123.3
```

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section' } -->
<!-- # Undefined and Null Values
## Understanding '`undefined`' in JavaScript -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic29.png" style="top:60%; left:40%; width:20%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true, style:'font-size: 0.9em' } -->
# Undefined and Null Values
- JavaScript has a special value `undefined`
  - It means the variable has not been defined (no such variable in the current context)
- `undefined` is different than `null`
  - `null` represents an empty value

```js
let x;
console.log(x); // undefined

x = 5;
console.log(x); // 5

x = undefined;
console.log(x); // undefined

x = null;
console.log(x); // null
```

<!-- attr: { hasScriptWrapper:true } -->
# Checking a Variable Type
- The variable type can be checked at runtime:

```js
let x = 5;
console.log(typeof x); // number
console.log(x); // 5

x = new Number(5);
console.log(typeof x); // object
console.log(x); // Number {}

x = null;
console.log(typeof x); // object

x = undefined;
console.log(typeof x); // undefined
```

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section demo' } -->
<!-- # Undefined / Null / Typeof
## [Demo]() -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic30.png" style="top:55%; left:10%; width:80%; z-index:-1" /> -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'declaring' } -->
# <a id="declaring"></a>Declaring and Using Variables

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic33.png" style="top:55%; left:30%; width:40%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { showInPresentation: true, hasScriptWrapper:true } -->
<!-- # Declaring Variables -->
- When declaring a variable we:
  - Specify its **name** (called identifier)
  - May give it an **initial value**
- The syntax is the following:

```js
<var | let | const> <identifier> [= <initialization>];
```

```js
let emptyVariable;
var height = 200;
let width = 300;
const depth = 250;
```

<!-- attr: { hasScriptWrapper:true, id:'identifiers' } -->
# <a id="identifiers"></a>Identifiers
- Identifiers may consist of:
  - Letters (Unicode)
  - Digits [`0`-`9`]
  - Underscore '`_`'
  - Dollar '`$`'
- Identifiers
  - Can begin only with a letter, `$`, or an underscore
  - Cannot be a JavaScript keyword
- Variables / functions names: use `camelCase`

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic34.png" style="top:21.54%; left:64.10%; width:36.14%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # Identifiers -->
- Identifiers
  - Should have a **descriptive name**
  - It is recommended to **use only Latin letters**
  - Should be **neither too long nor too short**
- Names in JavaScript are **case-sensitive**
  - Small letters are considered different than the capital letters

<!-- attr: { showInPresentation: true, hasScriptWrapper:true } -->
<!-- # Identifiers - _Examples_ -->
- _Examples_ of correct identifiers:

```js
let New = 2; // Here N is capital
let _2Pac; // This identifier begins with _
let поздрав = 'Hello'; // Unicode symbols used
// The following is more appropriate:
let greeting = 'Hello';
let n = 100; // Undescriptive
let numberOfClients = 100; // Descriptive
// Overdescriptive identifier:
let numberOfPrivateClientOfTheFirm = 100;
```
- _Examples_ of incorrect identifiers:

```js
let new;	// new is a keyword
let 2Pac;	// Cannot begin with a digit
```



<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'assigning' } -->
# <a id="assigning"></a>Assigning Values To Variables

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic36.png" style="top:55%; left:40%; width:20%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { showInPresentation: true, hasScriptWrapper:true, style:'font-size: 0.9em' } -->
<!-- # Assigning Values -->
- Assigning values to variables
  - Is achieved by the `=` operator
- The `=` operator has
  - Variable identifier on the left
  - Value on the right
    - Can be of any value type
  - Could be used in a cascade calling, where assigning is done from right to left
- Variables declared with the `const` keyword cannot be reassigned after their initial assignment

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic37.png" style="top:15.51%; left:78.60%; width:23.32%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { showInPresentation: true, hasScriptWrapper:true } -->
<!-- # Assigning Values - _Examples_ -->
- Assigning values example:

```js
let firstValue = 5;
let secondValue;
let thirdValue;

// Using an already declared variable:
secondValue = firstValue;

// The following cascade calling assigns
// 3 to firstValue and then firstValue
// to thirdValue, so both variables have
// the value 3 as a result:

thirdValue = firstValue = 3; // Avoid this!
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic38.png" style="top:18.91%; left:84.21%; width:18.95%; z-index:1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true } -->
# Initializing Variables
- Initialization
  - Assignment of initial value
  - Must be done before the variable is used!
- Several ways of initializing a variable:
  - By using a literal expression
  - By referring to an already initialized variable
- Uninitialized variables are undefined

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic39.png" style="top:12.69%; left:94.16%; width:9.34%; z-index:-1" /> -->

<!-- attr: { showInPresentation: true, hasScriptWrapper:true } -->
<!-- # Initialization - _Examples_ -->
- _Example_ of some initializations:

```js
// This is how we use a literal expression:
let heightInMeters = 1.74;

// Here we use an already initialized variable:
let greeting = 'Hello World!';
let message = greeting;

// Use a result from an expression
const parsedNumber = parseInt('1239') + 1;
```

<!-- attr: { hasScriptWrapper:true, showInPresentation: true, class:'slide-section demo' } -->
<!-- # Assigning and Initializing Variables
## [Demo]() -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic40.png" style="top:50%; left:5%; width:25.65%; z-index:-1; border-radius: 15px" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic41.png" style="top:50%; left:75%; width:23.80%; z-index:-1; border-radius: 15px" /> -->

<!-- attr: { hasScriptWrapper:true, style:'font-size: 0.8em' } -->
# Local and Global Variables
- Local variables - declared with the keywords `var`, `let` or `const`
  - `var` - the variable lives in the scope of the current function or in the global scope
  - `let` - the variables lives in the current scope
  - `const` - like `let`, but cannot be reassigned
- Global variables
  - Declared **without any keyword **
  - Bad practice - **never do this**!

```js
let a = 5; // a is local in the current scope
a = 'alabala'; // the same a is referenced here
```

```js
a = undefined;
a = 5; // the same as window.a = 5;
```

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, showInPresentation:true, class:'slide-section' } -->
<!-- # Data Types and Variables
## Questions -->

<!-- attr: { hasScriptWrapper:true } -->
# Free Trainings @ Telerik Academy
- "Web Design with HTML 5, CSS 3 and JavaScript" course @ Telerik Academy
    - [html5course.telerik.com](http://html5course.telerik.com)
  - Telerik Software Academy
    - [academy.telerik.com](http://academy.telerik.com)
  - Telerik Academy @ Facebook
    - [facebook.com/TelerikAcademy](https://facebook.com/TelerikAcademy)
  - Telerik Software Academy Forums
    - [forums.academy.telerik.com](https://telerikacademy.com/Forum/Home)

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic42.png" style="top:58.18%; left:90.52%; width:16.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic43.png" style="top:38.35%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic44.png" style="top:52.92%; left:75.91%; width:10.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic45.png" style="top:20.88%; left:91.56%; width:14.23%; z-index:-1" /> -->
