'use strict';

const fs = require('fs'),
    templates = (function () {
        const arrayTemplate = fs.readFileSync('./templates/array-template.html', 'utf8'),
            htmlTemplate = fs.readFileSync('./templates/students-template.html', 'utf8');

        return {
            array: function (items, username, id) {
                return arrayTemplate
                    .replace(/{{data-id}}/g, username + '-' + id)
                    .replace(/{{items}}/g, items.join(''));
            },
            arrayItem: function (value) {
                return `<li class="list-group-item container" style="width: 250px">${value}</li>`;
            },
            html: function (columns, rows) {
                return htmlTemplate
                    .replace(/{{count}}/g, rows.length)
                    .replace(/{{columns}}/g, columns.join('\n'))
                    .replace(/{{rows}}/g, rows.join('\n'));
            },
            img: function (src) {
                return `<img src="${src}" alt="avatar" style="height: 100px; width: 95px" />`;
            },
            object: function (obj) {
                const listItems = [],
                    propNames = Object.keys(obj);

                for (const name of propNames) {
                    listItems.push(`<li class="list-group-item">${name}: ${obj[name]}</li>`);
                }

                return `<ul class="list-group">${listItems.join('\n')}</ul>`;
            }
        };
    } ());

function getColumnsFromStudents(students) {
    const columnNames = Object.keys(students[0]);

    return columnNames.map(name => `<th>${name}</th>`);
}

function studentToTableRow(student) {

    const studentValues = [],
        propNames = Object.keys(student);

    for (const name of propNames) {
        let value = student[name];

        if (name === 'avatar') {
            value = templates.img(value);
        } else if (Array.isArray(value)) {
            let filter = null;

            if (value.length && (typeof (value[0]) === 'object')) {
                filter = templates.object;
            }

            const row = value.map(x => templates.arrayItem(filter ? filter(x) : x));
            value = templates.array(row, student.username, name);

        } else if (typeof (value) === 'object') {
            value = templates.object(value);
        }

        studentValues.push(value);
    }

    const row = studentValues.map(value => `<td>${value}</td>`).join('');

    return `<tr>${row}</tr>`;
}

module.exports = {
    exportToHtml: function (students) {

        if(!Array.isArray(students)) {
            return fs.writeFile('students.html', `<h1>students</h1>`, err => err ? console.log(err) : undefined);
        }

        const columns = getColumnsFromStudents(students),
            rows = students.map(studentToTableRow),
            exported = templates.html(columns, rows);

        fs.writeFile('students.html', exported, err => err ? console.log(err) : undefined);
    }
}