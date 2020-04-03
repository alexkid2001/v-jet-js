const str = 'Write a function that find the most frequent character in a string (case insensitive)';

let mostFrequentChar = (text) => {
  let charsObj = {};
  let maxCount = 0;
  let maxChar = '';

  const formatedText = text.toLowerCase().replace(/\s/g, '');
  
  for (const char of formatedText) {
    if (charsObj.hasOwnProperty(char)) {
      charsObj[char]++;
    } else {
      charsObj[char] = 1;
    }
  }

  for (const char in charsObj) {
    if (charsObj[char] > maxCount) {
      maxCount = charsObj[char];
      maxChar = char;
    }
  }

  console.log(`Char "${maxChar}" used in text ${maxCount} times`);
  
}

mostFrequentChar(str);
