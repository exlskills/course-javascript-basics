(function () {
	function createJsConsole(selector) {
		var self = this;
		var consoleElement = document.querySelector(selector);

		if (consoleElement.className) {
			consoleElement.className = consoleElement.className + " js-console";
		}
		else {
			consoleElement.className = "js-console";
		}

		var textArea = document.createElement("p");
		consoleElement.appendChild(textArea);

		self.write = function jsConsoleWrite(text) {
			if(text !== undefined && text !== ""){
				var textLine = document.createElement("span");
				textLine.innerHTML = text;
				textArea.appendChild(textLine);
				consoleElement.scrollTop = consoleElement.scrollHeight;
			}
		}

		self.writeLine = function jsConsoleWriteLine(text) {
			self.write(text);
			textArea.appendChild(document.createElement("br"));
		}

		self.read = function readText(inputSelector) {
			var element = document.querySelector(inputSelector);
			if (element.innerHTML) {
				return element.innerHTML;
			}
			else {
				return element.value;
			}
		}

		self.readInteger = function readInteger(inputSelector) {
			var text = self.read(inputSelector);
			return parseInt(text);
		}

		self.readFloat = function readFloat(inputSelector) {
			var text = self.read(inputSelector);
			return parseFloat(text);
		}
		
		self.readArray = function readArray(inputSelector,separator) {
			var text = self.read(inputSelector);
			var array = text.split(separator);
			return array;
		}

		self.readNumbersArray = function readNumbersArray(inputSelector, separator) {
			var array = self.readArray(inputSelector, separator);
			var numbers = new Array(array.length);
			for (var i = 0; i < array.length; i++) {
				numbers[i] = parseFloat(array[i]);
			}
			return numbers;
		}


		return self;
	}
	jsConsole = new createJsConsole("#js-console");
}).call(this);
