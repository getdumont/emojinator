
const emojis = require('./emojis.js');
const rgx = new RegExp(Object.keys(emojis).join('|'), 'gu');

const regexerExec = (text, method, cb) => {
    return text[method](rgx, cb);
};

exports.changeEmojiForDesc = (text) => {
    return regexerExec(text, 'replace', (emoji) => {
        return `<${emojis[emoji]}>`;
    });
};

exports.extractEmoji = (text) => {
    return regexerExec(text, 'replace', '');
};

exports.getEmojis = (text) => {
    return regexerExec(text, 'match')
        .map((emoji) => {
            return emojis[emoji];
        });
};

exports.fullObject = (text) => ({
    rawText: text,
    preClear: exports.changeEmojiForDesc(text),
    clearText: exports.extractEmoji(text),
    emojis: exports.getEmojis(text),
});
