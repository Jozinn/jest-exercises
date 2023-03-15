function reverseString(str) {
    let reversed = '';
    for(let chr of str) {
        reversed = chr + reversed;
    }
    
    return reversed;
}

export default reverseString;