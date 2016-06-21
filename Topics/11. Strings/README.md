<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section' } -->
# Strings
## Working with strings in JavaScript

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:13.85%; left:7.51%; width:20%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:55%; left:66%; width:35%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:5%; left:75%; width:25%; z-index:-1" /> -->

<div class="signature">
	<p class="signature-course">Javascript Fundamentals</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="https://telerikacademy.com" class="signature-link">https://telerikacademy.com</a>
</div>

<!-- section start -->
<!-- attr: { hasScriptWrapper:true } -->
# Table of Contents
- [Strings in JavaScript](#strings-js)
- [String Wrapper](#string-wrapper)
- [String Methods](#string-methods)
  - `trim`, `concat`, `charAt`, `substr`, `indexOf`
- [String Concatenation](#string-concat)
- [Escaping](#string-escape)
- [Useful Extensions](#string-extensions)
  - [Trimming](#string-trim)
  - [Padding](#string-padding)

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'strings-js' } -->
# <a id="strings-js"></a>String in JavaScript
## `'This is a String'`

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # String in JavaScript -->
- A string is a sequence of characters
  - Text enclosed in single (`''`) or double quotes (`""`)

```js
var str1 = "Some text saved in a string variable";
var str2 = 'text enclosed in single quotes';
```

- String is a **primitive type**
  - It is copied / passed by value
- String is also **immutable**
  - Every time a string is changed, a new string is created

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, class:'slide-section demo' } -->
<!-- # String in JavaScript
## [Demo]() -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'string-wrapper' } -->
# <a id="string-wrapper"></a>String Wrapper
## `new String`

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, style:'font-size:0.8em' } -->
<!-- # String Wrapper -->
- As string is a primitive type, it has an object wrapper type
- Primitive types keep only their value
  - When a property is called, the JS engine converts the primitive into its corresponding object type and calls the property
- Since primitive type wrappers are of type object, properties can be attached to them

```js
let str = 'sample';
str.length;
```

```js
let str = 'sample';
let tempStr = new String(str);
tempStr.length;
```

<!-- attr: { hasScriptWrapper:true } -->
# From Object to Primitive Type
- JavaScript have a simple parsing
  - From `string` to `number`
- Conversion from primitive to object type is introduced
  - `new String('…')` - creates a string object
  - `String(strObject)` - creates a primitive string

```js
let base = 'string';
let strObj = new String(base);
let str = String(strObj);
```

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, class:'slide-section demo' } -->
<!-- # String Wrapper
## [Demo](demos/1. string-wrapper.html) -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'string-methods' } -->
# <a id="string-methods"></a>String Methods
## Operations with strings

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # String Methods -->
- `string.length`
  - Returns the number of characters in the string
- Indexer (`string[index]`)
  - Gets a single-character string at location `index`
  - If `index` is outside the range of string characters, the indexer returns `undefined`
    - `string[-1]` or `string[string.length]`
- `charAt(index)`
  - Gets a single-character string at location `index`
  - Much like the indexer

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # String Methods -->
- `string.concat(string2)`
  - Returns a new string – the concatenation of the two strings
- `string.replace(str1, str2)`
  - Replaces first occurrence of `str1` with `str2`
- `string.search(regex)`
  - Searches for a substring based on regular expression

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, style:'font-size:0.8em' } -->
<!-- # String Methods -->
- `string.indexOf(substring [,position])`
  - Returns the **left-most** occurrence of `substring` in a string, that is after `position`
    - Position is optional and has default value of `0`
  - If string doesn't contain `substring`, returns `-1`
- `string.lastIndexOf(substring [,position])`
  - Returns the **right-most** occurrence of `substring` in a string, that is before `position`
    - Position is optional, default value is `string.length`
  - If string doesn't contain `substring`, returns `-1`

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # String Methods -->
- `string.split(separator)`
  - Splits the string by `separator` and returns an array of strings, containing the separated parts
  - Separator can be a regular expression
- `string.trim()`
  - Removes whitespace from the beginning and end of the string
- `str.trimLeft()`, `str.trimRight()`
  - Remove whitespace from the left/right side of the string

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # String Methods -->
- `string.substr(start, length)`
  - Returns a substring, starting from `start` and counting `length` characters
  - `length` is optional
- `string.substring(start, end)`
  - Returns a substring, starting from `start` and ending at `end`
- `string.valueOf()`
  - Returns the primitive value of the object string

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, class:'slide-section demo' } -->
<!-- # String Methods
## [Demo](demos/2. string-methods.html) -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'string-concat' } -->
# <a id="string-concat"></a>String Concatenation
## `'Firstname' + ' ' + 'Lastname'`

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # String Concatenation -->
- String is an immutable type
  - A value cannot be changed
  - Instead a new string is created
- There are a few ways to concatenate strings

```js
var strConcat1 = str1 + str2;
var strConcat2 = str.concat(str2);
```

- Concatenating strings is a slow operation
  - Each concatenation allocates new memory

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, style:'font-size:0.9em' } -->
<!-- # String Concatenation -->
- String concatenation is one of the most used operations with strings
  - Yet it is hard to optimize it
  - Each browser makes optimizations of its own
  - Old browsers concatenate very slow with `+`
- If you support older browsers, use `array.join("")` for concatenation
- Works like string builder
  - Slower in modern browsers

```js
[].push(srt1, str2, str3, …).join('');
```

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, class:'slide-section demo' } -->
<!-- # String Concatenation
## [Demo](demos/3. string-concatenation.html) -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'string-escape' } -->
# <a id="string-escape"></a>String Escape
## Preventing injection

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # String Escape -->
- What is escaping?
  - Replacing reserved characters with their escape sequence
  - Prevents JavaScript injection
