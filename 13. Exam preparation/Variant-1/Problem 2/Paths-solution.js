function solve(args) {
  'use strict';
  var key,
    lab = args.slice(1).map(function(line) {
      return line.split(' ');
    }),
    directions = {
      d: +1,
      u: -1,
      l: -1,
      r: +1
    },
    visited = {},
    row, col, sum;

  function getValueAt(row, col) {
    return (1 << row) + col;
  }

  row = 0;
  col = 0;
  sum = 0;
  while (true) {
    if (!lab[row] || !lab[row][col]) {
      return 'successed with ' + sum;
    }
    key = row + ';' + col;
    if (visited[key]) {
      return 'failed at (' + row + ', ' + col + ')';
    }

    visited[key] = true;
    sum += getValueAt(row, col);
    var dir = lab[row][col];
    row += directions[dir[0]];
    col += directions[dir[1]];
  }
}
