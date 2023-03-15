class Calculator {
    static add(a, b) {
        return a + b;
    }

    static substract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b == 0) {
            return 'cannot divide';
        }
        return a / b;
    }
}

export default Calculator;