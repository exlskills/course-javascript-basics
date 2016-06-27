'use strict';

const path = require('path'),
    studentsJson = require('fs').readFileSync(path.join(__dirname, '../files/students.json'), 'utf8'),
    studentsArray = JSON.parse(studentsJson).Students;

module.exports = studentsArray;