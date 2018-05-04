const emojiParser = require('../src/parser');
const PHRASE_SAMPLE = 'Test Phrase 😂😂😩😁😊💪💙';
const PHRASE_SAMPLE_SM = 'TP 💪💙';
// @TODO const PHRASE_SAMPLE = 'Test Phrase 😂😂😩😁😊🤔💪💙';

describe('src/parser (emojiParser)', () => {
    it('#extractEmoji', () => {
        const resp = emojiParser.extractEmoji(PHRASE_SAMPLE);
        expect(resp).toBe('Test Phrase ');
    });

    it('#getEmojis', () => {
        const resp = emojiParser.getEmojis(PHRASE_SAMPLE);
        expect(resp).toEqual([
            "face-with-tears-of-joy",
            "face-with-tears-of-joy",
            "weary-face",
            "grinning-face-with-smiling-eyes",
            "smiling-face-with-smiling-eyes",
            "flexed-biceps",
            "blue-heart",
        ]);
    });

    it('#changeEmojiForDesc', () => {
        const resp = emojiParser.changeEmojiForDesc(PHRASE_SAMPLE_SM);
        const phraseSample = 'TP <flexed-biceps><blue-heart>';

        expect(resp).toEqual(phraseSample);
    });

    it('#fullObject', () => {
        const fakeR1 = 'fakeR1';
        const fakeR2 = 'fakeR2';
        const fakeR3 = 'fakeR3';

        emojiParser.extractEmoji = jest.fn().mockReturnValue(fakeR1);
        emojiParser.getEmojis = jest.fn().mockReturnValue(fakeR2);
        emojiParser.changeEmojiForDesc = jest.fn().mockReturnValue(fakeR3);

        const resp = emojiParser.fullObject(PHRASE_SAMPLE);
        expect(emojiParser.extractEmoji).toBeCalledWith(PHRASE_SAMPLE);
        expect(emojiParser.getEmojis).toBeCalledWith(PHRASE_SAMPLE);
        expect(emojiParser.changeEmojiForDesc).toBeCalledWith(PHRASE_SAMPLE);
        expect(resp).toEqual({
            rawText: PHRASE_SAMPLE,
            preClear: fakeR3,
            clearText: fakeR1,
            emojis: fakeR2,
        })
    });
});