function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {};

var add = {};

var hasRequiredAdd;

function requireAdd () {
	if (hasRequiredAdd) return add;
	hasRequiredAdd = 1;

	return add;
}

var sub = {};

var hasRequiredSub;

function requireSub () {
	if (hasRequiredSub) return sub;
	hasRequiredSub = 1;

	return sub;
}

var mul = {};

var hasRequiredMul;

function requireMul () {
	if (hasRequiredMul) return mul;
	hasRequiredMul = 1;

	return mul;
}

var div = {};

var hasRequiredDiv;

function requireDiv () {
	if (hasRequiredDiv) return div;
	hasRequiredDiv = 1;

	return div;
}

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	const add = requireAdd();
	const sub = requireSub();
	const mul = requireMul();
	const div = requireDiv();
	console.log(mul(3, 4, 5));
	console.log(div(2, 6));
	console.log(add(2, 4, 5, 6));
	console.log(sub(3, 5, 5));
	return src;
}

var srcExports = requireSrc();
const index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

export { index as default };
