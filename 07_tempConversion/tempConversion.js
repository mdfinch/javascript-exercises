const ftoc = function(number) {
  let farenheight = (number - 32) * (5/9);
  console.log(farenheight)
  let answer = Math.round(farenheight * 10) / 10

  return answer
};

const ctof = function(num) {
  let celcius = (num * 9/5) + 32;
  let ans = Math.round(celcius * 10) / 10

  return ans
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
