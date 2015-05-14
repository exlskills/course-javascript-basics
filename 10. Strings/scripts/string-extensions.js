(function () {
	if (!String.prototype.contains) {
		String.prototype.contains = function (searchPattern) {
			var patternLen = searchPattern.length;
			for (var i = 0, length = this.length - patternLen; i < length; i++) {
				var isMatch = true;
				for (var j = 0; j < patternLen; j++) {
					if (searchPattern[j] !== this[i + j]) {
						isMatch = false;
						break;
					}
				}
				if (isMatch) {
					return true;
				}
			}
		}
	}

	if (!String.prototype.toCharArray) {
		String.prototype.toCharArray = function () {
			return this.split('');
		}
	}

	if (!String.prototype.trimLeft) {
		String.prototype.trimLeft = function () {
			return this.replace(/^\s+/, '');
		}
	}
	if (!String.prototype.trimRight) {
		String.prototype.trimRight = function () {
			return this.replace(/\s+$/, '');
		}
	}

	if (!String.prototype.trim) {
		String.prototype.trim = function () {
			return this.trimLeft().trimRight();
		}
	}

	if (!String.prototype.trimLeftChars) {
		String.prototype.trimLeftChars = function (chars) {
			var regEx = new RegExp('^[' + chars + ']+');
			return this.replace(regEx, '');
		}
	}

	if (!String.prototype.trimRightChars) {
		String.prototype.trimRightChars = function (chars) {

			var regEx = new RegExp('[' + chars + ']+$');
			return this.replace(regEx, '');
		}
	}

	if (!String.prototype.trimChars) {
		String.prototype.trimChars = function (chars) {
			return this.trimLeftChars(chars).trimRightChars(chars);
		}
	}

	if (!String.prototype.htmlEscape) {
		String.prototype.htmlEscape = function () {
			return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39').replace(/ /g, '&nbsp;');
		}
	}
	if (!String.prototype.padLeft) {
		String.prototype.padLeft = function (count, char) {
			char = char || ' ';
			if (char.length > 1) {
				return String(this);
			}
			if (this.length >= count) {
				return String(this);
			}
			var str = String(this);
			for (var i = 0, thisLen = str.length; i < count - thisLen; i++) {
				str = char + str;
			}
			return str;
		}
	}

	if (!String.prototype.padRight) {
		String.prototype.padRight = function (count, char) {
			char = char || ' ';
			if (char.length > 1) {
				return String(this);
			}
			if (this.length >= count) {
				return String(this);
			}
			var str = String(this);
			for (var i = 0, thisLen = this.length; i < count - thisLen; i++) {
				str += char;
			}
			return str;
		}
	}
})();