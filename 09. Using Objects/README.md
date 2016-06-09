<!-- section start -->
# Using Objects
## Objects, Properties, Primitive and Reference Types
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:54.58%; left:61.09%; width:42.94%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:11.35%; left:9.28%; width:36.65%; z-index:-1" /> -->
<div class="signature">
	<p class="signature-course"></p>
	<p class="signature-initiative"></p>
	<a href="" class="signature-link"></a>
</div>




<!-- section start -->
# Table of Contents
- Object Types and Objects
- JavaScript Objects Overview
- Object and Primitive Types
- JavaScript Object Literal
- JavaScript Object Properties
- Associative Arrays




<!-- section start -->
# Object Types and Objects
## Modeling Real-world Entities with Objects
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:36.00%; left:31.31%; width:42.55%; z-index:-1" /> -->


# What are Objects?
- Software objects model real-world objects or abstract concepts
  - _Example_s: 
    - bank, account, customer, dog, bicycle, queue 
- Real-world objects have **states** and **behaviors**
  - Account states: 
    - holder, balance, type
  - Account behaviors: 
    - withdraw, deposit, suspend



- How do software objects implement real-world objects?
  - Use variables/data to implement states
  - Use methods/functions to implement behaviors
- An object is a software bundle of variables and related methods
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:49.37%; left:60.82%; width:41.43%; z-index:-1" /> -->


# Objects Represent
- **** checks
- **** people
- **** shopping list
- …
- **** numbers
- **** characters
- **** queues
- **** arrays
- Things from the real world


# What is a Object Type?
- The formal definition of a**object type**:
- Definition by Google

```js
**Object types** act as templates from which an instance of an object is created at run time. Types define the properties of the object and the methods used to control the object's behavior.
```



# Object Types
- Object Types provide the structure for objects
  - Define their prototype, act as template
- Object Types define:
  - Set of **attributes**
    - Represented by variables and properties
    - Hold their **state**
  - Set of actions (**behavior**)
    - Represented by methods
- A type defines the methods and types of data associated with an object


# Object Types – _Example_

```js
Account
```


```js
+Owner: Person
+Ammount: double
```


```js
+Suspend()
+Deposit(sum:double)
+Withdraw(sum:double)
```

<div class="fragment balloon" style="top:19.65%; left:37.97%; width:23.80%">Type Name</div>
<div class="fragment balloon" style="top:19.95%; left:66.83%; width:25.03%">Attributes</div>
<div class="fragment balloon" style="top:19.95%; left:66.83%; width:25.03%">(Properties and Fields)</div>
<div class="fragment balloon" style="top:50.83%; left:67.71%; width:24.85%">Operations</div>
<div class="fragment balloon" style="top:50.83%; left:67.71%; width:24.85%">(Methods)</div>


# Objects
- An **object** is a concrete **instance** of a particular object type
- Creating an object from an object type is called **instantiation**
- Objects have state
  - Set of values associated to their attributes
- _Example_:
  - Type: Account
  - Objects: Ivan's account, Peter's account


# Objects – _Example_

```js
Account
```


```js
+Owner: Person
+Ammount: double
```


```js
+Suspend()
+Deposit(sum:double)
+Withdraw(sum:double)
```

<div class="fragment balloon" style="top:18.01%; left:19.01%; width:25.51%">Object Type</div>

```js
ivanAccount
```


```js
+Owner="Ivan Kolev"
+Ammount=5000.0
```


```js
peterAccount
```


```js
+Owner="Peter Kirov"
+Ammount=1825.33
```


```js
kirilAccount
```


```js
+Owner="Kiril Kirov"
+Ammount=25.0
```

<div class="fragment balloon" style="top:12.86%; left:87.07%; width:14.10%">Object</div>
<div class="fragment balloon" style="top:34.82%; left:87.07%; width:14.10%">Object</div>
<div class="fragment balloon" style="top:57.61%; left:87.27%; width:14.10%">Object</div>




<!-- section start -->


# Objects Overview
- JavaScript is designed on a simple object-based paradigm
  - An object is a collection of properties
- An object property is association between a name and a value
  - A value of property can be either a **method** (function) or a **field** (variable)
- Lots of predefined objects available in JS
  - Math, document, window, etc…
- Objects can be created by the developer


# Object Properties
- Each object has **properties**
  - Properties are variables attached to the object
  - Properties of an object can be accessed with a dot-notation:

```js
var arrStr = arr.join(', '); // property join of Array
var length = arr.length;  // property length of Array
var words = text.split(' ');
```







<!-- section start -->


# Reference and Primitive Types
- JavaScript is a typeless language
  - Variables don’t have type, but their values do
- JavaScript has **six** different types:
  - **Number**, **String**, **Boolean**, **Null**, **Undefined** and **Object**
