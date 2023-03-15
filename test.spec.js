import analyzeArray from "./analyzeArray";
import caesarCipher from "./caesarCipher";
import Calculator from "./calculator";
import capitalize from "./capitalize";
import reverseString from "./reverseString";

describe('analyzeArray() function', () => {
    it('outputs correct min, max, avg and length values', () => {
        expect(analyzeArray([1,2,3,4,5,6])).toEqual({
            avg: 3.5,
            min: 1,
            max: 6,
            length: 6
        });
    });
});

describe('caesarCipher() function', () => {
    it('ciphers the given string', () => {
        expect(caesarCipher('jpgmd', 1)).toBe('kqhne');
    });
});

describe('Calculator class', () => {
    it('adds 2 numbers with add() method', () => {
        expect(Calculator.add(21, 37)).toEqual(58);
    });

    it('substracts 2 numbers with substrat() method', () => {
        expect(Calculator.substract(5, 3)).toEqual(2);
    });

    it('multiplies 2 numbers with multiply() method', () => {
        expect(Calculator.multiply(6, 9)).toEqual(54);
    });

    it('divides 2 numbers with divide() method', () => {
        expect(Calculator.divide(4, 20)).toEqual(0.2);
    });
});

describe('capitalize() function', () => {
    it('capitalizes a string', () => {
        expect(capitalize('xDDD')).toBe('XDDD');
    });
});

describe('reverseString() function', () => {
    it('reverses a string', () => {
        expect(reverseString('jd')).toBe('dj');
    });
});