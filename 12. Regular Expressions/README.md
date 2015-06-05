Regular Expressions
=======

### Problem 1. Format with placeholders
*	Write a function that formats a string. The function should have placeholders, as shown in the example

_Example:_

| input | output |
|-------------------------------------------------------|-------------------------------------------|
|	var options = {name: 'John'};<br/>format('Hello, there! Are you #{name}', options);	| 'Hello, there! Are you John'|
|-------------------------------------------------------|-------------------------------------------|
|	var options = {<br/>name: 'John',<br/>age: 13<br/>};<br/>format('My name is #{name} and I am #{age}-years-old',options);|'My name is 'John' and I am 13-years-old' |
