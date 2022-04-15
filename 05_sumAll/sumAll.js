const sumAll = function(p1, p2) {
    let sum = 0; 
    if(typeof(p1) !== typeof(1) || typeof(p2) !== typeof(1)) {
        return "ERROR"
    } else if (p1 < 0 || p2 < 0) {
        return "ERROR"
    } else {
        if(p1 > p2) {
            let arg1 = p2;
            let arg2 = p1;
            for(let x = arg1; x <= arg2; x++) {
                sum += x
            }
            return sum
        } else {
            for(let x = p1; x <= p2; x++) {
                sum += x
            }
            return sum
        }
    }
};

sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
