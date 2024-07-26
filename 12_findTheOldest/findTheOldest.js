const findTheOldest = function(arr) {
    
    let sorted = arr.map(function(item) {
        if (!('yearOfDeath' in item)) {
            item.yearOfDeath = new Date().getFullYear();
        };
        return item;
    }).sort(function(a, b) {
        return (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth);
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
