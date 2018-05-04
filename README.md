# Emojinator
[![npm version](https://badge.fury.io/js/emojinator.svg)](https://badge.fury.io/js/emojinator) [![npm download](https://img.shields.io/npm/dm/emojinator.svg)](https://img.shields.io/npm/dm/emojinator.svg) [![Build Status](https://travis-ci.org/getdumont/emoji-parser.svg?branch=master)](https://travis-ci.org/getdumont/emoji-parser) [![Coverage Status](https://coveralls.io/repos/github/getdumont/emojinator/badge.svg?branch=master)](https://coveralls.io/github/getdumont/emojinator?branch=master) [![bitHound Dev Dependencies](https://www.bithound.io/github/getdumont/emojinator/badges/devDependencies.svg)](https://www.bithound.io/github/getdumont/emojinator/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/getdumont/emojinator/badges/code.svg)](https://www.bithound.io/github/getdumont/emojinator)
A module to extract emoji as data for data analyze

### Quick Start
Installing using NPM: `npm install emojinator`, after it you can use the lib like:

```javascript
    const emojinator = require('emojinator');
    const phrase = 'I love gym 💪💙';

    emojinator.changeEmojiForDesc(phrase) // 'I love gym <flexed-biceps><blue-heart>'
    emojinator.extractEmoji(phrase) // 'I love gym'
    emojinator.getEmojis(phrase) // ['flexed-biceps', 'blue-heart']
    emojinator.fullObject(phrase) /** {
        rawText: 'I love gym 💪💙',
        preClear: 'I love gym <flexed-biceps><blue-heart>',
        clearText: 'I love gym',
        emojis: ['flexed-biceps', 'blue-heart'],
    }**/
```