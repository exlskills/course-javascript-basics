Regular Expressions
=======

### Problem 1. Format with placeholders
*	Write a function that formats a string. The function should have placeholders, as shown in the example
	*	Add the function to the **String.prototype**

_Example:_

| input | output |
| ------------------------------------------------------- | ------------------------------------------ |
|	var options = {name: 'John'};<br/>'Hello, there! Are you #{name}?'.format(options);	| 'Hello, there! Are you John'|
|	var options = {name: 'John', age: 13};<br/>'My name is #{name} and I am #{age}-years-old').format(options);|'My name is 'John' and I am 13-years-old' |

### Problem 2. HTML binding
*	Write a function that puts the value of an object into the content/attributes of HTML tags.
	*	Add the function to the **String.prototype**

_Example:_

| input | output |
| ------------------------------------------------------- | ------------------------------------------ |
|	var str = '<div data-bind-content="name"></div>';<br/>str.bind(str, {name: 'Gosho'});`| `<div data-bind-content="name">Gosho</div>|

