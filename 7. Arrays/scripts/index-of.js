(function () {
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (o, s) {
			for (var i = (s || 0), n = this.length; i < n; i++) {
				if (this[i] === o) {
					return i;
				}
			}
			return -1;
		}
	}
	if (!Array.prototype.lastIndexOf) {
		Array.prototype.lastIndexOf = function (o, e) {
			for (var i = (e || this.length) ; i >= 0; i--) {
				if (this[i] === o) {
					return i;
				}
			}
			return -1;
		}
	}
})();