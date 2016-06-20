<!-- section start -->

<!-- attr: { class:'slide-title', showInPresentation: true, hasScriptWrapper: true} -->
# Arrays
## Processing Sequences of Elements

<div class="signature">
	<p class="signature-course">JavaScript Fundamentals</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="https://telerikacademy.com" class="signature-link">https://telerikacademy.com</a>
</div>

<!-- section start -->

# Table of Contents

- Declaring and Creating Arrays
- Accessing Array Elements
- Processing Array Elements
- Dynamic Arrays
- Operations with arrays:
  - Concatenation
  - Slicing
  - Manipulation

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:44.08%; left:74.85%; width:27.99%; z-index:-1" /> -->

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true, hasScriptWrapper: true}  -->
# Arrays Overview
##  What are arrays? How to use arrays?

<!-- attr: {hasScriptWrapper: true} -->
# What are Arrays?
- An **array** is a sequence of elements
  - The order of the elements is fixed
  - Does not have fixed size
    - Can get the current length (`Array.length`)

<img class="slide-image" src="imgs/pic01.png" style="width: 400px; left: 23%" />

<div class="fragment balloon" style="top:43%; left:30%; width:20.83%">Array of 5 elements</div>
<div class="fragment balloon" style="top:50%; left:64%; width:18.33%">Element index</div>
<div class="fragment balloon" style="top:70%; left:25.69%; width:22.17%">Element of an array</div>



# Declaring Arrays
- Declaring an array in JavaScript

```js
// Array holding integers
var numbers = [1, 2, 3, 4, 5];

// Array holding strings
var weekDays = ['Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday']

// Array of different types
var mixedArr = [1, new Date(), 'hello'];

// Array of arrays (matrix)
var matrix = [
  ['0,0', '0,1', '0,2'],
  ['1,0', '1,1', '1,2'],
  ['2,0', '2,1', '2,2']];			
```

<!-- attr: {showInPresentation: true} -->
<!-- # Declare and Initialize Arrays -->

- Initializing an array in JavaScript can be done in three ways:
  - Using `new Array(elements)`:

    ```js
    var arr = new Array(1, 2, 3, 4, 5);
    ```

  - Using `new Array(initialLength)`:

    ```js
    var arr = new Array(10);
    ```

  - Using `array literal` (recommended):

    ```js
    var arr = [1, 2, 3, 4, 5];
    ```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic06.png" style="top:50.25%; left:86.49%; width:18.74%; z-index:-1" /> -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Creating Arrays -->
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic07.png" style="top:35.26%; left:59.88%; width:38.48%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic08.png" style="top:12.64%; left:15.37%; width:20.78%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic09.png" style="top:39.23%; left:11.21%; width:37.80%; z-index:-1" /> -->

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Using arrays
## Read and Modify Elements by Index -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic10.png" style="top:41.43%; left:34.38%; width:41.09%; z-index:-1" /> -->

# How to Access Array Element?

- Array elements are accessed using the **indexer operator**: `[]` (square brackets)
  - Array indexer takes element’s index as parameter in the range `[0; length-1]`
  - The first element has index `0`
  - The last element has index `length-1`
- Array elements can be retrieved and changed by the `[]` (indexer) operator

<!-- attr: {showInPresentation: true} -->
<!-- # Reversing an Array – _Example_ -->

- _Example:_ Reversing the elements of an array

```js
//always declare var variables on the top of the scope!
var array,
    len,
    reversed,
    i,
    j;

array = [1, 2, 3, 4, 5];
reversed = [];

for (i = 0, len = array.length; i < len; i += 1) {
    j = len - i - 1;
    reversed.push(array[j]);
}
```

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Reversing an Array -->
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic11.png" style="top:37.34%; left:67.54%; width:34.31%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic12.png" style="top:38.76%; left:9.12%; width:41.03%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic13.png" style="top:7.37%; left:77.66%; width:25.45%; z-index:-1" /> -->


<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Iterating Arrays -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic14.png" style="top:39.67%; left:30.28%; width:48.88%; z-index:-1" /> -->

