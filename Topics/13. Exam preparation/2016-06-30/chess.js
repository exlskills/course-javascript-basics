function solve(args) {
	let r = +args[0];
	let c = +args[1];

	let board = [];
	for(let i = 0; i < r; i += 1) {
		board[i] = args[i + 2];
	}

	const codeOfa = 'a'.charCodeAt();
	function getRow(coord) {
		return r - (+coord[1]);
	}
	function getCol(coord) {
		return coord[0].charCodeAt() - codeOfa;
	}
	function getCell(coord) {
		let x = getRow(coord);
		let y = getCol(coord);

		return board[x][y];
	}

	let t = +args[r + 2];
	for(let i = 0; i < t; i += 1) {
		let coords = args[r + 3 + i].split(' ');
		let src = coords[0];
		let dst = coords[1];
		let figure = getCell(coords[0]);

		if(getRow(src) === getRow(dst) || getCol(src) === getCol(dst)) {
			if(figure === 'R' || figure === 'Q') {
				if(getCol(src) !== getCol(dst)) {
					let isClean = true;
					let delta = getCol(src) < getCol(dst) ? -1 : 1;

					for(let j = getCol(dst); j !== getCol(src); j += delta) {
						if(board[getRow(src)][j] !== '-') {
							isClean = false;
							break;
						}
					}

					console.log(isClean ? 'yes' : 'no');
				}
				else {
					let isClean = true;
					let delta = getRow(src) < getRow(dst) ? -1 : 1;

					for(let j = getRow(dst); j !== getRow(src); j += delta) {
						if(board[j][getCol(src)] !== '-') {
							isClean = false;
							break;
						}
					}

					console.log(isClean ? 'yes' : 'no');
				}
			}
			else {
				console.log('no');
			}
		}
		else if(Math.abs(getRow(src) - getRow(dst))
				=== Math.abs(getCol(src) - getCol(dst))) { // diagonal

			if(figure === 'B' || figure === 'Q') {
				let deltaRow = getRow(src) < getRow(dst) ? -1 : 1;
				let deltaCol = getCol(src) < getCol(dst) ? -1 : 1;
				let isClean = true;

				for(let i = getRow(dst), j = getCol(dst);
						i !== getRow(src);
						i += deltaRow, j += deltaCol) {
					if(board[i][j] !== '-') {
						isClean = false;
						break;
					}
				}

				console.log(isClean ? 'yes' : 'no');
			}
			else {
				console.log('no');
			}
		}
		else {
			console.log('no');
		}
	}
}

solve([
	'3',
	'4',
	'--R-',
	'B--B',
	'Q--Q',
	'12',
	'd1 b3',
	'a1 a3',
	'c3 b2',
	'a1 c1',
	'a1 b2',
	'a1 c3',
	'a2 b3',
	'd2 c1',
	'b1 b2',
	'c3 b1',
	'a2 a3',
	'd1 d3'
]);
