
const emojis = require('./emojis.json');
const rgx = new RegExp(Object.keys(emojis).join('|'), 'g');

const regexerExec = (text, method, cb) => {
    console.log('x\n', rgx)
    return text[method](rgx, cb);
};

exports.changeEmojiForDesc = (text) => {
    return regexerExec(text, 'replace', (emoji) => {
        return `<${emojis[emoji]}>`
    });
};

exports.extractEmoji = (text) => {
    return regexerExec(text, 'replace', '');
};

exports.getEmojis = (text) => {
    let list = [];
    regexerExec(text, 'match', (emoji) => {
        list.push(emojis[emoji]);
    });

    return list;
};

exports.fullObject = (text) => ({
    rawText: text,
    preClear: exports.changeEmojiForDesc(text),
    clearText: exports.extractEmoji(text),
    emojis: exports.getEmojis(text),
});
