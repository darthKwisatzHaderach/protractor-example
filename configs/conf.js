// solves `SyntaxError: Unexpected token import`
require("babel-register")({
	presets: ['es2015']
});

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['../tests/spec.js']
};