function solve(args) {
	let insideEnum = false;
	let isShared;

	let localConstants = [];
	let sharedConstants = [];
	let allConstants = [];

	let localUsed = {};
	let sharedUsed = {};

	for(let i in args) {
		let line = args[i].trim();

		if(insideEnum) {
			if(line === '</>') {
				insideEnum = false;

				if(!isShared) {
					let nextValue = 0;

					for(let j in localConstants) {
						if(localConstants[j].value < 0) {
							while(localUsed.hasOwnProperty(nextValue)) {
								nextValue += 1;
							}

							localConstants[j].value = nextValue;
							nextValue += 1;
						}

						allConstants.push(localConstants[j]);
					}

					localConstants = [];
					localUsed = {};
				}
			}
			else {
				line = line.split(/[=;]/);

				const constant = {
					enumeration: insideEnum,
					name: line[0].trim(),
					value: line.length > 2 ? +(line[1].split()) : -1
				};

				if(isShared) {
					sharedConstants.push(constant);
					sharedUsed[constant.value] = true;
				}
				else {
					localConstants.push(constant);
					localUsed[constant.value] = true;
				}
			}
		}
		else {
			isShared = line[1] === '@';
			insideEnum = line.replace(/[<@>]/g, '');
		}
	}

	let nextValue = 0;

	for(let j in sharedConstants) {
		if(sharedConstants[j].value < 0) {
			while(sharedUsed.hasOwnProperty(nextValue)) {
				nextValue += 1;
			}

			sharedConstants[j].value = nextValue;
			nextValue += 1;
		}

		allConstants.push(sharedConstants[j]);
	}

	let result = allConstants.map(function(x) {
		return `${x.name} = ${x.value} :: ${x.enumeration};`;
	}).sort();

	console.log(result.join('\n'));
}
