module.exports = {
	"env": {
		"node": true,
		"commonjs": true,
		"browser": true,
		"es6": true
	},
	"extends": ["eslint:recommended", "plugin:import/recommended"],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
	}
}
