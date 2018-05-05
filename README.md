# Emojinator
[![npm version](https://badge.fury.io/js/emojinator.svg)](https://badge.fury.io/js/emojinator) [![npm download](https://img.shields.io/npm/dm/emojinator.svg)](https://img.shields.io/npm/dm/emojinator.svg) [![Build Status](https://travis-ci.org/getdumont/emoji-parser.svg?branch=master)](https://travis-ci.org/getdumont/emoji-parser) [![Coverage Status](https://coveralls.io/repos/github/getdumont/emojinator/badge.svg?branch=master)](https://coveralls.io/github/getdumont/emojinator?branch=master) [![bitHound Dev Dependencies](https://www.bithound.io/github/getdumont/emojinator/badges/devDependencies.svg)](https://www.bithound.io/github/getdumont/emojinator/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/getdumont/emojinator/badges/code.svg)](https://www.bithound.io/github/getdumont/emojinator)

A module to extract emoji as data for data analyze.

### Introduction
One of the problems during sentiment analyze on text is some text symbols like emojis. This library could make more than only remove emojis from the text, it could ma and replace emojis for your descriptions. It could be useful for people that want to use emojis data like a feature in your IA.

### Quick Start
Installing using NPM: `npm install emojinator`

```javascript
    const emojinator = require('emojinator');
    const phrase = 'I love gym 💪💙';

    // Will put a description in place of emojis
    // 'I love gym <flexed-biceps><blue-heart>'
    emojinator.changeEmojiForDesc(phrase)

    // Will extract all emojis from phrase
    // 'I love gym'
    emojinator.extractEmoji(phrase)

    // Will get all emoji descriptions (if emoji appears more time will appear more than once)
    // ['flexed-biceps', 'blue-heart']
    emojinator.getEmojis(phrase)

    /**
        Will return a object with all other main functions executed
        {
            rawText: 'I love gym 💪💙',
            preClear: 'I love gym <flexed-biceps><blue-heart>',
            clearText: 'I love gym',
            emojis: ['flexed-biceps', 'blue-heart'],
        }
    **/
    emojinator.fullObject(phrase)
```

### Contribuiting
Feel free to open issues, and pull request to help us improve this library :)