module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(subarr => {
      if (str[i] === subarr[0] && str[i + 1] === subarr[1]) {
        str = str.slice(0, i) + str.slice(i + 2, str.length);
        i -= 2;
      }
    });
  }

  return (str.length === 0);
}
