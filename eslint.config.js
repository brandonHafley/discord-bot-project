const js = require('@eslint/js');
module.exports = [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
		},
		rules: {
			'arrow-spacing': ['warn', { before: true, after: true }],
			'comma-style': 'error',
			curly: ['error', 'multi-line', 'consistent'],
			'dot-location': ['error', 'property'],
			'handle-callback-err': 'off',
			'max-nested-callbacks': ['error', { max: 4 }],
			'max-statements-per-line': ['error', { max: 2 }],
			'no-empty-function': 'error',
			'no-floating-decimal': 'error',
			'no-shadow': ['error', { allow: ['err', 'resolve', 'reject'] }],
			'no-var': 'error',
			'no-undef': 'off',
			'object-curly-spacing': ['error', 'always'],
			'prefer-const': 'error',
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			yoda: 'error',
		},
	},
];