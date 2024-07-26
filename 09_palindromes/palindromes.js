const palindromes = function (str) {
    const alphanum = "abcdefghijklmnopqrstuvwxyz1234567890";
    let arr = str.toLowerCase().split('').filter(function(item) {
        return alphanum.includes(item);
    });
    for (let i = 0; i < ((arr.length/2)-1); i++) {
        if (arr[i] !== arr[(arr.length-1)-i]) {
            return false;
        };
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
