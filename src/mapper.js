const https = require('https');

const { JSDOM } = require('jsdom');
const { writeFile } = require('fs');

https.get('https://apps.timwhitlock.info/emoji/tables/unicode', (res) => {
    let body = '';
    res.on('data', function(chunk) {
        body += chunk;
    });

    res.on('end', function() {
        createFile(new JSDOM(body));
    });
});

const createFile = (dom) => {
    let emojiMap = {};
    const q = dom.window.document.querySelectorAll('table tr');

    for (let x = 1; x < q.length; x++) {
        const codeEl = q[x].querySelector('.code');
        const descriptionEl = q[x].querySelector('.name');

        if (codeEl && descriptionEl) {
            const codes = codeEl.textContent.trim().split('U+');
            const description = descriptionEl.textContent.trim()
                .toLowerCase().replace(/ /g, '-');

            codes.forEach(code => {
                if (!code) return;

                emojiMap[`\\u{${code.trim()}}`] = description;
            });
        }
    }

    writeFile('./src/emojis.json', JSON.stringify(emojiMap, null, 2), 'utf8', process.exit);
};

