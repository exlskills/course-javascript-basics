function solve(args) {
  const EMPTY_FIELD = -1;
  const DEBRI = '@';

  //const [rows, cols] = args[0].split(' ').map(Number);

  const arr = args[0].split(' ').map(Number);
  const rows = arr[0];
  const cols = arr[1];

  let field = new Array(rows);
  field.fill(0);
  for(let i in field) {
    field[i] = new Array(cols);
    field[i].fill(EMPTY_FIELD);
  }

  let tankPositions = [
    {row: 0, col: 0}, // tank 0
    {row: 0, col: 1}, // tank 1
    {row: 0, col: 2}, // tank 2
    {row: 0, col: 3}, // tank 3
    {row: rows - 1, col: cols - 1}, // tank 4
    {row: rows - 1, col: cols - 2}, // tank 5
    {row: rows - 1, col: cols - 3}, // tank 6
    {row: rows - 1, col: cols - 4}, // tank 7
  ];

  let playerTanks = [4, 4];

  for(let i in tankPositions) {
    field[tankPositions[i].row][tankPositions[i].col] = i;
  }

  args[1].split(';').forEach(function(coord) {
    // const [x, y] = coord.split(' ').map(Number);
    const arr = coord.split(' ').map(Number);
    const x = arr[0];
    const y = arr[1];
    field[x][y] = DEBRI;
  });

  function moveTank(id, n, dir) {
    let deltaRow = 0, deltaCol = 0;
    if(dir === 'u') {
      deltaRow = -1;
    }
    else if(dir === 'd') {
      deltaRow = +1;
    }
    else if(dir === 'l') {
      deltaCol = -1;
    }
    else if(dir === 'r') {
      deltaCol = +1;
    }
    else {
      // WTF condition
    }

    let tankRow = tankPositions[id].row;
    let tankCol = tankPositions[id].col;

    field[tankRow][tankCol] = EMPTY_FIELD;

    while(n > 0) {
      const newPosRow = tankRow + deltaRow;
      const newPosCol = tankCol + deltaCol;
      if(newPosRow < 0 || newPosRow > rows - 1) {
        break;
      }
      if(newPosCol < 0 || newPosCol > cols - 1) {
        break;
      }
      if(field[newPosRow][newPosCol] !== EMPTY_FIELD) {
        break;
      }
      tankRow = newPosRow;
      tankCol = newPosCol;
      n -= 1;
    }

    tankPositions[id].row = tankRow;
    tankPositions[id].col = tankCol;

    field[tankRow][tankCol] = id;
  }

  function shootWithTank(id, dir) {
    let deltaRow = 0, deltaCol = 0;
    if(dir === 'u') {
      deltaRow = -1;
    }
    else if(dir === 'd') {
      deltaRow = +1;
    }
    else if(dir === 'l') {
      deltaCol = -1;
    }
    else if(dir === 'r') {
      deltaCol = +1;
    }
    else {
      // WTF condition
    }

    let shotRow = tankPositions[id].row + deltaRow; // first step is important
    let shotCol = tankPositions[id].col + deltaCol;

    while(0 <= shotRow && shotRow < rows && 0 <= shotCol && shotCol < cols) {
      if(field[shotRow][shotCol] === EMPTY_FIELD) {
        shotRow += deltaRow;
        shotCol += deltaCol;
      }
      else if(field[shotRow][shotCol] === DEBRI) {
        field[shotRow][shotCol] = EMPTY_FIELD;
        // no console.log's here
        break;
      }
      else {
        const deadTankId = field[shotRow][shotCol];
        field[shotRow][shotCol] = EMPTY_FIELD;
        console.log(`Tank ${deadTankId} is gg`);
        //const playerId = deadTankId / 4 | 0;
        const playerId = deadTankId < 4 ? 0 : 1;
        playerTanks[playerId] -= 1;
        if(playerTanks[playerId] === 0) {
          const loserName = ['Koceto', 'Cuki'][playerId];
          console.log(`${loserName} is gg`);
        }
        break;
      }
    }
  }

  const n = +args[2];
  for(let i = 3; i < n + 3; i += 1) {
    const commandSplit = args[i].split(' ');
    if(commandSplit[0] === 'mv') {
      moveTank(+commandSplit[1], +commandSplit[2], commandSplit[3]);
    }
    else if(commandSplit[0] === 'x') {
      shootWithTank(+commandSplit[1], commandSplit[2]);
    }
    else {
      // WTF condition
    }
  }
}

solve([
    '5 5',
    '2 0;2 1;2 2;2 3;2 4',
    '13',
    'mv 7 2 l',
    'x 7 u',
    'x 0 d',
    'x 6 u',
    'x 5 u',
    'x 2 d',
    'x 3 d',
    'mv 4 1 u',
    'mv 4 4 l',
    'mv 1 1 l',
    'x 4 u',
    'mv 4 2 r',
    'x 2 d'
]);
