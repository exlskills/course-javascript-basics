function solve(params) {
  var model = populateModel();
  var result = parse();

  function populateModel() {
    var model = [];

    for (var i = 1; i <= parseInt(params[0]); i++) {
      var currentKeyValuePair = params[i].split('-');
      var value;

      if (currentKeyValuePair[1] === 'true') {
        value = true;
      } else if (currentKeyValuePair[1] === 'false') {
        value = false;
      } else if (currentKeyValuePair[1].indexOf(';') > -1) {
        value = currentKeyValuePair[1].split(';');
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

    var inNikolAngular = false;
    var inTemplate = false;
    var inCondition = false;
    var inRepeater = false;
    var inModel = false;
    var render = true;

    var currentTemplate;
    var currentCollection;
    var currentIndexatorName;
    var currentIndex = 0;
    var currentRepeaterTemplate = '';
    var currentModelKey = '';

    var deleteLeadingWhiteSpace = 0;

    for (var i = startRow; i < params.length; i++) {
      var currentRow = params[i];
      var newLine = true;

      if (inCondition && currentRow.indexOf('</nk-if>') > -1) {
        deleteLeadingWhiteSpace = 0;
        inCondition = false;
        render = true;
        continue;
      }

      if (inRepeater && currentRow.indexOf('</nk-repeat') > -1) {
        currentRepeaterTemplateWithIndexator = currentRepeaterTemplate.split('<nk-model>' + currentIndexatorName + '</nk-model>').join(currentCollection[currentIndex++]);
        var templateWhiteSpace = getLeadingWhiteSpace(currentRow);
        result.push(currentRepeaterTemplateWithIndexator.substr(templateWhiteSpace).trim() + '\n');
        for (var k = 1; k < currentCollection.length; k++) {
          currentRepeaterTemplateWithIndexator = currentRepeaterTemplate.split('<nk-model>' + currentIndexatorName + '</nk-model>').join(currentCollection[currentIndex++]);
          result.push(templateWhiteSpace + currentRepeaterTemplateWithIndexator.trim() + '\n');
        }
        currentCollection = undefined;
        currentIndexatorName = undefined;
        currentRepeaterTemplate = '';
        currentIndex = 0;
        inRepeater = false;
        continue;
      }

      if (inCondition || inRepeater) {
        deleteLeadingWhiteSpace += 4;
      }

      if (!render) {
        continue;
      }

      if (deleteLeadingWhiteSpace > 0) {
        currentRow = currentRow.substr(deleteLeadingWhiteSpace);
        deleteLeadingWhiteSpace = 0;
      }

      if (inNikolAngular && inTemplate && currentRow.indexOf('</nk-') < 0) {
        sections[currentTemplate].push(currentRow.substr(4) + '\n');
        continue;
      }

      if (inNikolAngular && inTemplate && currentRow.indexOf('</nk-') > -1) {
        inNikolAngular = false;
        inTemplate = false;
        continue;
      }

      for (var j = 0; j < currentRow.length; j++) {
        var symbol = currentRow[j];

        if (j + 1 < currentRow.length && (currentRow.substr(j, 2) == '{{' || currentRow.substr(j, 2) == '}}')) {
          j++;
          continue;
        }

        if (j + 3 < currentRow.length && currentRow.substr(j, 4) == '<nk-') {
          if (currentRow.indexOf('{{') < 0) {
            inNikolAngular = true;
            j += 3;
            continue;
          }
        }

        if (inNikolAngular && j + 14 < currentRow.length && currentRow.substr(j, 15) == 'template name="' && !inModel) {
          inTemplate = true;
          newLine = false;
          initializeTemplate(currentRow);
          break;
        }

        if (inNikolAngular && j + 16 < currentRow.length && currentRow.substr(j, 17) == 'template render="' && !inModel) {
          var templateToRender = getTemplate(currentRow);
          result.push(templateToRender);
          newLine = false;
          inNikolAngular = false;
          break;
        }

        if (inNikolAngular && j + 11 < currentRow.length && currentRow.substr(j, 12) == 'if condition' && currentRow.indexOf('>') > -1 && !inModel) {
          var parameter = getConditionalParameter(currentRow);
          var evaluatedCondition = !!model[parameter];
          deleteLeadingWhiteSpace = getLeadingWhiteSpace(currentRow).length;
          if (!evaluatedCondition) {
            render = false;
            deleteWhiteSpaceFromResult(deleteLeadingWhiteSpace);
          }
          inCondition = true;
          inNikolAngular = false;
          newLine = false;
          break;
        }

        if (inNikolAngular && j + 9 < currentRow.length && currentRow.substr(j, 10) == 'repeat for' && currentRow.indexOf('>') > -1 && !inModel) {
          var parameters = getForeachParameters(currentRow);
          currentCollection = model[parameters.collection];
          currentIndexatorName = parameters.indexator;
          inRepeater = true;
          inNikolAngular = false;
          newLine = false;
          break;
        }

        if (inNikolAngular && inModel && symbol == '<') {
          currentModelKey = currentModelKey.substr(6);
          var modelValue = model[currentModelKey];
          if (inRepeater && currentModelKey == currentIndexatorName) {
            currentRepeaterTemplate += '<nk-model>' + currentIndexatorName + '</nk-model>';
          } else if (inRepeater) {
            currentRepeaterTemplate += modelValue;
          } else {
            result.push(modelValue);
          }

          j += 10;
          currentModelKey = '';
          inNikolAngular = false;
          inModel = false;
          continue;
        }

        if (inNikolAngular) {
          currentModelKey += symbol;
          inModel = true;
          continue;
        }

        if (!inNikolAngular && inRepeater) {
          currentRepeaterTemplate += symbol;
          newLine = false;
          continue;
        }

        result.push(symbol);
      }

      if (inRepeater) {
        currentRepeaterTemplate += '\n';
      } else if (newLine) {
        result.push('\n');
      }
    }

    return result.join('');

    function initializeTemplate(currentRow) {
      var templateParts = currentRow.split('"');
      currentTemplate = templateParts[1];
      sections[currentTemplate] = [];
    }

    function getTemplate(currentRow) {
      var rendertemplateParts = currentRow.split('"');
      var templateName = rendertemplateParts[1];
      var leadingWhiteSpace = getLeadingWhiteSpace(currentRow);
      return sections[templateName].join(leadingWhiteSpace);
    }

    function getConditionalParameter(currentRow) {
      var param = currentRow.split('"')[1];
      return param;
    }

    function getForeachParameters(currentRow) {
      var params = currentRow.split('"')[1].split(' ');
      return {
        collection: params[2],
        indexator: params[0]
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
