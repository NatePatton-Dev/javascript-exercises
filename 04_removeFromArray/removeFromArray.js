const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {
        while(array.indexOf(args[i]) >= 0) {
            array.splice(array.indexOf(args[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
