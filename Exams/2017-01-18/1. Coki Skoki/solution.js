function solve(args) {
    [, ...args] = args.map(Number);

    const COEFF = 1 << 10;

    let result = args[0],
        index = 2 - args[0] % 2;

    while (index < args.length) {
        if (args[index] % 2 === 0) {
            result += args[index];
        } else {
            result *= args[index];
        }
        index += 2 - args[index] % 2;
        result %= COEFF;
    }

    return result;
}
