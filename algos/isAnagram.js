const s1 = 'abcdee';
const s2 = 'aedecb';
const s3 = 'abcdfg';

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const mapOne = {};
  const mapTwo = {};

  for (let i = 0; i < s1.length; i += 1) {
    const char = s1[i];

    if (mapOne[char]) mapOne[char] += 1;
    else mapOne[char] = 1;
  }

  for (let i = 0; i < s2.length; i += 1) {
    const char = s2[i];

    if (mapTwo[char]) mapTwo[char] += 1;
    else mapTwo[char] = 1;
  }

  const keysOne = Object.keys(mapOne);
  const keysTwo = Object.keys(mapTwo);

  if (keysOne.length !== keysTwo.length) return false;

  for (let i = 0; i < keysOne.length; i += 1) {
    const key = keysOne[i];
    if (mapOne[key] !== mapTwo[key]) return false;
  }

  return true;
}

console.log(isAnagram(s1, s2));
console.log(isAnagram(s1, s3));
