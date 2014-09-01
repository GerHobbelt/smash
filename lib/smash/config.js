module.exports = {
    keywords: {
        'import\\b': {
            regex: /^\s*import\s+(["'])([^"']+)(\1)\s*;?\s*(?:\/(\/|\*).*)?$/,
            index: 2
        },
        '<include': {
            regex: /^\s*<include\s+src\s*=\s*(["'])([^"']+)(\1)\/?>\s*(?:\/(\/|\*).*)?$/,
            index: 2
        },
        'importScript': {
            regex: /^\s*importScript\((["'])([^"']+)(\1)\);\s*(?:\/(\/|\*).*)?$/,
            index: 2
        }
    },
    appendInfo: false,
    trimComment: true
}
