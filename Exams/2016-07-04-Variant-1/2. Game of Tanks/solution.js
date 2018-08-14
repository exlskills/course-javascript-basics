function solve(args) {

    const RC = args[0].split(' ').map(Number),
        R = RC[0],
        C = RC[1],
        debris = args[1].split(';').map(pair => pair.split(' ').map(Number)),
        commandsCount = +args[2],
        deltas = {
            u: [-1, 0],
            l: [0, -1],
            d: [1, 0],
            r: [0, 1]
        },
        tanks = [],
        field = [],
        result = [];

    function isInside(r, c) {
        return (0 <= r) && (r < R) && (0 <= c) && (c < C);
    }

    function canMoveTo(nextR, nextC) {
        return isInside(nextR, nextC) && (field[nextR][nextC] === null);
    }

    function getLoser() {
        const koce = tanks[0] || tanks[1] || tanks[2] || tanks[3];

        if (!koce) {
            return 'Koceto';
        }

        const cuki = tanks[4] || tanks[5] || tanks[6] || tanks[7];

        if (!cuki) {
            return 'Cuki';
        }

        return null;
    }

    for (let i = 0; i < R; i += 1) {
        const row = Array.from({ length: C }).fill(null);
        field.push(row);
    }

    for (let i = 0; i < 4; i += 1) {
        field[0][i] = i;
        field[R - 1][C - 1 - i] = i + 4;
        tanks[i] = [0, i];
        tanks[i + 4] = [R - 1, C - 1 - i];
    }

    debris.forEach(function (coords) {
        field[coords[0]][coords[1]] = true;
    });


    for (let i = 3; i < commandsCount + 3; i += 1) {
        const splitCmd = args[i].split(' '),
            id = +splitCmd[1];

        if (splitCmd[0] === 'x') {
            const dir = splitCmd[2],
                deltaR = deltas[dir][0],
                deltaC = deltas[dir][1];

            let r = tanks[id][0] + deltaR,
                c = tanks[id][1] + deltaC;

            while (isInside(r, c)) {
                if (field[r][c] !== null) {

                    if (typeof (field[r][c]) === 'number') {
                        result.push(`Tank ${field[r][c]} is gg`);
                        tanks[field[r][c]] = null;

                        let loser = getLoser();

                        if (loser) {
                            result.push(`${loser} is gg`);

                            result.forEach(x => console.log(x));
                            return;
                        }
                    }

                    field[r][c] = null;
                    break;
                }

                r += deltaR;
                c += deltaC;
            }

        } else {
            const dir = splitCmd[3],
                deltaR = deltas[dir][0],
                deltaC = deltas[dir][1];

            let r = tanks[id][0],
                c = tanks[id][1],
                steps = +splitCmd[2];


            while (canMoveTo(r + deltaR, c + deltaC) && steps) {

                field[r][c] = null;
                field[r + deltaR][c + deltaC] = id;

                r += deltaR;
                c += deltaC;
                steps -= 1;

            }

            tanks[id] = [r, c];
        }

    }

    throw new Error('should never happen');
}