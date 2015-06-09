function solve(args) {
	'use strict';
	var sizes = args[0].split(' ').map(Number),
		field = args.slice(1).map(function (row) {
			return row.split('').map(Number);
		}),
		rows = sizes[0],
		cols = sizes[1],
		row = rows - 1,
		col = cols - 1,
		used = {},
		jumps,
		sum,
		directions = [{}, {
			row: -2,
			col: 1
		}, {
			row: -1,
			col: 2
		}, {
			row: 1,
			col: 2
		}, {
			row: 2,
			col: 1
		}, {
			row: 2,
			col: -1
		}, {
			row: 1,
			col: -2
		}, {
			row: -1,
			col: -2
		}, {
			row: -2,
			col: -1
		}, ];
	var line = [];
	for (var c = 0; c < cols; c += 1) {
		var value = c.toString();
		while (value.length < 5) {
			value = ' ' + value;
		}
		line.push(value);
	}
	function getValue(row, col) {
		return (1 << row) - col;
	}

	function hash(row, col, cols) {
		return row * cols + col;
	}

	function inRange(value, border) {
		return 0 <= value && value < border;
	}

	jumps = 0;
	sum = 0;
	while (true) {
		if (used[hash(row, col, cols)]) {
			return 'Sadly the horse is doomed in ' + jumps + ' jumps';
		}
		if (!inRange(row, rows) || !inRange(col, cols)) {
			return 'Go go Horsy! Collected ' + sum + ' weeds';
		}

		used[hash(row, col, cols)] = true;

		jumps++;
		sum += getValue(row, col);

		var dirIndex = field[row][col],
			dir = directions[dirIndex];

		row += dir.row;
		col += dir.col;
	}
}