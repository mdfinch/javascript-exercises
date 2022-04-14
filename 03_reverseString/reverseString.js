// const reverseString = function(string) {
//     let word = '';
//     for (let index = string.length - 1; index >= 0; index--) {
//         word += string.charAt(index)
//         console.log(word)
//     }
//     return word   
// };

const reverseString = function(string) {
    let word = '';
    let array = string.split('');
    for (let index = array.length - 1; index >= 0; index--) {
                word += array[index]
    }
    return word
}

// Do not edit below this line
module.exports = reverseString;
