/* eslint-disable no-tabs */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	// plugins: ['jsx-a11y', 'react'], (Obs.: Mostrei ela funcionando em uma aplicação React)
	extends: ["eslint:recommended", "airbnb"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		indent: [
			"error",
			"tab",
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		quotes: [
			"error",
			"double",
		],
		semi: [
			"error",
			"always",
		],
		eqeqeq: [
			"error",
			"always",
		],
		/* 'jsx-a11y/img-redundant-alt': [2, {
			'components': ['Image'],
			'words': ['Foto'],
		}], */// (Obs.: Mostrei ela funcionando em uma aplicação React)
	},
};
