const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    var final = [];
    var fuckingMorseArray = [];
    var NumberOfSymbols = expr.length / 10;
    var decades = 0;
    var letters = [];
    for (let z = 0; z < NumberOfSymbols; z++) {
        letters[z] = expr.substr(decades, 10);
        decades += 10;
    }

    for (let i = 0; i < letters.length; i++) {
        var str = letters[i];
        var elevens = str.replace(new RegExp('11', 'g'), '-');
        var tens = elevens.replace(new RegExp('10', 'g'), '.');
        var spaces = tens.replace(new RegExp('\\*{10}', 'g'), ' ');
        var finalMorse = spaces.replace(new RegExp('0', 'g'), '');
        console.log(finalMorse);
        fuckingMorseArray.push(finalMorse);
    }

    for (let i = 0; i < fuckingMorseArray.length; i++) {
        if (fuckingMorseArray[i] === ' ') {
            final.push(' ');
        }
        for (key in MORSE_TABLE) {

            if (fuckingMorseArray[i] === key) {
                final.push(MORSE_TABLE[key]);
            }
        }
    }
    return (final.join(''));
}

module.exports = {
    decode
}