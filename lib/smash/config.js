module.exports = {
	keywords: {
		"import\\b": {
			regex: /^\s*import\s+["']([^"']+)["']\s*;?\s*(?:\/(\/|\*).*)?$/,
			index: 1
		},
		"<include": {
			regex: /^\s*<include\s+src\s*=\s*["']([^"']+)["']\/?>\s*(?:\/(\/|\*).*)?$/,
			index: 1
		},
		"importScript": {
			regex: /^\s*importScript\(["']([^"']+)["']\);\s*(?:\/(\/|\*).*)?$/,
			index: 1
		}
	},
	appendInfo: true,
	trimComment: true
}