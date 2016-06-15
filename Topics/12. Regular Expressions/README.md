<!-- section start -->
<!-- attr: {  class:'slide-title', showInPresentation:true, hasScriptWrapper:true, style:'font-size: 0.9em' } -->
# Regular Expressions in JavaScript
## Search and replace in strings using patterns

<div class="signature">
	<p class="signature-course">Javascript Fundamentals</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="https://telerikacademy.com" class="signature-link">https://telerikacademy.com</a>
</div>

<!-- <img src="imgs/regex.jpg" showInPresentation="true" class="slide-image" style="top:55%; left:65%; width:30%; border-radius: 15px" /> -->

<!-- section start -->
<!-- attr: { hasScriptWrapper: true } -->
# Table of Contents
- [Regex overview](#regex-overview)
- [Regex in JavaScript](#regex-in-javascript)
  - [Creating a Regex](#creating-a-regex)
  - [Regex methods and properties](#methods-and-properties)
  - [Use](#use)
  - [Flags](#flags)
- [Regex special characters](#special-characters)

<!-- <img class="slide-image" showInPresentation="true" src="imgs/toc.png" style="top:15%; left:70%; width:30%; z-index:-1" /> -->

<!-- section start -->
<!-- attr: { id:'regex-overview', class:'slide-section', showInPresentation: true } -->
<!-- # <a id="regex-overview"></a>Regular Expressions Overview -->

<!-- attr: { style:'font-size: 0.9em' } -->
# Regular Expressions Overview
- A regular expression is a **set of characters that defined a pattern used to match character combinations in strings**
  - Very **powerful for find/replace** type of operations
- Some examples when regular expressions are powerful:
  - Find and extract data from a document
    - Extract image source from HTML, extract exceptions/errors from logs
  - Validate data provided as text:
    - Passwords, emails, mobile numbers, urls


# Regex Syntax
- Regular expressions are an extremely powerful tool implemented in most languages
- Yet, regular expressions have their own syntax and use of special characters
  - Difficult to remember unless used frequently
  - [MDN Regex reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- Regular expressions can be tested at:
  - http://www.regexr.com/ 
  - https://regex101.com/




<!-- section start -->
<!-- attr: { id:'regex-in-javascript', class:'slide-section' } -->
# <a id="regex-in-javascript"></a>Regex in JavaScript

<!-- attr: { id:'creating-a-regex', showInPresentation: true } -->
<!-- # <a id="creating-a-regex"></a>Creating Regex in JavaScript -->
- Regular expressions are **built-in in JavaScript**
  - Can be created using a **regex literal** or a **function constructor**
  - Regex literals are useful for static expressions
  - The function constructor comes into play when the expression depends on other paramaters

<!-- attr: { showInPresentation: true, style:'font-size: 0.9em' } -->
<!-- # Creating Regex in JavaScript -->
- The following will match 'Telerik Academ**y**', 'Dumm**y**', 'Kitt**y**', 'yumm**y**'

```js
// literal syntax
const literalRegex = /y$/g;
```

- The following will match '**T**elerik Academy', '**T**osho'

```js
// function constructor syntax
const constructorRegex = new RegExp('^T', 'g');
```

<!-- attr: { id:'methods-and-properties' } -->
# <a id="methods-and-properties"></a>Regex methods and properties
- In JavaScript, the regex is used over strings
  - Useful/important regex methods:
    - `RegExp.test` – searches for a match in a given string. Returns `true` or `false`.
    - `String.match` – searches for a match in a string
      - Returns an array of information or `null` on a mismatch
    - `String.replace` – replaces the matched substring with a replacement substring
      - Returns the new string

<!-- attr: { showInPresentation: true } -->
<!-- # Regex methods and properties -->
- `String.split` – breaks a string into an array of substrings, using a regex or a string search for matches
  - Returns an array
- `String.search` – tests for a match in a string
  - It returns the index of the match, or -1 if the search fails

<!-- attr: { id:'use' } -->
# <a id="use"></a>Using Regex in JavaScript
## TODO

<!-- attr: { id:'flags', showInPresentation: true, hasScriptWrapper: true } -->
# <a id="flags"></a>Regular Expression Flags
- Regular expression have optional flags that allow for global and case insensitive searching
  - These flags can be used separately or together in any order

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:45%; left:5%; width:90%; z-index:-1" /> -->



<!-- section start -->
<!-- attr: { id:'special-characters', class:'slide-section', showInPresentation: true } -->
<!-- # <a id="special-characters"></a>Regex Special Characters -->

<!-- attr: { hasScriptWrapper: true, style:'font-size: 0.9em' } -->
# Special Characters in Regex
- The regular expressions have a set of special characters,<br> that have a different behavior
  - Characters for matching multiple characters
  - Characters for matching whitespace
  - Characters for matching digits
  - Characters for matching letters
  - Etc…
- Full list of special characters can be found [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters)


<!-- attr: { showInPresentation: true } -->
<!-- # Special Characters in Regex -->
- `*` – The preceding character/group is matched 0 or more times
- `+` – Almost the same behaviour as `*` - the preceding character/group is matched 1 or more times
- `?` – The preceding character/group is matched 0 or 1 times
- .(dot) – matches any single character except the newline character

<!-- attr: { showInPresentation: true } -->
<!-- # Special Characters in Regex  -->
- `|` – Matches one pattern or the other
- `[xyz]` – Character set - Matches any of the characters
- `[x-z]` – Character set - Matches any one between the characters range
- `[^xyz]` – Inverted characters set - Matches all other characters


<!-- attr: { showInPresentation: true } -->
<!-- # Special Characters in Regex  -->
- `{N}` – matches exactly `N` occurrences of the preceding character/group      
- `{N, M}` – matches at least `N` and at most `M` occurrences of the preceding character/group
- `^` - matches the start of the string
- `$` matches the end of the string

<!-- attr: { showInPresentation: true } -->
<!-- # Special Characters in Regex  -->
- `\s` – matches a single white space character, including space, tab, form feed, line feed
- `\S` – matches a single character other than white space
- `\d` – matches a digit character
  - Equivalent to `[0-9]`

<!-- attr: { showInPresentation: true } -->
<!-- # Special Characters in Regex -->
- `\D` – matches any non-digit character
  - Equivalent to `[^0-9]`
- `\w` – matches any alphanumeric character including the underscore
- `\W` – matches any non-alphanumeric or underscore character


<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Regular Expressions in JavaScript
## Questions? -->


<!-- attr: { showInPresentation: true, hasScriptWrapper: true } -->
# Free Trainings @ Telerik Academy
- "Web Design with HTML 5, CSS 3 and JavaScript" course @ Telerik Academy
    - [javascript course](http://academy.telerik.com/student-courses/web-design-and-ui/javascript-fundamentals/about)
  - Telerik Software Academy
    - [academy.telerik.com](academy.telerik.com)
  - Telerik Academy @ Facebook
    - [facebook.com/TelerikAcademy](facebook.com/TelerikAcademy)
  - Telerik Software Academy Forums
    - [forums.academy.telerik.com](http://telerikacademy.com/Forum/Home)

<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:65%; left:90%; width:16%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:41%; left:68%; width:36%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:56%; left:75%; width:10%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic04.png" style="top:20%; left:91%; width:14%; z-index:-1" /> -->




