function solve(args) {
	const minifyWhiteSpace = args.join('').replace(/\s/g, '');

	let konpotLength = 0;

	minifyWhiteSpace.split(/[^{};]+/)
		.forEach((sep, index, all) => {
			let closing = 0, opening = 0;
			let sepLength = sep.length;
			for(let i = 0; i < sepLength; i += 1) {
				if(sep[i] == '{') {
					opening += 1;
				}
				else if(sep[i] == '}') {
					if(opening > 0) {
						opening -= 1;
					}
					else {
						closing += 1;
					}
				}
			}
			const isBetween = index > 0 && index < all.length - 1;
			konpotLength += opening + closing || +isBetween;
		});

	const identifiers = {};
	minifyWhiteSpace.split(/[{};]+/)
		.forEach(ident => identifiers[ident] = (identifiers[ident] || 0) + 1);
	identifiers[''] = 0;

	const identifierList = [];
	for(let ident in identifiers) {
		identifierList.push(identifiers[ident]);
	}

	identifierList.sort((x, y) => y - x)
		.forEach((count, index) => konpotLength += count * (index < 63 ? 1 : 2));

	console.log(konpotLength);
}
