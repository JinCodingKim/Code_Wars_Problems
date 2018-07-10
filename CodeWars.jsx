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

/////////////////////////
//    Fruit Machine    //
/////////////////////////

// 	You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.

// 1. There are always exactly three reels
// 2. Each reel has 10 different items.
// 3. The three reel inputs may be different.
// 4. The spin array represents the index of where the reels finish.
// 5. The three spin inputs may be different
// 6. Three of the same is worth more than two of the same
// 7. Two of the same plus one "Wild" is double the score.
// 8. No matching items returns 0.

// Item
// Three of the same

// Two of the same

// Two of the same plus one Wild

// Wild
// 100
// 10
// N/A

// Star
// 90
// 9
// 18

// Bell
// 80
// 8
// 16

// Shell
// 70
// 7
// 14

// Seven
// 60
// 6
// 12

// Cherry
// 50
// 5
// 10

// Bar
// 40
// 4
// 8

// King
// 30
// 3
// 6

// Queen
// 20
// 2
// 4

// Jack
// 10
// 1
// 2

// Return an integer of the score.

// Solution :

function fruit(reels, spins) {
  const winning = {
    Wild: 10,
    Star: 9,
    Bell: 8,
    Shell: 7,
    Seven: 6,
    Cherry: 5,
    Bar: 4,
    King: 3,
    Queen: 2,
    Jack: 1
  };
  let count = 0;
  let chosen = [];
  let chosenCount = {};
  let chosenSortable = [];
  let prize = 0;

  for (let i = 0; i < spins.length; i++) {
    chosen.push(reels[count][spins[i]]);
    count++;
  }

  chosen.forEach(e => (chosenCount[e] = (chosenCount[e] || 0) + 1));

  for (let sorted in chosenCount) {
    chosenSortable.push([sorted, chosenCount[sorted]]);
  }
  chosenSortable.sort((a, b) => b[1] - a[1]);

  for (let j = 0; j < chosenSortable.length; j++) {
    let sortName = chosenSortable[j][0];
    let sortVal = chosenSortable[j][1];
    if (sortVal === 3) {
      return (winning[sortName] *= 10);
    } else if (
      sortVal === 2 &&
      sortName !== "Wild" &&
      chosenCount.hasOwnProperty("Wild")
    ) {
      return (winning[sortName] *= 2);
    } else if (sortVal === 2) {
      return winning[sortName];
    } else {
      return 0;
    }
  }
}

////////////////////////////////////////
// Extract the domain name from a URL //
////////////////////////////////////////

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// Solution :

function domainName(url) {
  if (url.includes("www.")) {
    return url.split(".")[1];
  } else if (url.includes("://")) {
    return url.split("://")[1].split(".")[0];
  } else {
    return url.split(".")[0];
  }
}

/////////////////////////////////////
// Highest Rank Number in an Array //
/////////////////////////////////////

// Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

// Example:

// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// highestRank(arr) //=> returns 12

// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
// highestRank(arr) //=> returns 12

// arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
// highestRank(arr) //=> returns 3

// Solution :

function highestRank(arr) {
  let counterObj = {};
  let sortableCounter = [];
  arr.forEach(num => (counterObj[num] = (counterObj[num] || 0) + 1));
  for (let count in counterObj) {
    sortableCounter.push([count, counterObj[count]]);
  }
  let topNumbers = sortableCounter
    .sort((a, b) => b[1] - a[1])
    .filter((e, i, arr) => arr[0][1] === e[1])
    .sort((a, b) => b[0] - a[0]);
  return Number(topNumbers[0][0]);
}

/////////////
// IQ Test //
/////////////

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// Solution :

function iqTest(numbers) {
  let evens = [];
  let odds = [];
  numbers
    .split(" ")
    .map(
      (num, i) =>
        parseInt(num) % 2 === 0 ? evens.push(i + 1) : odds.push(i + 1)
    );
  return evens.length > odds.length ? odds[0] : evens[0];
}

///////////////////////
// extract file name //
///////////////////////

// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// Youll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// The recommend way to solve it is using RegEx and specifically groups.

// Solution :

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    let fileArr = dirtyFileName.split("_").splice(1);
    let sepArr;
    if (fileArr.length > 1) {
      sepArr = fileArr[1]
        .split(".")
        .splice(0, 2)
        .join(".");
      return [fileArr[0], sepArr].join("_");
    } else {
      return fileArr[0]
        .split(".")
        .splice(0, 2)
        .join(".");
    }
  }
}

