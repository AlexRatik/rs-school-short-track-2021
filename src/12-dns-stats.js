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
  const set = {};
  const regexp = /\.[0-9a-z]{1,5}$/;
  for (let i = 0; i < domains.length; i++) {
    const little = domains[i].match(regexp);
    const substr = domains[i].substring(0, domains[i].length - little[0].length).split('.').reverse();
    const conc = little[0].concat('.', substr[0]);
    let all = '';
    if (substr[1]) {
      all = little[0].concat('.', substr.join('.'));
    }
    if (set[little[0]] > 0) set[little[0]]++;
    else set[little[0]] = 1;

    if (set[conc] > 0) set[conc]++;
    else set[conc] = 1;

    if (set[all] > 0) set[all]++;
    else if (all) set[all] = 1;
  }
  return set;
}

// domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru',
// ];

// console.log(getDNSStats(domains));

module.exports = getDNSStats;
