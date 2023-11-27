const genRandomName = () => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'g',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const getRandomLetter = () => {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };
  const getRandomNum = (count) => {
    return Math.floor(Math.random() * count);
  };
  return `用户${getRandomNum(100)}${getRandomLetter()}${getRandomNum(100)}${getRandomLetter()}${getRandomNum(10)}`;
};

export { genRandomName };
