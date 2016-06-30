function solve(args) {
	let allSelectors = {};

	let inSelector = false;

	let propertyId = 0;

	for(let i in args) {
		let line = args[i];
		
		if(line.indexOf('}') !== -1) {
			inSelector = false;
			continue;
		}

		let indexOfCurly = line.indexOf('{');
		if(indexOfCurly === -1) { // in property
			line = line.split(':');
			let name = line[0].trim();
			line = line[1].split(';');
			let value = line[0].trim();

		//	if(allSelectors[inSelector].hasOwnProperty(name)) {
		//		delete allSelectors[inSelector][name];
		//	}
			allSelectors[inSelector][name] = {
				value: value,
				id: propertyId
			};

			propertyId += 1;

			continue;
		}
		
		// openning selector

		let selectors = line.substr(0, indexOfCurly).trim();
		selectors = selectors.replace(/\s*([>~+ ])\s*/g, '$1');

		inSelector = selectors;

		if(!allSelectors.hasOwnProperty(selectors)) {
			allSelectors[selectors] = {};
		}
		else { // merge
		}
	}

	let minified = [];
	for(let selector in allSelectors) {
		minified.push(selector + '{');

		// Object.keys(allSelectors[selector])
		let properties = []
		for(let name in allSelectors[selector]) {
			properties.push({
				name: name,
				value: allSelectors[selector][name].value,
				id: allSelectors[selector][name].id
			});
		}

		properties.sort(function(a, b) {
			return a.id - b.id;
		});

		properties.forEach(function(p) {
			minified.push(`${p.name}:${p.value};`);
		});

		// minified[minified.length - 1] = minified[minified.length - 1].split(/;/)[0];
		minified.push('}');
	}

	console.log(minified.join('').replace(/;}/g, '}'));
}

solve([
	'#the-big-b{',
	'		color: yellow;',
	'size: big;',
	'}',
	'.muppet{',
	'powers: all;',
	'skin: fluffy;',
	'}',
	'.water-spirit {',
	'powers: water;',
	'alignment : not-good;',
	'}',
	'all{',
	'meant-for: nerdy-children;',
	'}',
	'.muppet {',
	'powers: everything;',
	'}',
	'all .muppet {',
	'	alignment : good       ;',
	'}',
	'.muppet+     .water-spirit{',
	'power: everything-a-muppet-can-do-and-water;',
	'}'
]);
