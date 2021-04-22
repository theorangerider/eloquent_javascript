function countBs(str) {
    return countChar(str, "B");
}

function countChar(str, my_char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == my_char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));
