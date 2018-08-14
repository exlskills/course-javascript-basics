function solve(args) {
  let globalPriority = 0;
  let localPriority = 0;
  let insideSelector = false;
  let selectorReference;

  let bindings = {};

  args.forEach(function(line) {
    line = line.trim();
    if(line[0] === '@') {
      const newPriority = +line.substring(1).trim();
      if(insideSelector) {
        localPriority = newPriority;
      }
      else {
        globalPriority = newPriority;
      }
    }
    else if(line[0] === '}') {
      insideSelector = false;
    }
    else {
      const braceIndex = line.indexOf('{');
      if(braceIndex < 0) {
        const spl = line.split(/[:;]/g);
        const property = spl[0].trim();
        const value = spl[1].trim();

        let currentPriority = localPriority;

        const kliombaIndex = spl[2].indexOf('@');
        if(kliombaIndex >= 0) {
          currentPriority = +spl[2].substring(kliombaIndex + 1).trim();
        }

        if(!selectorReference.hasOwnProperty(property)) {
          selectorReference[property] = {
            value: value,
            priority: currentPriority
          };
        }
        else {
          const obj = selectorReference[property];
          if(obj.priority < currentPriority) {
            obj.value = value;
            obj.priority = currentPriority;
          }
        }
      }
      else {
        insideSelector = true;
        const selectorName = line.substring(0, braceIndex).trim();
        //console.log(selectorName);
        localPriority = globalPriority;
        if(!bindings.hasOwnProperty(selectorName)) {
          bindings[selectorName] = {};
        }
        selectorReference = bindings[selectorName];

        const kliombaIndex = line.indexOf('@', braceIndex);
        if(kliombaIndex >= 0) {
          localPriority = +line.substring(kliombaIndex + 1).trim();
        }
      }
    }
  });

  let result = [];
  for(let selector in bindings) {
    selectorReference = bindings[selector];
    for(let property in selectorReference) {
      const value = selectorReference[property].value;
      const line = `${selector} { ${property}: ${value}; }`;
      result.push(line);
    }
  }
  console.log(result.sort().join('\n'));
}

solve([
    'li {',
    '    font-size: 2px;',
    '    font-weight: bold;',
    '}',
    'div {',
    '    font-size: 20px; @5',
    '}',
    'div { @4',
    '    font-size: 17px;',
    '}',
    '@19',
    'li {',
    '    font-size: 42px;',
    '    color: red; @9',
    '}'
]);
