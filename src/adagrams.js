
const letterPool = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export const drawLetters = () => {
  const hand = [];
  const letterCount = {};

  while (hand.length < 10) {
    const pool = Object.keys(letterPool);
    const alphabet = pool[Math.floor(Math.random() * pool.length)];
    const occurrence = letterPool[alphabet];
    const count = letterCount[alphabet] || 0;
    if (count < occurrence) {
      hand.push(alphabet);
      letterCount[alphabet] = count + 1;
    }
  }
  return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  const bankCopy = [...letterBank];
  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterIndex = bankCopy.indexOf(letter);

    if (letterIndex === -1) {
      return false;
    }

    bankCopy.splice(letterIndex, 1);
  }

  return true;
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
