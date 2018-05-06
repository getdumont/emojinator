const emojinator = require('../src/parser');
const PHRASE_SAMPLE_SM = 'TP 💪💙';
const PHRASE_SAMPLE = 'Test Phrase 😂😂😩😁😊🤔💪💙';

describe('src/parser (emojinator)', () => {
    it('#extractEmoji', () => {
        const resp = emojinator.extractEmoji(PHRASE_SAMPLE);
        expect(resp).toBe('Test Phrase ');
    });

    it('#getEmojis', () => {
        const resp = emojinator.getEmojis(PHRASE_SAMPLE);
        expect(resp).toEqual([
            'face-with-tears-of-joy',
            'face-with-tears-of-joy',
            'weary-face',
            'beaming-face-with-smiling-eyes',
            'smiling-face-with-smiling-eyes',
            'thinking-face',
            'flexed-biceps',
            'blue-heart',
        ]);
    });

    it('#getEmojis should parse non emoji phrase', () => {
        const resp = emojinator.getEmojis('A phrase without emoji');
        expect(resp).toEqual([]);
    });

    it('#changeEmojiForDesc', () => {
        const resp = emojinator.changeEmojiForDesc(PHRASE_SAMPLE_SM);
        const phraseSample = 'TP <flexed-biceps><blue-heart>';

        expect(resp).toEqual(phraseSample);
    });

    it('#fullObject', () => {
        const fakeR1 = 'fakeR1';
        const fakeR2 = 'fakeR2';
        const fakeR3 = 'fakeR3';

        emojinator.extractEmoji = jest.fn().mockReturnValue(fakeR1);
        emojinator.getEmojis = jest.fn().mockReturnValue(fakeR2);
        emojinator.changeEmojiForDesc = jest.fn().mockReturnValue(fakeR3);

        const resp = emojinator.fullObject(PHRASE_SAMPLE);
        expect(emojinator.extractEmoji).toBeCalledWith(PHRASE_SAMPLE);
        expect(emojinator.getEmojis).toBeCalledWith(PHRASE_SAMPLE);
        expect(emojinator.changeEmojiForDesc).toBeCalledWith(PHRASE_SAMPLE);
        expect(resp).toEqual({
            rawText: PHRASE_SAMPLE,
            preClear: fakeR3,
            clearText: fakeR1,
            emojis: fakeR2,
        })
    });
});