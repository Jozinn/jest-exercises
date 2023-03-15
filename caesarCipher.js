function caesarCipher(text, shift) {
    const text_arr = text.split('');
    const shifted_text_arr = text_arr.map(char => {
        let ascii = char.charCodeAt(0);
        if (ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122) {
            return ascii;
        }
        ascii += shift;
        if (ascii > 122 || (ascii > 90 && ascii < 97) || ascii > 122) {
            ascii -= 26;
        }
        return String.fromCharCode(ascii);
    });
    const shifted_text = shifted_text_arr.join('');
    return shifted_text;
}

export default caesarCipher;