function solve(params) {

  var model = populateModel();
  var result = parse();

  function populateModel() {
    var model = [];

    for (var i = 1; i <= parseInt(params[0]); i++) {
      var currentKeyValuePair = params[i].split(':');
      var value;

      if (currentKeyValuePair[1] === 'true') {
        value = true;
      } else if (currentKeyValuePair[1] === 'false') {
        value = false;
      } else if (currentKeyValuePair[1].indexOf(',') > -1) {
        value = currentKeyValuePair[1].split(',');
      } else {
        value = currentKeyValuePair[1];
      }

      model[currentKeyValuePair[0]] = value;
    }

    return model;
  }

  function parse() {
    var startRow = parseInt(params[0]) + 2;

    var result = [];
    var sections = [];

    var inShaver = false;
    var inSection = false;
    var inCondition = false;
    var inForeach = false;
    var inModel = false;
    var render = true;

    var currentSection;
    var currentCollection;
    var currentIndexatorName;
    var currentIndex = 0;
    var currentForeachTemplate = '';
    var currentModelKey = '';

    var deleteLeadingWhiteSpace = 0;

    for (var i = startRow; i < params.length; i++) {
      var currentRow = params[i];
      var newLine = true;

      if (inCondition && currentRow.indexOf('}') > -1) {
        deleteLeadingWhiteSpace = 0;
        inCondition = false;
        render = true;
        continue;
      }

      if (inForeach && currentRow.indexOf('}') > -1) {
        currentForeachTemplateWithIndexator = currentForeachTemplate.split('@' + currentIndexatorName).join(currentCollection[currentIndex++]);
        var templateWhiteSpace = getLeadingWhiteSpace(currentRow);
        result.push(currentForeachTemplateWithIndexator.substr(templateWhiteSpace).trim() + '\n');
        for (var k = 1; k < currentCollection.length; k++) {
          currentForeachTemplateWithIndexator = currentForeachTemplate.split('@' + currentIndexatorName).join(currentCollection[currentIndex++]);
          result.push(templateWhiteSpace + currentForeachTemplateWithIndexator.trim() + '\n');
        }
        currentCollection = undefined;
        currentIndexatorName = undefined;
        currentForeachTemplate = '';
        currentIndex = 0;
        inForeach = false;
        continue;
      }

      if (inCondition || inForeach) {
        deleteLeadingWhiteSpace += 4;
      }

      if (!render) {
        continue;
      }

      if (deleteLeadingWhiteSpace > 0) {
        currentRow = currentRow.substr(deleteLeadingWhiteSpace);
        deleteLeadingWhiteSpace = 0;
      }

      if (inShaver && inSection && currentRow.indexOf('}') < 0) {
        sections[currentSection].push(currentRow + '\n');
        continue;
      }

      if (inShaver && inSection && currentRow.indexOf('}') > -1) {
        inShaver = false;
        inSection = false;
        continue;
      }

      for (var j = 0; j < currentRow.length; j++) {
        var symbol = currentRow[j];

        if (symbol == '@') {
          if (j + 1 < currentRow.length && currentRow[j + 1] != '@') {
            inShaver = true;
          } else {
            result.push('@');
            j++;
          }
          continue;
        }

        if (inShaver && currentRow.substr(j, 7) == 'section' && !inModel) {
          inSection = true;
          newLine = false;
          initializeSection(currentRow);
          break;
        }

        if (inShaver && currentRow.substr(j, 15) == 'renderSection("' && !inModel) {
          var sectionToRender = getSection(currentRow);
          result.push(sectionToRender);
          newLine = false;
          inShaver = false;
          break;
        }

        if (inShaver && currentRow.substr(j, 2) == 'if' && currentRow.indexOf('{') > -1 && !inModel) {
          var parameter = getConditionalParameter(currentRow);
          var evaluatedCondition = !!model[parameter];
          deleteLeadingWhiteSpace = getLeadingWhiteSpace(currentRow).length;
          if (!evaluatedCondition) {
            render = false;
            deleteWhiteSpaceFromResult(deleteLeadingWhiteSpace);
          }
          inCondition = true;
          inShaver = false;
          newLine = false;
          break;
        }

        if (inShaver && currentRow.substr(j, 7) == 'foreach' && currentRow.indexOf('{') > -1 && !inModel) {
          var parameters = getForeachParameters(currentRow);
          currentCollection = model[parameters.collection];
          currentIndexatorName = parameters.indexator;
          inForeach = true;
          inShaver = false;
          newLine = false;
          break;
        }

        if (inShaver && inModel && !checkIfLetter(symbol)) {
          var modelValue = model[currentModelKey];
          if (inForeach && currentModelKey == currentIndexatorName) {
            currentForeachTemplate += '@' + currentIndexatorName;
          } else if (inForeach) {
            currentForeachTemplate += modelValue;
          } else {
            result.push(modelValue);
          }

          currentModelKey = '';
          inShaver = false;
          inModel = false;
        }

        if (inShaver) {
          currentModelKey += symbol;
          inModel = true;
          continue;
        }

        if (!inShaver && inForeach) {
          currentForeachTemplate += symbol;
          newLine = false;
          continue;
        }

        result.push(symbol);
      }

      if (inForeach) {
        currentForeachTemplate += '\n';
      } else if (newLine) {
        result.push('\n');
      }
    }

    return result.join('');

    function initializeSection(currentRow) {
      var sectionParts = currentRow.split(' ');
      currentSection = sectionParts[1];
      sections[currentSection] = [];
    }

    function getSection(currentRow) {
      var renderSectionParts = currentRow.split('(');
      var sectionName = renderSectionParts[1].replace('"', '').replace('"', '').replace(')', '').trim();
      var leadingWhiteSpace = getLeadingWhiteSpace(currentRow);
      return sections[sectionName].join(leadingWhiteSpace);
    }

    function getConditionalParameter(currentRow) {
      var start = currentRow.indexOf('(') + 1;
      var end = currentRow.indexOf(')');
      var param = currentRow.substr(start, end - start).trim();
      return param;
    }

    function getForeachParameters(currentRow) {
      var start = currentRow.indexOf('(') + 1;
      var end = currentRow.indexOf(')');
      var params = currentRow.substr(start, end - start).trim().split(' ');
      return {
        collection: params[3],
        indexator: params[1]
      };
    }

    function getLeadingWhiteSpace(currentRow) {
      var whiteSpace = '';
      for (var i = 0; i < currentRow.length; i++) {
        if (currentRow[i] == ' ') {
          whiteSpace += ' ';
        } else {
          break;
        }
      }

      return whiteSpace;
    }

    function checkIfLetter(symbol) {
      var asciiCode = symbol.charCodeAt(0);
      if ((asciiCode > 64 && asciiCode < 91) || (asciiCode > 96 && asciiCode < 123)) {
        return true;
      }
      return false;
    }

    function deleteWhiteSpaceFromResult(count) {
      for (var i = 0; i < count; i++) {
        result.pop();
      }
    }
  }

  return result;
}
