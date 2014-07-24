var each = require('../lib/utils').each;

module.exports = function isEven(input) {
  if(typeof input === 'string') {
    input = parseInt(input, 10);
  }

  return (input % 2) === 0;
};
