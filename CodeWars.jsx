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
