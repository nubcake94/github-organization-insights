module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'warn',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'no-useless-constructor': 'off',
		'class-methods-use-this': 'off',
		'no-shadow': 'off',
		'new-cap': 'off',
		'no-underscore-dangle': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts'],
			},
		},
	},
	overrides: [
		{
			files: ['*.interface.ts'],
			rules: {
				camelcase: 'off',
			},
		},
	],
};
