/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regexp = /(@[a-z0-9-]+(\.[a-z0-9-]+))$/;
  const str = email.match(regexp);
  return email.substring(str.index + 1);
}

// console.log(getEmailDomain('prettyandsimple@example.com'));

module.exports = getEmailDomain;
