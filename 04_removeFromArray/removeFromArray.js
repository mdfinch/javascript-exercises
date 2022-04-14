const removeFromArray = function(array, ...args) {
    let newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    
    return newArray;
  };

  removeFromArray([1,2,3,4], 3, 4)

module.exports = removeFromArray;