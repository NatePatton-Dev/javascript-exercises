const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    };
    let fibArr = [0, 1];
    for (let i = 1; i < num; i++) {
        fibArr.push(fibArr[i]+fibArr[i-1]);
    };
    return fibArr[num];
};

// Do not edit below this line
module.exports = fibonacci;
