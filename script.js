/* 

given word, return if it's palindrome (boolean)

str -> letters, all lower, no specials, funny biz etc.

*/

const isPalindrome = word => word === word.split('').reverse().join('');

console.log(isPalindrome('racecar'), 'true');
console.log(isPalindrome('leonnoel'), 'true');
console.log(isPalindrome('spongebob'), 'false');

