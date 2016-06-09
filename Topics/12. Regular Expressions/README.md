<!-- section start -->




<!-- section start -->
# Table of Contents
- Regular Expression Overview
- Special Characters for beginning and end
- Regex in JavaScript
  - Regex literal and RegExp function constructor
- Special Characters in Regex




<!-- section start -->


# Regular Expressions Overview
- A regular expression is a set of patterns used to match character combinations in strings
  - Find and extract data from a document
  - Validate content supplied in a form before it is submitted like:
    - Telephone numbers
    - SSN/EGN
    - Email addresses
    - Anything that follows a pattern


# Regex Syntax
- Regular expressions are an extremely powerful tool implemented in most languages
- Yet, regular expressions have their own syntax and usage of special characters
  - Difficult to remember if you use them infrequently
- Regular expressions can be tested at:
  - http://www.regexr.com/ 




<!-- section start -->


# Regex Special Characters for Beginning and End
- Special Characters:
  - **^** - matches the beginning of input
    -          
    - Matches: 'Telerik Academy', 'Telerik', 'Theta'
    - Does not match: 'Academy', 'Good Telerik'
- ^T
  - **$** - matches the end of input
    -          
    - Matches: 'Telerik Academy', 'Academy', 'yummy'
    - Does not match: 'Telerik', 'Good Telerik'

```js
y$
```







<!-- section start -->


# Creating Regex in JavaScript
- Regular expressions are built-in in JavaScript
  - Can be created using a regex literal or using the RegExp function constructor:
    - Regex literal:
- var regex = \^T\;
    - RegExp function constructor:

```js
var regex = new RegExp('^T\');
```

<div class="fragment balloon" style="top:42.79%; left:66.22%; width:32.80%">Useful for static expressions</div>
<div class="fragment balloon" style="top:62.44%; left:67.05%; width:32.80%">Useful for when the expressions depends on something</div>


# Using Regex in JavaScript
- In JavaScript, the regex is used over strings
  - There are five methods for regexes:
    - **RegExp#test** – tests for a match in a string
      - Returns true or false
    - **String#match** – searches for a match in a string
      - Returns an array of information or **null** on a mismatch
    - **String#replace** – replaces the matched substring with a replacement substring
      - Returns the new string


# Using Regex in JavaScript
- In JavaScript, the regex is used over strings
  - There are five methods for regexes (cont):
    - **String#split** – breaks a string into an array of substrings, using an expression or a fixed string
      - Returns an array
    - **String#search** – tests for a match in a string
      - It returns the index of the match, or -1 if the search fails






<!-- section start -->


# Special Characters in Regex
- The regular expressions have a set of special characters, that have a different behavior
  - Characters for matching multiple characters
  - Characters for matching whitespace
  - Characters for matching digits
  - Characters for matching letters
  - Etc…
- Full list of special characters can be found at:
  - https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters 


# Special Characters in Regex: *
- Special Characters in Regex:
  - ***** – The preceding character is matched 0 or more times
    -          
    - Matches: 'alaaaaaa bala'
    - Does not match: 'Good Telerik', 'Doncho Minkov'
    - Remark:
      - Matches: 'Doncho Minkov'
      - 'a' is matched 0 times

```js
a*
```


```js
Da*oncho
```





# Special Characters in Regex: +
- Special Characters in Regex:
  - **+** – The preceding character is matched 1 or more times
    -          
    - Matches: 'alaaaaaa bala'
    - Does not match: 'Doncho Minkov', 'Good Telerik'
    - Remark:
      - Does not match: 'Doncho Minkov'

```js
a+
```


```js
Da+oncho
```





# Special Characters in Regex: ?
- Special Characters in Regex:
  - **?** – The preceding character is matched 0 or 1 times
    -          
    - Matches: 'Telerik is Telerik'
    - Does not match: 'Academy'

```js
T?
```






- Special Characters in Regex:
  - .(dot) – matches any single character except the newline character
    -          
    - Matches: 'Telerik is Telerik'
    - Remark:
      - Matches any whole string 

```js
.
```


```js
.*
```





# Special Characters in Regex: |
- Special Characters in Regex:
  - **|** – Matches one pattern or the other
    -        
    - Matches: 'Telerik Academy'

```js
T|A
```





# Special Characters in Regex: [ ]
- Special Characters in Regex:
  - **[xyz]** – Character set
    - Matches any one of the enclosed characters
    -        
    - Matches: 'Telerik Academy'

```js
[TAy]
```





# Special Characters in Regex: [ ]
- Special Characters in Regex:
  - **[x-z]** – Character set
    - Matches any one between the characters range
    -        
    - Matches: 'Telerik Academy'
    -  
    - Matches: 'Telerik Academy'
    -  
    - Matches: 'Telerik Academy'
    -  
    - Matches: 'John in 19-years-old'

```js
[A-Z]
```


```js
[A-z]
```


```js
[a-q]
```


```js
[0-9]
```





# Special Characters in Regex: [^xyx]
- Special Characters in Regex:
  - **[^****xyx****]** – A negated or complemented character set
    - Matches anything that is not enclosed in the brackets       
    -  
    - Matches: 'Telerik Academy' 
    - Does not match: 'eaaaaeeeaaa', 'aaaa', 'eeee'

```js
[^ea]+
```





# Special Characters in Regex: {}
- Special Characters in Regex:
  - **{N}** – matches exactly **N** occurrences       
    - Where **N** is a positive number
    -  
    - Matches: 'Telerik Academy', 'Doncho Minkov'
    - Does not match: 'JS is the best' 

```js
[A-z]{5}
```

  - **{N, M}** – matches at least **N** and at most **M** occurrences of the preceding character
    - Where **N** and **M** are positive integers
    -   
    - Matches: 'Telerik Academy', 'JS is best' 
    - Does not match: 'Ivo is the MAN'

```js
[A-z]{4, 5}
```





# Other Special Characters in Regex
- Special Characters in Regex:
  - **/s** – matches a single white space character, including space, tab, form feed, line feed
  - **/****S** – matches a single character other than white space
  - **/d** – matches a digit character
    - Equivalent to **[0-9****]**
  - **/D** – matches any non-digit character
    - Equivalent to **[^0-9****]**
  - **/w** – matches any alphanumeric character including the underscore
  - **/W** – matches any non-alphanumeric or underscore character






<!-- section start -->


# Regular Expression Flags
- Regular expression have optional flags that allow for global and case insensitive searching
  - These flags can be used separately or together in any order
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic00.png" style="top:42.17%; left:6.55%; width:93.44%; z-index:-1" /> -->




# Regular Expressions in JS
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
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic01.png" style="top:58.18%; left:90.52%; width:16.97%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic02.png" style="top:34.35%; left:68.14%; width:36.30%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic03.png" style="top:48.92%; left:75.91%; width:10.85%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs/pic04.png" style="top:11.88%; left:91.56%; width:14.23%; z-index:-1" /> -->




