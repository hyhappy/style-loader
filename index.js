var loaderUtils = require('loader-utils');

module.exports = function () {}
module.exports.pitch = function (remainingRequest) {
	if (this.cacheable) {
		this.cacheable();
	}
	return `
		var result = require(${loaderUtils.stringifyRequest(this, "!!" + remainingRequest)});
		var styleInject = require(${loaderUtils.stringifyRequest(this, "style-inject/dist/style-inject")});
		var css = '';
		if (typeof result === "string") {
				css = result;
		} else {
				css = result.toString();
		}
		window.styleInject = styleInject
		styleInject(css);
		module.exports = css;
	`;
};