# Parse tags

## Description
You are given a text. Write a function that changes the text in all regions:

```
<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<mixcase>text</mixcase> to mix casing (alternating lowercase-uppercase)
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
[ 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.' ]
```

#### Output
```
We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.
```
