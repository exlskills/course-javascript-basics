Regular Expressions
=======

### Problem 1. Format with placeholders
*	Write a function that formats a string. The function should have placeholders, as shown in the example

_Example:_

|  input                                                  | output                                      |
|:-------------------------------------------------------:|:-------------------------------------------:|
| var options = {name: 'John'};                           | 'Hello, there! Are you John'                |
| format('Hello, there! Are you #{name}', options);       |                                             |
|:-------------------------------------------------------:|:-------------------------------------------:|
| var options = {name: 'John',                            |'My name is 'John' and I am 13-years-old'    |
|                age: 13};                                |                                             |
| format('My name is #{name} and I am #{age}-years-old',  |                                             |
|          options);                                      |                                             |

