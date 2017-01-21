function solve(args) {
	const [rows, cols] = args.shift().split(' ').map(Number);
	const field = [];
	args.forEach(function(line) {
		field.push(line.split(' ').map(Number));
	});

	let currentRow = rows / 2 | 0;
	let currentCol = cols / 2 | 0;

	function escape() {
		console.log(`No rakiya, only JavaScript ${currentRow} ${currentCol}`);
	}
	function getCaught() {
		console.log(`No JavaScript, only rakiya ${currentRow} ${currentCol}`);
	}

	while(true) {
		const value = field[currentRow][currentCol];
		if(value & 1) { // can go up
			if(currentRow === 0) {
				return escape();
			}
			if(field[currentRow - 1][currentCol] >= 0) {
				field[currentRow][currentCol] = -1;
				currentRow -= 1;
				continue;
			}
		}
		if(value & 2) { // can go right
			if(currentCol === cols - 1) {
				return escape();
			}
			if(field[currentRow][currentCol + 1] >= 0) {
				field[currentRow][currentCol] = -1;
				currentCol += 1;
				continue;
			}
		}
		if(value & 4) { // can go down
			if(currentRow === rows - 1) {
				return escape();
			}
			if(field[currentRow + 1][currentCol] >= 0) {
				field[currentRow][currentCol] = -1;
				currentRow += 1;
				continue;
			}
		}
		if(value & 8) { // can go left
			if(currentCol === 0) {
				return escape();
			}
			if(field[currentRow][currentCol - 1] >= 0) {
				field[currentRow][currentCol] = -1;
				currentCol -= 1;
				continue;
			}
		}

		return getCaught();
	}
}
