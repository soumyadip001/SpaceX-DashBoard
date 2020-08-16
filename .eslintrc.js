/* eslint-disable */
module.exports = {
	"env": {
		"browser": true,
		"es2020": true
	},
	"extends": [
		'eslint:recommended',
		"plugin:react/recommended"
	],
	"parser": "babel-eslint",
	"settings": {
		"react": {
		  "version": "detect"
		}
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			4
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
