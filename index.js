// Am I a String?




function isString(x) {
  
    if (typeof x === "string") 
  {
    console.log(true) ;
    return
    
  }
else{
    console.log(false);
    return
}

}

isString([5]); // => false
isString('hello'); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false

//Check for Array

function isArray(x) {
  
    if (x instanceof Array) {
  
    console.log(true);
    return
  }
else {
    console.log(false);
    return
}
}

isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false

// Check for Types in Array

function areSameType(x) {
    
    for (let i = 0; i < x.length - 1; i++) {
        if ( typeof(x[i]) !== typeof(x[i + 1])) {

            return false;
          } 
        }
        return true;
    }


    console.log(areSameType(['hello', 'world', 'long sentence'])) // => true
    console.log(areSameType([1, 2, 9, 10]) )// => true
    console.log(areSameType([['hello'], 'hello', ['bye']])) // => false
    console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])) // => true

    //Sort and Remove Duplicated Characters
    
    
    const longest = (x, y) => [...new Set(x + y)].sort().join('');
    
    console.log(longest('abcccaa', 'acddddffzzz')); // => 'abcdfz'


a = 'xyaabbbccccdefww';
b = 'xxxxyyyyabklmopq';

console.log(longest(a, b)); // => 'abcdefklmopqwxy'


a = 'abcdefghijklmnopqrstuvwxyz';
console.log(longest(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'  
console.log(longest(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'


// Convert Number to Reversed Array of Digits

convertNum = num => num.toString().split("").map(Math.floor).sort().reverse();

console.log(convertNum(2346792139));
console.log(convertNum(757983023));

//Count Repetitions

repetitions = elements => elements.reduce((acc,el) => {
  acc[el] ? acc[el] += 1 : acc[el] = 1;
  return acc
}, {});

const elements = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];

console.log(repetitions(elements)); // { kerouac: 2, fante: 3, buk: 2, hemingway: 1, hornby: 1 }



function isCaught(sequence) {
  let jumpLength = 3;
  for (let i = 0; i < sequence.length; i++) {
    let chr = sequence[i];
    if (chr === 'C') {
      for (let j = i + 1; j <= i + jumpLength + 1; j++) {
        let chr2 = sequence[j];
        if (chr2 === 'm') {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(isCaught('C...m')); // => true
console.log(isCaught('..C..m')); // => true
console.log(isCaught('..C...m')); // => true
console.log(isCaught('C.....m')); // => false
console.log(isCaught('C.....m...')); // => false

// Split the Bill


function splitBill(expenses) {

  let totalAmount = 0;
  for (let person in expenses) {
      totalAmount += expenses[person];
  }

 
  let averageAmount = totalAmount / Object.keys(expenses).length;

 
  let balance = {};
  for (let person in expenses) {
      balance[person] = expenses[person] - averageAmount;
  }

  return balance;
}


const expenses = {
  Amy: 20,
  Bill: 15,
  Chris: 10
}


    console.log(splitBill(expenses));


// Exponentiation

exp = (base, number) => number === 0 ? 1 : base * exp(base, number - 1)


console.log(exp(5, 3)); // => 125
console.log(exp(2, 4)); // => 16
console.log(exp(5, 1)); // => 5
console.log(exp(6, 0)); // => 1

//Pig Latin

function translatePigLatin(word) {
  word = word.toLowerCase();
  if ("aeiou".includes(word[0])) {
    return word + "way";
  } else {
    while (!"aeiou".includes(word[0])) {
      word = word.substring(1) + word[0]
    }
    return word + "ay";
  }
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("pig")); // igpay

//Search and Replace

function myReplace(str, before, after) {
  let stringArray = str.split(" ");
  for (let i = 0; i <= stringArray.length - 1; i++) {
      let firstChar = stringArray[i].charAt(0);

      if (stringArray[i].toLowerCase() === before.toLowerCase()) {
          if (firstChar === firstChar.toUpperCase()) {
              stringArray = stringArray
                  .join(" ")
                  .replace(
                      stringArray[i],
                      after.charAt(0).toUpperCase() + after.slice(1)
                  );
          } else {
              stringArray = stringArray.join(" ").replace(stringArray[i], after);
          }
      }
  }
  return stringArray;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


//Translate to English


const toEnglish    = str => str.split(" ").map(element => String.fromCharCode(parseInt(element, 2).toString(10))).join("");

console.log(
    toEnglish(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
);

//Confirm the Ending

const confirmEnding = (string, end) => string.lastIndexOf(end) + end.length >= string.length;


console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Open sesame", "sam")); // false
console.log(confirmEnding("Open sesame", "e")); // true

