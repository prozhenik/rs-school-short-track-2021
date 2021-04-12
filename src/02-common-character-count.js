/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sShortest = (s1.length <= s2.length ? s1 : s2);
  const sLongest = (sShortest === s1 ? s2 : s1).split('');
  sShortest = sShortest.split('');
  let num = 0;
  for (let i = 0; i < sShortest.length; i++) {
    if (sShortest.indexOf(sShortest[i]) !== -1) {
      sLongest.splice(sLongest.indexOf(sShortest[i]), 1);
      num++;
    }
  }
  return num;
}

module.exports = getCommonCharacterCount;
