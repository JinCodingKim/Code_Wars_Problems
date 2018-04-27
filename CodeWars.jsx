///////////////////////////////////////////////
///////// CODE WARS - JAVASCRIPT //////////////
///////////////////////////////////////////////

////////////////////////////
//// Autocomplete! Yay! ////
////////////////////////////

// It's time to create an autocomplete function! Yay!

// The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

// Example:

// autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
// For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

// For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

// Solution :

function autocomplete(input, dictionary) {
  let special = "*|,\":<>[]{}`';~!@#$%^&*()_+1234567890";
  let newInput = input
    .split("")
    .map(e => (special.includes(e) ? "" : e))
    .join("");
  let filtered = dictionary.filter(e =>
    e.toLowerCase().startsWith(newInput.toLowerCase())
  );
  return filtered.slice(0, 5);
}

////////////////////////////
/////// Array.diff  ////////
////////////////////////////

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

// Solution :

function array_diff(a, b) {
  let newArr = [];
  a.map(e => (!b.includes(e) ? newArr.push(e) : null));
  return newArr;
}

////////////////////////////
//// Valid Parentheses /////
////////////////////////////

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.

// Solution :

function validParentheses(parens) {
  let open = 0;
  let close = 0;
  parens.split("").map(e => (e === "(" ? open++ : close++));
  if (parens[parens.length - 1] === "(") {
    return false;
  }
  return open !== close ? false : true;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced?  /////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"
// Note
// Please don't post issue about difficulty or duplicate.

// Solution :

function balance(left, right) {
  let leftTotal = 0;
  let rightTotal = 0;
  left
    .split("")
    .forEach(e => (e === "!" ? (leftTotal += 2) : (leftTotal += 3)));
  right
    .split("")
    .forEach(e => (e === "!" ? (rightTotal += 2) : (rightTotal += 3)));
  if (leftTotal > rightTotal) {
    return "Left";
  } else if (leftTotal < rightTotal) {
    return "Right";
  } else {
    return "Balance";
  }
}

/////////////////////////
//// Array Helpers //////
/////////////////////////

// This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared, the original array must not be changed
// cube() must return a copy of the array, containing all values cubed, the original array must not be changed
// average() must return the average of all array values, average() on an empty array must return NaN
// sum() must return the sum of all array values
// even() must return an array of all even numbers, the original array must not be changed
// odd() must return an array of all odd numbers, the original array must not be changed
// Examples:

// var numbers = [1, 2, 3, 4, 5];
// numbers.square(); // must return [1, 4, 9, 16, 25]
// numbers.cube(); // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum(); // must return 15
// numbers.even(); // must return [2, 4]
// numbers.odd(); // must return [1, 3, 5]

// Solution :

Array.prototype.square = function() {
  let copy = this.slice();
  for (let i = 0; i < copy.length; i++) {
    copy[i] *= copy[i];
  }
  return copy;
};

Array.prototype.cube = function() {
  let copy = this.slice();
  for (let i = 0; i < copy.length; i++) {
    copy[i] *= copy[i] * copy[i];
  }
  return copy;
};

Array.prototype.average = function() {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
};

Array.prototype.sum = function() {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

Array.prototype.even = function() {
  let copy = this.slice();
  let evens = [];
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] % 2 === 0) {
      evens.push(copy[i]);
    }
  }
  return evens;
};

Array.prototype.odd = function() {
  let copy = this.slice();
  let odds = [];
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] % 2 !== 0) {
      odds.push(copy[i]);
    }
  }
  return odds;
};

////////////////////
///// Dubstep //////
////////////////////

// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

// Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

// Solution :

function songDecoder(song) {
  return song
    .split("WUB")
    .filter(e => (e ? e : null))
    .join(" ");
}

///////////////////////
// Duplicate Encoder //
///////////////////////

// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("

// Notes:

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).

// Solution :

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(
      (e, i, arr) =>
        arr.indexOf(e) !== arr.lastIndexOf(e) ? (e = ")") : (e = "(")
    )
    .join("");
}

/////////////////////
// Break camelCase //
/////////////////////

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

// Solution :

function solution(string) {
  return string
    .split("")
    .map(e => (e === e.toUpperCase() ? ` ${e}` : e))
    .join("");
}

/////////////////////////
// Human Readable Time //
/////////////////////////

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// Solution :

function humanReadable(seconds) {
  let h = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = seconds - h * 3600 - min * 60;
  return [h, min, sec]
    .map(time => {
      if (time.toString().length < 2) {
        return `0${time}`;
      } else {
        return time;
      }
    })
    .join(":");
}