# Iterating Arrays with `for`
- Use `for` loop to process an array when you need to keep track of the index
- In the loop body use the element at the loop index (`array[index]`):

```js
var i, len;
for (i = 0, len = array.length; i < len; i += 1) {
   squares[i] = array[i] * array[i];
}
```

<!-- attr: { style: 'font-size:0.9em', showInPresentation: true} -->
<!-- # Iterating Arrays with `for` -->
- _Example:_ Printing array of numbers in reversed order:

```js
var arr, i, len;
arr = [1, 2, 3, 4, 5];
for (len = arr.length, i = len - 1; i >= 0; i -= 1) {
    console.log(arr[i]);
}
// Result: 5 4 3 2 1
```

- _Example:_ Initialize all array elements with their corresponding index number:

```js
var i, len
for (i = 0, len = array.length; i < len; i += 1) {
    array[i] = i;
}
```

# Iterating Arrays using `for-in`
- How `for-in` loop works?
  - `index` iterates through the indexes of the array
- Used when the indexes are unknown
  - All elements are accessed one by one
  - Order is not guaranteed
  - Works for objects as well

```js
var index;
for (index in array) {
  // great code
}
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic15.png" style="top:44.08%; left:90.64%; width:14.21%; z-index:-1" /> -->

<!-- attr: {showInPresentation: true} -->
<!-- # Iterating Arrays with `for-in` -->

- Print all elements of an array of strings:

```js
var capitals, i;
capitals = [
    'Sofia',
    'Washington',
    'London',
    'Paris'
];

for (i in capitals) {
    console.log(capitals[i]);
}
```


<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Processing Arrays -->
## [Demo]()
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic16.png" style="top:13.22%; left:30.88%; width:46.50%; z-index:-1" /> -->


<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Inserting and Removing Elements from Arrays
##  `push`, `pop`, `shift`, `unshift` -->

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic17.png" style="top:8.82%; left:41.88%; width:61.04%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic18.png" style="top:50.25%; left:62.95%; width:24.44%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic19.png" style="top:27.10%; left:-3.24%; width:46.02%; z-index:-1" /> -->


# Inserting and Removing Elements from Arrays

- All arrays in JavaScript are **dynamic**
  - Their size can be changed at runtime
  - New elements can be inserted to the array
  - Elements can be removed from the array

<!-- attr: {showInPresentation: true} -->
<!-- # Inserting and Removing Elements from Arrays
- Methods for array manipulation: -->
  - `Array#push(element)`
    - **Inserts** a new element at the **tail** of the array
  - `Array#pop()`
    - **Removes** the element at the **tail**
    - **Returns** the removed element

<!-- attr: {showInPresentation: true} -->
<!-- # Inserting and Removing Elements from Arrays
- Methods for array manipulation (cont.) -->
  - `Array#unshift(element)`
    - **Inserts** a new element at the **head** of the array
  - `Array#shift()`
    - **Removes** the element at the **head**
    - **Returns** the remove element

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Inserting and Removing Elements from Arrays -->
## [Demo](/)
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic20.png" style="top:12.54%; left:22.71%; width:72.44%; z-index:-1" /> -->


<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Array Methods
##  Reversing, joining, etc... -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic21.png" style="top:25.98%; left:5.49%; width:88.46%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic22.png" style="top:10.58%; left:47.72%; width:48.00%; z-index:-1" /> -->

<!-- attr: { style: 'font-size: 0.8em'} -->
# Array Methods

- `Array#reverse()`
  - **Reverses** the elements of the array
  - **Returns** a new arrays

  ```js
  var items = [1, 2, 3, 4, 5, 6];
  var reversed = items.reverse();
  //reversed = [6, 5, 4, 3, 2, 1]
  ```

- `Array#join(separator)`
  - **Concatenates** the elements with a separator
  - **Returns** a string

  ```js
  var names = ["John", "Jane", "George", "Helen"];
  var namesString = names.join(", ");
  //namesString = "John, Jane, George, Helen"
  ```

  <!-- attr: { style: 'font-size: 0.8em'} -->
