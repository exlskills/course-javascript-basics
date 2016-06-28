# Parse tags

## Description
You are given a text. Write a function that changes the text in all regions:

```
<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<orgcase>text</orgcase> does not change casing
```

_Note: Regions can be nested._

## Input
- The input will consist of an array containing one string

## Output
- The output should be consisted of one line

## Constraints
- Time limit: **0.2s**
- Memory limit: **16MB**

## Sample tests

#### Input
```js
[ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ]
```

#### Output
```
We are liViNg in a YELLOW SUBMARINE. We doN't have anything else.
```
