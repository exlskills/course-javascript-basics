(function () {
	function createJsConsole(selector) {
		let self = this;
		//let consoleElement = document.querySelector(selector);
		let consoleElement = document.getElementById(selector);

		if (consoleElement.className) {
			consoleElement.className = consoleElement.className + " js-console";
		} else {
			consoleElement.className = "js-console";
		}

		let textArea = document.createElement("p");
		consoleElement.appendChild(textArea);

		self.write = function jsConsoleWrite(text) {
			let textLine = document.createElement("span");
			if (text !== "" && text !== undefined) {
				let toWrite = text.toString();
				textLine.innerHTML = toWrite;
				textArea.appendChild(textLine);
				consoleElement.scrollTop = consoleElement.scrollHeight;
			}
		};

		self.writeLine = function jsConsoleWriteLine(text) {
			self.write(text);
			textArea.appendChild(document.createElement("br"));
		};

		self.read = function readText(inputSelector) {
			let element = document.querySelector(inputSelector);
			if (element.innerHTML) {
				return element.innerHTML;
			} else {
				return element.value;
			}
		};

		self.readInteger = function readInteger(inputSelector) {
			let text = self.read(inputSelector);
			return parseInt(text, 10);
		};

		self.readFloat = function readFloat(inputSelector) {
			let text = self.read(inputSelector);
			return parseFloat(text);
		};

		return self;
	}
	jsConsole = new createJsConsole("js-console");
}).call(this);