- When using JavaScript client-side reserved characters are `<`, `>`, `&`, `'` and `"`

```js
var script = document.createElement('script');
script.innerHTML =
       'document.location = \'http://bad_place.com\'';
document.body.appendChild(script);
```

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # String Escape -->
- Escaping is done by just replacing the reserved characters with their escape sequence
  - Can be attached to the string prototype

```js
String.prototype.htmlEscape = function () {
  let escapedStr = String(this)
      .replace(/&/g, '&amp;');
      .replace(/</g, '&lt;');
      .replace(/>/g, '&gt;');
      .replace(/"/g, '&quot;');
      .replace(/'/g, '&#39');
  return escapedStr;
}
```

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, class:'slide-section demo' } -->
<!-- # String Escape
## [Demo](demos/4. string-escape.html) -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, class:'slide-section', id:'string-extensions' } -->
# <a id="string-extensions"></a>String Extensions
## Writing useful methods

<!-- attr: { hasScriptWrapper:true, id:'string-trim' } -->
# <a id="string-trim"></a>String Extensions - Trim
- `string.trim()`, `string.trimLeft()`, `string.trimRight()`
  - Supported in all modern browsers
  - For older browsers use shim
- `string.trimChars(chars)`, `string.trimLeftChars(chars)`, `string.trimRightChars(chars)`
  - Trim no-whitespace characters
  - No native implementation

<!-- attr: { hasScriptWrapper:true, style:'font-size:0.9em', id:'string-padding' } -->
# <a id="string-padding"></a>String Extensions - Padding
- `str.padLeft(count [,char])`, `str.padRight(count [,char])`
  - Pads a string to the left/right
  - Fills the padding with whitespace or character
  - No native implementation

```js
String.prototype.padLeft = function (count, char) {
  char = char || ' ';
  if(char.length > 1) return String(this);
  if(str.length >= count) return String(this);
  var s = String(this);
  for (var i = 0, len = this.len; i < count - len; i++) {
    s = char + s;
  }
  return s;
}
```

<!-- attr: { hasScriptWrapper:true, showInPresentation:true, class:'slide-section demo' } -->
<!-- # String Extensions
## [Demo](demos/5. trim-extensions.html) -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, showInPresentation:true, class:'slide-section' } -->
<!-- # Strings
## Questions? -->

<!-- attr: { hasScriptWrapper:true } -->
# Free Trainings @ Telerik Academy
- "Web Design with HTML 5, CSS 3 and JavaScript" course @ Telerik Academy
  - [javascript course](http://academy.telerik.com/student-courses/web-design-and-ui/javascript-fundamentals/about)
- Telerik Software Academy
  - [academy.telerik.com](http://academy.telerik.com)
- Telerik Academy @ Facebook
  - [facebook.com/TelerikAcademy](https://facebook.com/TelerikAcademy)
- Telerik Software Academy Forums
  - [forums.academy.telerik.com](https://telerikacademy.com/Forum/Home)

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:66%; left:90.52%; width:16.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic04.png" style="top:42%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic05.png" style="top:57%; left:75.91%; width:10.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic06.png" style="top:22%; left:91.56%; width:14.23%; z-index:-1" /> -->
