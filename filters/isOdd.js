module.exports = function isOdd(input) {
  if(typeof input === 'string') {
    input = parseInt(input, 10);
  }

  return (input % 2) !== 0;
};
