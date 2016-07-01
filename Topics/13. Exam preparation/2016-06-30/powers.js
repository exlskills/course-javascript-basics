function solve(args) {
	let line = args[0].split(' ');
	let n = +line[0];
	let k = +line[1];

	let array = args[1].split(' ').map(Number);

	function transform(num, n1, n2) {
		if(num === 0) {
			return Math.abs(n1 - n2);
		}
		else if(num === 1) {
			return n1 + n2;
		}
		else if(num % 2 === 0) { // even
			return Math.max(n1, n2);
		}
		else {
			return Math.min(n1, n2);
		}
	}

	array[-1] = array[n - 1];
	array[n] = array[0];

	for(let i = 0; i < k; i += 1) {
		let transformedArray = [];

		for(let j = 0; j < n; j += 1) {
			transformedArray[j] = transform(array[j], array[j - 1], array[j + 1]);
		}

		array = transformedArray.slice();

		array[-1] = array[n - 1];
		array[n] = array[0];
	}

	array[-1] = 0;
	array[n] = 0;
	let sum = array.reduce((a, b) => a + b);

	console.log(sum);
}
