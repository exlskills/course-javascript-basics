function solve(args) {
	let globalPriority = 0;
	let selectorPriority;
	let currentPriority;
	let inSelector = false;
	let selector;

	let bindings = {};

	for(let i in args) {
		let line = args[i].trim();

		if(inSelector) {
			if(line[0] === '@') {
				selectorPriority = +(line.substr(1).trim());
			}
			else if(line === '}') {
				inSelector = false;
			}
			else {
				line = line.split(/[:;@]/);
				let property = line[0].trim();
				let value = line[1].trim();

				if(line.length > 3) {
					currentPriority = +(line[3].trim());
				}
				else {
					currentPriority = selectorPriority;
				}

				if(!bindings[selector].hasOwnProperty(property) || bindings[selector][property].priority < currentPriority) {
					bindings[selector][property] = {
						value: value,
						priority: currentPriority
					};
				}
			}
		}
		else {
			if(line[0] === '@') {
				globalPriority = +(line.substr(1).trim());
			}
			else {
				inSelector = true;
				line = line.split(/[{@]/);
				selector = line[0].trim();

				if(line.length > 2) {
					selectorPriority = +(line[2].trim());
				}
				else {
					selectorPriority = globalPriority;
				}

				if(!bindings.hasOwnProperty(selector)) {
					bindings[selector] = {};
				}
			}
		}
	}

	let result = [];
	for(let i in bindings) {
		for(let j in bindings[i]) {
			result.push(`${i} { ${j}: ${bindings[i][j].value}; }`);
		}
	}

	result.sort();
	for(let i in result) {
		console.log(result[i]);
	}
}
