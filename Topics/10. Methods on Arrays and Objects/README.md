<!-- section start -->
# Methods on Arrays and Objects
## Using array methods for cleaner JavaScript code
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:52.01%; left:52.40%; width:50.48%; z-index:-1" /> -->
<div class="signature">
	<p class="signature-course"></p>
	<p class="signature-initiative"></p>
	<a href="" class="signature-link"></a>
</div>




<!-- section start -->
# Table of Contents
- Array methods for:
  - Conditions:
    - Array#every, Array#some
  - Transformation
    - Array#filter, Array#reduce, Array#map
  - Iteration
    - Array#forEach
  - Searching
    -  Array#find, Array#findIndex
  - Others
    - Array#fill, Array$sort
- Polyfills for the missing array methods




<!-- section start -->


# Array Methods for Conditions:Array#every
- Array#every
  - Signature: **[].every(callback);**
  - Callback: **callback(item [, index [,****arr****]])**
  - Returns: **Boolean**
  - Behavior: returns TRUE if **ALL** the elements of the array meets the criteria in callback()
    - Returns FALSE if ANY of the elements does not meet the criteria in callback()
  - Support: everywhere


# Array Methods for Conditions:Array#every

```js
function isOdd(number) {
  return !!(number % 2);
}
console.log([1, 2, 3, 4].every(isOdd));           //false
console.log([1, 3, 5, 7].every(isOdd));           //true
```

- _Example_s:
  - Check if all the numbers in the array are odd? 

```js
function isGreaterThan18(number) {
  return number > 18;
}

console.log([22, 23].every(isGreaterThan18));     //true
console.log([19, 18].every(isGreaterThan18));     //false
```

  - Check if all the numbers are greater than 18




# Array Methods for Conditions:Array#some
- Array#some
  - Signature: **[].some(callback);**
  - Callback: **callback(item [, index [,****arr****]])**
  - Returns: **Boolean**
  - Behavior: returns TRUE if **ANY** of the elements of the array meets the criteria in callback()
    - Returns FALSE if **NONE** of the elements meets the criteria in callback()
  - Support: everywhere


# Array Methods for Conditions:Array#some

```js
function isOdd(number) {
  return !!(number % 2);
}
console.log([1, 2, 3, 4].some(isOdd));            //true
console.log([1, 3, 5, 7].some(isOdd));            //true
console.log([2, 4, 6, 8].some(isOdd));            //false
```

- _Example_s:
  - Check if there is at least one odd number 

```js
function isGreaterThan18(number) {
  return number > 18;
}
console.log([22, 23].some(isGreaterThan18));     //true
console.log([19, 18].some(isGreaterThan18));     //true
console.log([17, 18].some(isGreaterThan18));     //false
```

  - Check if at least one number greater than 18






<!-- section start -->


# Array Methods for Transormation:Array#filter
- Array#filter
  - Signature: **[].filter(callback);**
  - Callback: **callback(item [, index [,****arr****]])**
  - Returns: **Array**
  - Behavior: extracts in a new array only the elements that meet the criteria in callback()
    - Returns empty array, if no element meets the criteria
  - Support: everywhere


# Array Methods for Transormation:Array#filter

```js
function isOdd(number) {
  return !!(number % 2);
}
console.log([1, 2, 3, 4].filter(isOdd));   //[1, 3]
console.log([1, 3, 5, 7].filter(isOdd));   //[1, 3, 5, 7]
console.log([2, 4, 6, 8].filter(isOdd));   //[]
```

- _Example_s:
  - Extract the odd numbers from the array

```js
function InRange(min, max) {
  return function(item) {
    return min <= item && item <= max;
  };
}
var numbers = [2, 3, 4, 5, 6, 7, 8];
console.log(numbers.filter(inRange(4, 7)));       //[4, 5, 6, 7]
console.log(numbers.filter(inRange(2, 4)));       //[2, 3, 4]
```

  - Returns the numbers in a given range




# Array Methods for Transormation:Array#reduce
- Array#reduce
  - Signature: **[].reduce(callback, initial);**
  - Callback: **callback(item [, index [,****arr****]])**
  - Returns: **Object**
  - Behavior: returns a single object, the result of the callback()
  - Support: everywhere


# Array Methods for Transormation:Array#reduce

```js
var sum = [1, 2, 3, 4].reduce(function(sum, number) {
  return sum + number;
}, 0);
var product = [1, 2, 3, 4].reduce(function(sum, number) {
  return sum * number;
}, 1);
console.log(sum);               //10
console.log(product);           //24
```

- _Example_s:
  - Calculates the sum and product on numbers

```js
var arr = [1, [2, 3], [4], [5, 6], 7];
function flatten(arr, item) {
  if (Array.isArray(item)) { return arr.concat(item); }
  return arr.concat([item]);
}
console.log(arr.reduce(flatten, [])); //[ 1, 2, 3, 4, 5, 6, 7 ]
```

  - Flattens array




# Array Methods for Transormation:Array#map
- Array#map
  - Signature: **[].map(callback);**
  - Callback: **callback(item [, index [,****arr****]])**
  - Returns: **Object**
  - Behavior: returns a new array with the same size. Each element is mapped, based on callback()
  - Support: everywhere


# Array Methods for Transormation:Array#map

```js
var squares = [1, 2, 3, 4, 5].map(function(number) {
  return number * number;
});
console.log(squares); //prints [ 1, 4, 9, 16, 25 ]
```

- _Example_s:
  - Calculates the sum and product on numbers

