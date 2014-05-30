var utils = require('nails-utils');

/**
 * Converts the input value to a String
 *
 * @example
 * // foo = 123;
 * {{ foo|toString }}
 * // => "123"
 *
 *
 * @param  {*} input
 * @return {string} output
 */
module.exports = function (input) {
  return utils.string(input).toString();
};
