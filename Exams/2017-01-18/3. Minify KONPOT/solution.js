function solve(args) {
	const minifyWhiteSpace = args.join('').replace(/\s/g, '');

	let konpot = minifyWhiteSpace;
	let oldlen;
	do {
		oldlen = konpot.length;
		konpot = konpot.replace(/{;*}/g, ';');
	} while(konpot.length !== oldlen);

	konpot = konpot
		.replace(/;+/g, ';')
		.replace(/;{/g, '{')
		.replace(/{;/g, '{')
		.replace(/;}/g, '}')
		.replace(/};/g, '}')
		.replace(/^;/, '')
		.replace(/;$/, '');

	let konpotLength = konpot.replace(/[^{};]/g, '').length;

	const identifiers = {};
	minifyWhiteSpace.split(/[{};]+/)
		.forEach(ident => identifiers[ident] = (identifiers[ident] || 0) + 1);
	identifiers[''] = 0;

	const identifierList = [];
	for(let ident in identifiers) {
		identifierList.push(identifiers[ident]);
	}

	if(identifierList.length > 4000) {
		throw `${identifierList.length} identifiers is too much`;
	}

	identifierList.sort((x, y) => y - x)
		.forEach((count, index) => konpotLength += count * (index < 63 ? 1 : 2));

	console.log(konpotLength);
}
