const transcriptionMap = {
    'A': 'А', 'a': 'а',
    'B': 'Б', 'b': 'б',
    'V': 'В', 'v': 'в',
    'G': 'Г', 'g': 'г',
    'D': 'Д', 'd': 'д',
    'E': 'Е', 'e': 'е',
    'Yo': 'Ё', 'yo': 'ё',
    'Zh': 'Ж', 'zh': 'ж',
    'Z': 'З', 'z': 'з',
    'I': 'И', 'i': 'и',
    'Iy': 'Й', 'iy': 'й',
    'K': 'К', 'k': 'к',
    'L': 'Л', 'l': 'л',
    'M': 'М', 'm': 'м',
    'N': 'Н', 'n': 'н',
    'O': 'О', 'o': 'о',
    'P': 'П', 'p': 'п',
    'R': 'Р', 'r': 'р',
    'S': 'С', 's': 'с',
    'T': 'Т', 't': 'т',
    'U': 'У', 'u': 'у',
    'F': 'Ф', 'f': 'ф',
    'Kh': 'Х', 'kh': 'х',
    'Ts': 'Ц', 'ts': 'ц',
    'Ch': 'Ч', 'ch': 'ч',
    'Sh': 'Ш', 'sh': 'ш',
    'Shch': 'Щ', 'shch': 'щ',
    '"': 'Ъ', '`': 'ъ',
    'Y': 'Ы', 'y': 'ы',
    '\"': 'Ь', '\'': 'ь',
    'Eh': 'Э', 'eh': 'э', 
    'Yu': 'Ю', 'yu': 'ю',
    'Ya': 'Я', 'ya': 'я',
};

document.getElementById('transcribe').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let matchFound = false;
        // Sort keys by length descending to match longer sequences first
        const sortedKeys = Object.keys(transcriptionMap).sort((a, b) => b.length - a.length);
        
        for (let transKey of sortedKeys) {
            // Check if the substring matches case-insensitively
            if (inputText.slice(i, i + transKey.length).toLowerCase() === transKey.toLowerCase()) {
                // Check if the original text matches the key exactly for case preservation
                if (inputText.slice(i, i + transKey.length) === transKey) {
                    // Use the transcription as-is if case matches
                    outputText += transcriptionMap[transKey];
                } else {
                    // If only lower case matches, convert to lower case
                    if (inputText[i] === inputText[i].toLowerCase()) {
                        outputText += transcriptionMap[transKey].toLowerCase();
                    } else {
                        // If the first char of the match is upper, convert to upper case
                        outputText += transcriptionMap[transKey].charAt(0).toUpperCase() + transcriptionMap[transKey].slice(1).toLowerCase();
                    }
                }
                i += transKey.length - 1; // Adjust i to skip processed characters
                matchFound = true;
                break;
            }
        }
        if (!matchFound) {
            outputText += inputText[i];
        }
    }

    document.getElementById('outputText').value = outputText;
});