- **Object** is the only **o****bject**type
  - It is copied by **reference**
- **Number**, **String**, **Boolean**, **Null**, **Undefined** are **primitive** types
  - Copied by **value**



- The primitive types are **Boolean**, **Number**, **String**, **Undefined** and **Null**
  - All the other types are actually of type object
    - Including arrays, dates, custom types, etc…

```js
console.log(typeof **new** **Object()** === typeof **new** **Array****()**); // true
console.log(typeof **new** **Object()**=== typeof **new** **Date****()**); // true
console.log(typeof **new** **Array()**=== typeof **new** **Date****()**); // true 
```

- All types derive from object
  - Their type is object




# Primitive Types
- Primitive types are passed **by value**
  - When passed as argument
    - New memory is allocated
    - The value is copied in the new memory
    - The value in the new memory is passed
- Primitive types are initialized with type literals
- Primitive types have a object type **wrapper**

```js
var number = 5,
    text = 'Hello there!';
```


```js
var number = 5, // Holds a primitive value of 5
    numberObj = new Number(5); // Holds a object value of 5
```



# Primitive Types – _Example_
- Assign string values to two variables
  - Create an object using their value
  - Change the value of the variables
  - Each object has its own value

```js
var fname = 'Peter',
    lname = 'Johnson',
    person = { firstName: fname, lastName: lname };
lname = 'Peterson';
console.log(person.lastName) // logged 'Johnson'
```





# Reference Type
- Object is the only **object type**
  - When passed to a function the value is not copied, but instead a reference of it is passed

```js
var marks, student;
marks = [
  { subject : 'JavaScript', score : 4.50 },
  { subject : 'OOP', score : 5.00 },
  { subject : 'HTML5', score : 6.00 },
  { subject : 'Photoshop', score : 4.00 }];

student = { name: 'Doncho Minkov', marks: marks };
marks[2].score = 5.50;

console.log(student.marks); // logs 5.50 for HTML5 score
```







<!-- section start -->


# JavaScript Object Literal
- JavaScript object literal is a simplified way to create objects
  - Using curly brackets:

```js
var person = {
  firstName: 'Doncho',
  lastName: 'Minkov',
  toString: function () {
    return this.firstName + ' ' + this.lastName;
  }
}
```


```js
console.log(person.toString()); // writes 'Doncho Minkov'
```

  - Then the object properties can be used:




# Creating Objects
- Object notations are great, but **repeating code**is not, right?
  - Lets make two persons:
  - Lots of repeating code
    - Can't we use a constructor or function to create an object?

```js
var minkov, georgiev;
minkov = {fname: 'Doncho', lname: 'Minkov',
  toString: function(){ return this.fname + ' ' + this.lname;}
}
georgiev = { fname: 'Georgi', lname: 'Georgiev',   toString: function(){ return this.fname + ' ' + this.lname;}
}   
```



# Object Building Function
- A function for building objects
  - Just pass first and last name and get a object
    - Something like a constructor

```js
var minkov, georgiev;
function makePerson(fname, lname) {
  return {
    fname: fname, 
    lname: lname,
    toString: function (){return this.fname + ' ' + this.lname;}
  }
}
minkov = makePerson('Doncho', 'Minkov');
georgiev = makePerson('Georgi', 'Georgiev');
```

- Much cooler, right?






<!-- section start -->


# JS Object Properties
- JavaScript objects are just a set of key/value pairs
  - Each value can be accessed by its key
  - Properties in objects are accessed using the dot-notation (**obj.property**)
  - Yet properties can be used with brackets
    - Like an array

```js
document.write === document['write'] // results in true
```





# Associative Arrays
- Objects can be used as **associative arrays**
  - The key (index) is string instead of number
    - Also called **dictionaries** or **maps**
- Associative arrays don't have array properties
  - **length**, **indexOf**, etc…

```js
function countWords(words) {
  var word, i,
      wordsCount = {};       
  for (i in words) {
    word = words[i].toLowerCase();
    if (!wordsCount[word]) { wordsCount[word] = 0; }
    wordsCount[word] += 1;
  }
  return wordsCount
}
```





# Using Objects
- http://academy.telerik.com


# Free Trainings @ Telerik Academy
- "Web Design with HTML 5, CSS 3 and JavaScript" course @ Telerik Academy
    - html5course.telerik.com
  - Telerik Software Academy
    - academy.telerik.com
  - Telerik Academy @ Facebook
    - facebook.com/TelerikAcademy
  - Telerik Software Academy Forums
    - forums.academy.telerik.com
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic04.png" style="top:58.18%; left:90.52%; width:16.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic05.png" style="top:34.35%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic06.png" style="top:48.92%; left:75.91%; width:10.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic07.png" style="top:11.88%; left:91.56%; width:14.23%; z-index:-1" /> -->