```js
var lines = ['1 2 3',
             '4 5 6'];
var matrix = lines.map(function(line) {
  return line.split(' ')
             .map(Number);                      
});                                             // [[1, 2, 3],
console.dir(matrix);                            //  [4, 5, 6]]
```

  - Parses a matrix given as an array of rows into an array of arrays of numbers






<!-- section start -->


# Array Methods for Iteration:Array#forEach
- Array#forEach
  - Signature: **[].****forEach****(callback);**
  - Callback: **callback(item [, index [,****arr****]])**
  - Returns: **undefined**
  - Behavior: iterates the elements and passes each element as argument to callback
    - Much like a for-of loop where the callback is the body of the loop
  - Support: everywhere


# Array Methods for Iteration:Array#forEach

```js
var numbers = ['One', 'Two', 'Three', 'Four', 'Five'];
numbers.forEach(function(item, index) {
  console.log('Item at' + index + 'has value' + item);
});
```

- _Example_s:
  - Print the elements of an array with their index

```js
function createPerson(name, age) { //… }
var people = [createPerson('Peter', 13), 
              createPerson('John', 18),
              createPerson('Susan', 21)];
people.forEach(function(person) {
  person.introduce();
});
```

  - Call a method for each object in an array






<!-- section start -->


# Array Methods for Searching:Array#find
- Array#find
  - Signature: **[].find(callback);**
  - Callback: **callback(item [, index [,****arr****]])**
  - Returns: **Object** or **undefined**
  - Behavior: returns the leftmost element in the array, that meets the criteria in callback
    - If no such element is found, returns undefined
  - Support: Almost nowhere, needs a polyfill


# Array Methods for Searching:Array#find

```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.find(function(item) {
  return !!(item % 2) && item > 5;
}));            //prints 7
```

- _Example_s:
  - Find the leftmost odd number, greater than 5

```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.find(function(item, index) {
  return index > 3 && !!(item % 2);
}));            //prints 5
```

  - Find the leftmost odd number, that is after index 3




# Array Methods for Searching:Array#findIndex
- Array#findIndex
  - Signature: **[].****findIndex****(callback);**
  - Callback: **callback(item [, index [,****arr****]])**
  - Returns: **Number** or **-1**
  - Behavior: returns the index of the leftmost element in the array, that meets the criteria in callback
    - If no such element is found, returns -1
  - Support: Almost nowhere, needs a polyfill


# Array Methods for Searching:Array#findIndex

```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.findIndex(function(item) {
  return !!(item % 2) && item > 5;
}));            //prints 6(element 7)
```

- _Example_s:
  - Find the index of leftmost odd number, greater than 5

```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.findIndex(function(item, index) {
  return index > 3 && !!(item % 2);
}));            //prints 4(element 5)
```

  - Find the index of the leftmost odd number, that is after index 3






<!-- section start -->


# Other Array Methods:Array#sort
- Array#sort
  - Signature: **[].sort(callback);**
  - Callback: **callback(obj1, obj2)**
  - Returns: **undefined**
  - Behavior: sorts the items from the array, based on the callback()
  - Support: everywhere


# Other Array Methods:Array#sort

```js
var numbers = [5, 1, 2, 4, 6];
numbers.sort(function(x, y) {
  return y - x;
});
console.log(numbers);             //[ 6, 5, 4, 2, 1 ]
```

- _Example_s:
  - Sorts an array of numbers descending 

```js
var people = [createPerson('Peter', 13),
  createPerson('John', 18),
  createPerson('Susan', 21)
];
people.sort(function(p1, p2) {
  return p1.name > p2.name;
});
console.log(people);              // John, Peter, Susan
```

  - Sorts array of people by name




# Other Array Methods:Array#fill
- Array#fill
  - Signature: **[].fill(callback);**
  - Callback: **callback(value [, from [, to]])**
  - Returns: **Array**
  - Behavior: fills an array with the given value
  - Support: Almost nowhere, needs a polyfill


# Other Array Methods:Array#fill

```js
var arr = [],
    count = 15;
arr[count – 1] = undefined;
arr.fill(1);
console.log(arr);
```

- _Example_s:
  - Fills an array with the number 1

```js
var arr = [],
  count = 5;
arr[count - 1] = undefined;

arr.fill([1, 2, 3, 4, 5]);
console.log(arr);
```

  - Create array of arrays

```js
[ [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ] ]
```







<!-- section start -->


# What is Chaining?
- Chaining is a pattern for calling/invoking methods in functional programming
  - Each method returns an object
    - Another method can be called on this object
    - Etc…
- To implement chaining, follow the simple pattern:
  - If a method needs to return result -> Ok, return it
    - Else return an object to enable chaining


# Chaining Array Methods
- Most of the array methods return a result
  - So they can be chained
  - _Example_: Fill an array with random digits, remove the even digits, return an array with the names of the remaining digits
- var n = 10, digits = [];
- digits[n - 1] = undefined;
- function getRandomDigit() { return (Math.random() * 10) | 0; }
- function isOdd(item) { return !!(item % 2); }
- function digitToDigitName(digit) {
-   return ['Zero', 'One', /* … */, 'Nine'][digit];
- }
- var digitNames = digits.fill(0)
-   .map(getRandomDigit)
-   .filter(isOdd)
-   .map(digitToDigitName);
- console.log(digitNames);

```js

var digitNames = digits.fill(0)
  .map(x => Math.random()*10 | 0)
  .filter(x=> !!(x%2))
  .map(x=> […][x]);
console.log(digitNames);
```


```js
In ES6:
```





# Methods on Arrays and Objects
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:48.48%; left:76.72%; width:23.80%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:48.74%; left:15.79%; width:20.90%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:4.86%; left:32.29%; width:23.51%; z-index:-1" /> -->


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




