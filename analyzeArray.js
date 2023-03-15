function analyzeArray(arr) {
    arr.sort();
    const sum = arr.reduce((a, b) => a + b);
    const length = arr.length;
    const avg = sum / length;
    const min = arr[0];
    const max = arr[arr.length - 1];
    return {
        avg,
        min,
        max,
        length: length
    };
}

export default analyzeArray;