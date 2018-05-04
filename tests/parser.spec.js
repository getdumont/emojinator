const emojiParser = require('../src/parser');
const PHRASE_SAMPLE = 'Test Phrase 😂😂😩😁😊🤔💪❤️💙';

describe('src/parser (emojiParser)', () => {
    it('#extractEmoji', () => {
        const resp = emojiParser.extractEmoji(PHRASE_SAMPLE);
        expect(resp).toBe('Test Phrase ');
    });

    // it('#getEmojis', () => {

    // });

    // it('#fullObject', () => {

    // });
});