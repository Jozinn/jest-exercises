function capitalize(str) {
    str = str.split('');
    str[0] = str[0].toUpperCase();
    str = str.join('');
    return str;
}

export default capitalize;