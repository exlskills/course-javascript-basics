<!-- section start -->
# Strings
## Working with strings in JavaScript
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:13.85%; left:7.51%; width:25.82%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:53.83%; left:64.98%; width:37.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:6.52%; left:63.53%; width:39.33%; z-index:-1" /> -->
<div class="signature">
	<p class="signature-course"></p>
	<p class="signature-initiative"></p>
	<a href="" class="signature-link"></a>
</div>




<!-- section start -->
# Table of Contents
- Strings in JavaScript
- String Wrapper
- String Methods
  - **trim**, **concat**, **charAt**, **substr**, **indexOf**
- String Concatenation
- Escaping
- Useful Extensions
  - Trimming
  - Padding




<!-- section start -->


# String in JavaScript
- A string is a sequence of characters
  - Text enclosed in single (**' '**) or double quotes (**" "**)

```js
var str1 = "Some text saved in a string variable";
var str2 = 'text enclosed in single quotes';
```

- String is a **primitive type**
  - It is copied / passed by value
- String is also **immutable**
  - Every time a string is changed, a new string is created




<!-- section start -->


# String Wrapper
- As string is a primitive type, it has an object wrapper type
- Primitive types keep only their value
  - When a property is called, the JS engine converts the primitive into its corresponding object type and calls the property
- Since primitive type wrappers are of type object, properties can be attached to them

```js
var str = 'sample';
str.length;
```


```js
var str = 'sample';
var tempStr = new String(str);
tempStr.length;
```


```js
same as
```





# From Object to Primitive Type
- JavaScript have a simple parsing
  - From string to number
- Conversion from primitive to object type is introduced
  - **new String('…')** creates a string object
  - **String(****strObject****)** creates a primitive string

```js
var base = 'string';
var strObj = new String(base);
var str = String(strObj);
```





<!-- section start -->


# String Methods
- **string.length**
  - Returns the number of characters in the string
- Indexer (**string[index]**)
  - Gets a single-character string at location **index**
  - If index is outside the range of string characters, the indexer returns **undefined**
    - **string[-1]** or **string[****string.length****]**
- **charAt(index)**
  - Gets a single-character string at location **index**
  - Much like the indexer



- **string.concat(string2)**
  - Returns a new string – the concatenation of the two strings
- string.replace(str1, str2)
  - Replaces first occurrence of str1 with str2
- string.search(regex)
  - Searches for a substring based on regular expression



- **string.indexOf(substring [,position])**
  - Returns the **left-most** occurrence of substring in string, that is after **position**
    - Position is optional and has default value of **0**
  - If string doesn't contain substring, returns **-1**
- **string.lastIndexOf(substring****[,position])**
  - Returns the **right-most** occurrence of substring in string, that is before **position**
    - Position is optional, default value is string.length
  - If string doesn't contain substring, returns **-****1**



- **string.split(separator)**
  - Splits the string by separator and returns an array of strings, containing the separated parts
  - Separator can be a regular expression
- **string.trim()**
  - Removes whitespace from the beginning and end of the string
- **str.trimLeft()**, **str.trimRight()**
  - Remove whitespace from the left/right side of the string



- **string.substr(start, length)**
  - Returns a substring, starting from start and counting length characters
  - length is optional
- **string.substring(start, end)**
  - Returns a substring, starting from start and ending at end
- **string.valueOf()**
  - Returns the primitive value of the object string






<!-- section start -->


# String Concatenation
- String is an immutable type
  - A value cannot be changed
  - Instead a new string is created
- There are a few ways to concatenate strings

```js
var strConcat1 = str1 + str2;
var strConcat2 = str.concat(str2);
```

- Concatenating strings is slow operation
  - Each concatenation allocates new memory



- String concatenation is one of the most used operations with strings
  - Yet it is hard to optimize it
  - Each browser makes optimizations of its own
  - Old browsers concatenate very slow with **+**
- If you support older browsers, use array.join("") for concatenation
- Works like string builder
  - Slower in modern browsers

```js
[].push(srt1,str2,str3,…).join('');
```







<!-- section start -->


# String Escape
- What is escaping?
  - Replacing reserved characters with their escape sequence
  - Prevents JavaScript injection
- When using JavaScript client-side reserved characters are '**<**', '**>**', '**&**', "**'**" and "**"**"

```js
var script = document.createElement('script');
script.innerHTML = 
       'document.location = 'http://bad_place.com'; 
document.body.appendChild(script);
```




- Escaping is done by just replacing the reserved characters with their escape sequence
  - Can be attached to the string prototype

```js
String.prototype.htmlEscape = function (){
  var escapedStr = String(this).replace(/**&**/g, **'&amp;**');
  escapedStr = escapedStr.replace(/**<**/g, '**&****lt****;**');
  escapedStr = escapedStr.replace(/**>**/g, '**&****gt****;**');
  escapedStr = escapedStr.replace(/**"**/g, '**&****quot****;**');
  escapedStr = escapedStr.replace(/**'**/g, '**&#39**');
  return escapedStr;
}
```







<!-- section start -->


# String Extensions - Trim
- **string.trim()**, **string.trimLeft()**, **string.trimRight()**
  - Supported in all modern browsers
  - For older browsers use shim
- **string.trimChars(chars)**, **string.trimLeftChars(chars)**, **string.trimRightChars(chars)**
  - Trim no-whitespace characters
  - No native implementation




# Padding
- **str.padLeft(count [,char])**, **str.padRight(count [,char])**
  - Pads a string to the left/right
  - Fills the padding with whitespace or character
  - No native implementation

```js
String.prototype.paddLeft = function (count, char) {
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





# Strings
- http://academy.Telerik.com


# Free Trainings @ Telerik Academy
- "Web Design with HTML 5, CSS 3 and JavaScript" course @ Telerik Academy
    - html5course.telerik.com
  - Telerik Software Academy
    - academy.telerik.com
  - Telerik Academy @ Facebook
    - facebook.com/TelerikAcademy
  - Telerik Software Academy Forums
    - forums.academy.telerik.com
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:58.18%; left:90.52%; width:16.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic04.png" style="top:34.35%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic05.png" style="top:48.92%; left:75.91%; width:10.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic06.png" style="top:11.88%; left:91.56%; width:14.23%; z-index:-1" /> -->




