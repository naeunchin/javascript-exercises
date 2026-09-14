const leapYears = function(year) {
    // Divisible by 4 
        // Not divisible by 100 OR divisible by 400
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
