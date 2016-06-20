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
- Output the html code with the bind values.

## Constraints
- The html tags may have other attributes. Other attributes, if any, will always come after the `data-bind-*` attributes.
  - _Example_: `'<a data-bind-content="songName" href="https://www.youtube.com/watch?v=84m4hjF39A4"></a>`
- There will never be duplicating attributes for binding
  - **Not possible**: `['{ "name": "cyki", "os": "linux" }', '<cyki data-bind-os="os" data-bind-name="cyki" data-bind-os="os"/>'`
  - **Not possible**: `['{ "name": "cyki" }', '<cyki data-bind-name="name" name="cyki"/>']`
- The input strings will never contain more than 500 symbols
- Time limit: **0.2s**
- Memory limit: **32MB**

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
