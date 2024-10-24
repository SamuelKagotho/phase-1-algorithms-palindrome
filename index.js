function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  1. Split the word characters to create an array.
  2. Reverse the array.
  3. Join the reversed array of characters to form a string.
  4. Compare the new word formed with the original word.
  5. If they are the similar, return true meaning the word is a palindrome.
  6. If not similar, return false meaning the word is not a palindrome
*/

/*
  Add written explanation of your solution here
  - The above function verifies if the word reads the same when read forward or backwords.
  - It divides the word into own characters, then reverses the characters, and joins them back to form a string.
  - Then, it verifies the newly formed word against the original one. 
  - If they are equal, then the function returns true meaning is a palidrome.
  - If they are not equal, it returns false meaning the word is not a palidrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
