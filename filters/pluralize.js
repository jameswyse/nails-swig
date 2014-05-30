/**
 * Specifies the pluralized form of the word you need.
 *
 * @example
 * // count = 1
 * {{ count|pluralize('item', 'items') }}
 * => "1 item"
 *
 * @example
 * // count = 15
 * {{ count|pluralize('item', 'items') }}
 * => "15 items"
 *
 * @param  {number}  value  The value to check
 * @param  {string}  single The singular form
 * @param  {string}  plural The plural form
 * @param  {boolean} wordOnly When true the value will not be included in the result.
 * @return {string}
 */
module.exports = function(value, single, plural, wordOnly) {
  value = parseInt(value, 10);

  var word = (value === 1) ? single : plural;
  return wordOnly ? word : value + ' ' + word;
};

exports.safe = false;
