'use strict';

const students = require('./data/data-scripts/students');

// Array.filter

// 1. Get all students that passed the **CSS** exam(requirement is to have more than **80** exam points).

// using lambda expressions(also called fat arrow functions)
let allThatPassCSS = students
    .filter(student => student.courses[0].exam > 80);

// using oldschool function expression
allThatPassCSS = students.filter(function (student) {
    return student.course[0].exam > 80;
});

// 2. Get all students that didn't attend the **CSS** exam(their exam points will be `null`).

let notAttendedCSS = students.filter(student => student.courses[0].exam === null);

// Array.map

// 1. Extract the full name, email and gender for each student, in a single array of objects.

// fat arrow(lambda expression) syntax
let studentDetails = students.map(student => ({
    fullname: student.firstname + ' ' + student.lastname,
    email: student.email,
    gender: student.gender
}));

// oldschool function expression syntax
studentDetails = student.map(function (student) {
    return {
        fullname: student.firstname + ' ' + student.lastname,
        email: student.email,
        gender: student.gender
    };
});

// Array.reduce

// 1. Extract the count of all submitted homework assignments for the **CSharp Advanced** course.

let submissionsCount = students.reduce((currentCount, student) => currentCount + students.courses[1].homeworkAssignments);

// Array.sort

// 1. Sort the students by their exam results.
//     - Create a ranking for all students that passed the **CSharp Advanced exam**. Display only their usernames, exam points and position in the ranking.

let ranking = students
                    .filter(student => student.courses[1].exam > 100)
                    .sort((st1, st2) => st2.courses[1].exam - st1.courses[1].exam)
                    .map((student, index) => ({
                        place: index + 1,
                        username: student.username,
                        points: student.courses[1].exam
                    }));