module.exports = {
    keywords: {
        'import\\b': {
            regex: /^\s*import\s+(["'])([^"']+)(\1)\s*;?\s*(?:\/(\/|\*).*)?$/,
            index: 2
        },
        '<include': {
            regex: /^\s*<include\s+src\s*=\s*["']([^"']+)["']\/?>\s*(?:\/(\/|\*).*)?$/,
            index: 1
        },
        'importScript': {
            regex: /^\s*importScript\(["']([^"']+)["']\);\s*(?:\/(\/|\*).*)?$/,
            index: 1
        }
    },
    appendInfo: false,
    trimComment: true
}