//////////////////////////
// Directions Reduction //
//////////////////////////

// Once upon a time, on a way through the old wild west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed the desert the smart way.
// The directions given to the man are, for example, the following:

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

// You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]

// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// Examples
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []

// Note
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

// Solution :

function dirReduc(arr) {
  let newDir = [];
  for (let i = 0; i < arr.length; i) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] !== "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] !== "NORTH") ||
      (arr[i] === "EAST" && arr[i + 1] !== "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] !== "EAST")
    ) {
      newDir.push(arr[i]);
      i++;
    } else {
      i += 2;
    }
  }
  for (let j = newDir.length - 1; j > 0; j--) {
    if (
      (newDir[j] === "NORTH" && newDir[j - 1] === "SOUTH") ||
      (newDir[j] === "SOUTH" && newDir[j - 1] === "NORTH") ||
      (newDir[j] === "EAST" && newDir[j - 1] === "WEST") ||
      (newDir[j] === "WEST" && newDir[j - 1] === "EAST")
    ) {
      newDir.splice(j - 1, 2);
    }
  }
  return newDir;
}

////////////////////////
// Advanced Pig Latin //
////////////////////////

// Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

// "hello" => "ellohay"
// "creating" => "eatingcray"
// If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

// "algorithm" => "algorithmway"
// This problem is different from other variations in that it expects casing to remain the same so:

// "Hello World" => "Ellohay Orldway"
// as well as punctuation.

// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
// Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.

// Solution :

function translate(sentence) {
  /* ex : sentence = "Hello!! To you." */
  const vowels = "aeiouAEIOU";
  const etc = ".,!?;:";
  const sentenceArr = sentence.toLowerCase().split(" ");
  let newArr = [];
  let etcArr = [];
  let tempArr = [];

  /* 
  Create temp array with strings with no !?.,:; 
  (creates nested arrays with index markers of strings that had special characters)
  ex : [[0, "hello"], [2, "you"]];
  */

  /*
  Create etc array with just !?.,:;
  (creates nested arrays with index markers of where special characters belong)
  ex : [[0, "!!"], [2,"."]];
  */

  sentenceArr.forEach((e, i) => {
    for (let j = 0; j < e.length; j++) {
      if (etc.includes(e[j])) {
        let etcSlice = e.slice(j);
        let textSlice = e.slice(0, j);
        etcArr.push([i, `${etcSlice}`]);
        tempArr.push([i, textSlice]);
        return;
      }
    }
  });

  /* 
  This will replace the original sentence array with the clean strings without special characters.
  ex : ["hello!!", "to", "you."] --> ["hello", "to", "you"] 
  */

  for (let i = 0; i < sentenceArr.length; i++) {
    for (let j = 0; j < tempArr.length; j++) {
      if (tempArr[j][0] === i) {
        sentenceArr[i] = tempArr[j][1];
      }
    }
  }

  /* 
  Now without the special characters this will create a new array with the pig latin changes from
  the original sentence array.
  ex : sentence array = ["hello", "to", "you"] --> new array = ["ellohay", "otay", "ouyay"]
  */

  sentenceArr.forEach(e => {
    for (let i = 0; i < e.length; i++) {
      let aySlice;
      let textSlice;
      if (vowels.includes(e[i])) {
        if (i === 0) {
          aySlice = e.slice(0, i);
          textSlice = e.slice(i);
          newArr.push(`${textSlice}${aySlice}way`);
          return;
        } else {
          aySlice = e.slice(0, i);
          textSlice = e.slice(i);
          newArr.push(`${textSlice}${aySlice}ay`);
          return;
        }
      }
    }
  });

  /*
  With the pig latin changes, this will put the special characters back to the back of each word
  within the new pig latin array.
  ex : ["ellohay", "otay", "ouyay"] --> ["ellohay!!", "otay", "ouyay."]
  */

  for (let k = 0; k < newArr.length; k++) {
    for (let l = 0; l < etcArr.length; l++) {
      if (etcArr[l][0] === k) {
        newArr[k] = newArr[k].concat(etcArr[l][1]);
      }
    }
  }

  /*
  Finally, the new pig latin array will check once more with the original sentence array, and
  check which words started with a capital letter and make the necessary changes.
  ex : ["Hello!!", "To", "you."] --> ["Ellohay!!", "Otay", "ouyay."]
  */

  sentence.split(" ").forEach((word, i) => {
    if (word[0] === word[0].toUpperCase()) {
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
    }
  });

  // We will now join the array into a single string with single space between the words.

  return newArr.join(" ");
}
