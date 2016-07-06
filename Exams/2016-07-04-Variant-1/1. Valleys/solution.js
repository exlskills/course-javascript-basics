function solve(args) {
	"use strict";
	let numbers = args[0].split(" ")
		.map(Number);
	let best = -1,
		current = 0;

	numbers.forEach((number, index, all) => {
		current += number;
		if (index === 0) {
			return;
		} else if (index === all.length - 1) {
			best = Math.max(best, current);
			return;
		}

		let prev = all[index - 1],
			next = all[index + 1];

		if (number > prev && number > next) {
			best = Math.max(best, current);
			current = number;
		}
	});
	console.log(best);
}
