'use strict';

const exporter = require('./student-exporter'),
    students = require('./data/data-scripts/students');

// queries go here

let allThatPassCSS = students
                        .filter(student => student.courses[0].exam > 80);

// export to html page
exporter.exportToHtml(allThatPassCSS);