# Concatenating Arrays
- `arr1.concat(arr2)`
  - **Inserts** the elements of `arr2` at the **end** of `arr1`
  - **Returns** a new array
  - `arr1` and `arr2` remain unchanged!

  ```js
  var arr1 = [1, 2, 3];
  var arr2 = ["one", "two", "three"];
  var result = arr1.concat(arr2);
  //result = [1, 2, 3, "one", "two", "three"]
  ```

- Adding the elements of an array to other array

  ```js
  var arr1 = [1, 2, 3];
  var arr2 = ["one", "two", "three"];
  [].push.apply(arr1, arr2);
  //arr1 = [1, 2, 3, "one", "two", "three"]
  ```

# Getting Parts of Arrays
- `Array#slice(fromIndex [, toIndex])`
  - **Returns a new array**
    - A shallow copy of a portion of the array
  - The new array contains the elements from indices `fromIndex` to `to` (excluding `toIndex`)
  - Can be used to clone an array

  ```js
  var items = [1, 2, 3, 4, 5];
  var part = items.slice(1, 3);
  //part = [2, 3]
  var clonedItems = items.slice();  
  ```

# Splicing Arrays

- `Array#splice(index, count, elements)`
  - Removes `count` elements, starting from `index` position
  - Adds `elements` at position `index`
  - Returns a new array, containing the removed elements

  ```js
  var numbers = [1, 2, 3, 4, 5, 6, 7];
  var result = numbers.splice(3, 2, "four", "five", "five.five");
  //result = [4, 5]
  //numbers = [1, 2, 3, "four", "five", "five.five", 6, 7];
  ```

<!-- attr: {showInPresentation: true} -->
<!-- # Splicing Arrays
- `Array#splice(index, count, elements)` -->

  - Example uses:
    - Remove elements from any index of the array:

      ```js
      //removes a single element at position index
      items.splice(index, 1);
      //removes count elements starting from position index
      items.splice(index, count);  
      ```

    -  Insert elements at any index of the array:

      ```js
      //Inserts a single element at position index
      items.splice(index, 0, element);
      //Inserts many elements starting from position index
      items.splice(index, 0, item1, item2, item3);  
      ```

<!-- attr: { style: 'font-size: 0.9em'} -->
#  Searching in Arrays

- `Array#indexOf(element [, rightOf])`
  - Returns the index of the first match in the array
  - Returns `-1` is the element is not found
- `Array#lastIndexOf(element, [leftOf])`
  - Returns the index of the first match in the array
  - Returns `-1` is the element is not found
- `Array#indexOf()` and `Array#lastIndexOf()` do not work in all browsers
  - Need to be shimmed

# Other Arrays Functions
- Arrays official documentation:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- Checking for array
  - `typeof([1, 2, 3]) -> object`
    - Not working
  - `Array.isArray([1, 2, 3]) -> true`
  - Supported on all modern browsers

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Arrays
##  Questions
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic23.png" style="top:58.45%; left:5.90%; width:14.10%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic24.png" style="top:48.65%; left:40.41%; width:21.33%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic25.png" style="top:51.43%; left:81.73%; width:18.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic26.png" style="top:17.82%; left:17.99%; width:12.14%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic27.png" style="top:4.41%; left:62.69%; width:21.16%; z-index:-1" /> -->

# Free Trainings @ Telerik Academy
- "Web Design with HTML 5, CSS 3 and JavaScript" course @ Telerik Academy
    - html5course.telerik.com
  - Telerik Software Academy
    - academy.telerik.com
  - Telerik Academy @ Facebook
    - facebook.com/TelerikAcademy
  - Telerik Software Academy Forums
    - forums.academy.telerik.com

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic28.png" style="top:58.18%; left:90.52%; width:16.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic29.png" style="top:34.35%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic30.png" style="top:48.92%; left:75.91%; width:10.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic31.png" style="top:11.88%; left:91.56%; width:14.23%; z-index:-1" /> -->
