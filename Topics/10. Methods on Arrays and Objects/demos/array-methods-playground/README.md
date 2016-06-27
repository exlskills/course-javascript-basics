# Array methods playground

The playground provides an array of 200 random generated students as javascript objects in an array. Try out different queries with javascript array methods - `filter`, `map`, 
`reduce`, `sort`, `forEach`, `every`, `some`, `find`, `findIndex` and `slice`. Write your queries in `queries.js`. Pass the result of the query to the **html exporter** like that:

```js
let result = students.filter(...).sort(...).map(...)...

exporter.exportToHtml(result);
```

Execute the script in `queries.js` and then open the `students.html` file to see the results of your query. A very convenient setup using live-reload would be:
  - Use `nodemon` live reload on save for executing queries.
```bat
nodemon queries.js
```
  - Use `live-server` live reload on `students.html`. Live reload will be triggered on every query write to the html file.
```bat
live-server
```

## Students tasks:
- `Array.filter`
  1. Get all students that passed the **CSS** exam(requirement is to have more than **80** exam points).
  1. Get all students that didn't attend the **CSS** exam(their exam points will be `null`).
  1. Get all students that passed the **CSharp Advanced exam** with excellence - either more than **250** exam points or more than 50 points for all requirements. The formula 
  for the points is the following: **exam points** are **75%** of the final points, each **attendance** gives **1.25** points and each **homework assignment** yields **1.5** points.
  1. Get all students that successfully passed both exams - criteria is at least **80** points in **CSS** and **100** in CSharp.
- `Array.map`
  1. Extract the full name, email and gender for each student, in a single array of objects.
  1. For every student, extract the following information in a new array - the username and course mark for **CSS** - when below 80 it should be `not passed`, from 80 to 130 - `passed`, and from 130 to 200 - `passed with excellence`.
  1. For every student that passed both **CSS** and CSharp with excellence, create a certificate that has the following properties: full name of the student, the current date and the exam points.
- `Array.reduce`
  1. Extract the count of all submitted homework assignments for the **CSharp Advanced** course.
  1. Do the same task as above, but only for the students who did not pass the **CSS** exam.
  1. Find the student with the longest first name.
- `Array.sort`
  1. Sort the students by their exam results.
    - Create a ranking for all students that passed the **CSharp Advanced exam**. Display only their usernames, exam points and position in the ranking.
  1. Sort the students by their age.
  1. Sort the students by their age and then by their names.
- `Array.forEach`
  1. Print the last name and age of all students on the console.
  1. Create a **map** object, that has the usernames of the students for keys and their exam points for values.
  1. Distribute all students in the 2 Academy halls - Ultimate and Enterprise. Every second student should be distributed in Ultimate.
- `Array.every`
  1. Get the top 20 **CSS** students and check whether all of them have at least one homework submission and 2 attendances.
- `Array.some`
  1. Get the youngest 10 students and check if at least one of them has more than average points.
- `Array.fill`
  1. Create the student **Gosho**. Create an Academy of **Gosho**s by filling an array with 50 **Gosho**s.
- `Array.find` and `Array.findIndex`
  1. Find an **otlichnik** - a student with more than **150** points in **CSS** and more than **300** points in **CSharp Advanced**.
  1. Do the same, but this time with more conditions - at least **2** homework submissions in **CSS** and at least **5** attendances in **CSharp Advanced**.
  1. Find a student that has not attended the **CSS** exam.