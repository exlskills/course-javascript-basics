# Parse URL

## Description
Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]`
and extracts from it the `[protocol]`, `[server]` and `[resource]` elements.

## Input
- The input will consist of an array containing one string

## Output
- The output should be consisted of three line

## Constraints
- Time limit: **0.2s**
- Memory limit: **16MB**

## Sample tests

### Input
```js
[ 'http://telerikacademy.com/Courses/Courses/Details/239' ]
```

#### Output
```
protocol: http
server: telerikacademy.com
resource: /Courses/Courses/Details/239
```
