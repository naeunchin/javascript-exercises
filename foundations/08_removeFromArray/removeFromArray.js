const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val));

    // Another approach 
    // const newArray = [];
    // array.forEach((item) => {
    //     if (!args.includes(item)) {
    //         newArray.push(item);
    //     }
    // });

    // return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
