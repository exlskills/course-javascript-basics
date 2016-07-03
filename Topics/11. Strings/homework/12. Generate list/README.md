# Generate list

## Description
e a function that creates a HTML `<ul>` using a template for every HTML `<li>`.
source of the list should be an array of elements.
ace all placeholders marked with –{…}– with the value of the corresponding property of the object.

_Example:_ 
_HTML:_ 

```html
<div data-type="template" id="list-item">
    <strong>-{name}-</strong> <span>-{age}-</span>
</div>
```

_JavaScript:_ 

```js
var people = [{name: 'Peter', age: 14},…];
var tmpl = document.getElementById('list-item').innerHtml;
var peopleList = generateList(people, template);
// peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'
```

## Submission
- You do not have to submit anything for this problem
