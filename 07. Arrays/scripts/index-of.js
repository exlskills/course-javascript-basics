(function () {
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (o, s) {
			var i,
				len = this.length;
			for (i = (s || 0), n = len; i < n; i++) {
				if (this[i] === o) {
					return i;
				}
			}
			return -1;
		}
	}
	if (!Array.prototype.lastIndexOf) {
		Array.prototype.lastIndexOf = function (o, e) {
			var i,
				len = this.length;
			for (i = (e || len) ; i >= 0; i--) {
				if (this[i] === o) {
					return i;
				}
			}
			return -1;
		}
	}
})();