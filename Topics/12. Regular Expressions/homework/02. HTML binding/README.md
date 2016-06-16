# HTML binding

## Description

- Write a function that puts the value of an object into the content/attributes of HTML tags.
  - Add the function to the `String.prototype` and use it in the following way:

```js
var html = '<div data-bind-content="name"></div>';
var data = { name: 'Pesho' };

var result = html.bind(data);
```

## Input
- The input array will look like this:

```js
[
	'{ name: "Steven" }',
	'<div data-bind-content="name"></div>'
]
```

## Output
- Output the html code with the binded values.

## Constraints
- Time limit: **0.2s**
- Memory limit: **16MB**

## Sample Tests

#### Input 1 
```js
[
	'{ "name": "Steven" }',
	'<div data-bind-content="name"></div>'
]
```

#### Output 1
```html
<div data-bind-content="name">Steven</div>
```

#### Input 1

```js
[
	'{ "name": "Elena", "link": "http://telerikacademy.com" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]
```

#### Output 1

```html
<a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</а>
```