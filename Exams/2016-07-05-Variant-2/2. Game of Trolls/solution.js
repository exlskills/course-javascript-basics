function solve(args) {

    Array.prototype.first = function () {
        return this[0];
    }

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    const sizes = args[0].split(' ').map(Number),
        field = [],
        starts = args[1].split(';').map(x => x.split(' ').map(Number)),
        units = {
            'Wboup': { r: starts[0][0], c: starts[0][1], trapped: false },
            'Nbslbub': { r: starts[1][0], c: starts[1][1], trapped: false },
            'Lsjtujzbo': { r: starts[2][0], c: starts[2][1] },
        },
        Wboup = units['Wboup'],
        Nbslbub = units['Nbslbub'],
        Princess = units['Lsjtujzbo'],
        deltas = {
            'l': { r: 0, c: -1 },
            'r': { r: 0, c: 1 },
            'u': { r: -1, c: 0 },
            'd': { r: 1, c: 0 },
        };

    for(let i = 0; i < sizes[0]; i += 1) {
        field.push([]);
    }

    function isInside(r, c) {
        return (0 <= r) && (r < sizes[0]) && (0 <= c) && (c < sizes[1]);
    }

    function caught() {
        const byWboup = (Math.abs(Wboup.r - Princess.r) <= 1) && (Math.abs(Wboup.c - Princess.c) <= 1),
            byNbslbub = (Math.abs(Nbslbub.r - Princess.r) <= 1) && (Math.abs(Nbslbub.c - Princess.c) <= 1);

        return byWboup || byNbslbub;
    }

    function escaped() {
        return (Wboup.trapped && Nbslbub.trapped) || ((Princess.r === (sizes[0] - 1)) && (Princess.c === (sizes[1] - 1)));
    }

    function onSameCell() {
        return (Wboup.r === Nbslbub.r) && (Wboup.c === Nbslbub.c);
    }

    const commands = args.slice(2);

    for(const cmd of commands) {
        
        const split = cmd.split(' ');

        if(split.first() === 'mv') {
            let delta = deltas[split.last()],
                unit = units[split[1]];

            if(!unit.trapped && isInside(unit.r + delta.r, unit.c + delta.c)) {
                unit.r += delta.r;
                unit.c += delta.c;

                if(field[unit.r][unit.c]) {
                    if(onSameCell()) {
                        Wboup.trapped = false;
                        Nbslbub.trapped = false;
                        field[unit.r][unit.c] = false;
                    } else if(unit !== Princess) {
                        unit.trapped = true;
                    }
                }
            }
        } else if(cmd === 'lay trap') {
            field[Princess.r][Princess.c] = true;
        } else {
            throw new Error('Your program sucks!');
        }

        if(caught()) {
            console.log(`The trolls caught Lsjtujzbo at ${Princess.r} ${Princess.c}`);
            return;
        } else if(escaped()) {
            console.log(`Lsjtujzbo is saved! ${Wboup.r} ${Wboup.c} ${Nbslbub.r} ${Nbslbub.c}`);
            return;
        }
    }
}