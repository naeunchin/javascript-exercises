const findTheOldest = function(people) {
    // Return the whole person object with the oldest person 
    // Check the person's age: if yearOfDeath exists, then yod - yob OR if yod does not exist, currentYear - yob 
    // Use JS Date function to get current year 
    const currentYear = new Date().getFullYear();
    
    // Can use JS Array.prototype.reduce() and Array.prototype.sort(), but sort() reorders the entire collection (higher time complexity) 
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
