const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DOT = '.';
  const cache = {};
  for (const domain of domains) {
    const arrayFromDomain = domain.split('.');
    let domainPart = '';
    for (let i = arrayFromDomain.length - 1; i >= 0; i--) {
      domainPart = domainPart + DOT + arrayFromDomain[i];
      if (cache[domainPart]) {
        cache[domainPart] += 1;
      } else {
        cache[domainPart] = 1;
      }
    }
  }

  return cache;
}

module.exports = {
  getDNSStats
};
