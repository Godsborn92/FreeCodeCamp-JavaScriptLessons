/*--------------------------------------

Introduction to the Regular Expression Challenges

----------------------------------------*/

/*

Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text.
Regular expressions can appear cryptic because a few characters have special meaning.
The goal is to combine the symbols and text into a pattern that matches what you want, but only what you want.
This section will cover the characters, a few shortcuts, and the common uses for writing regular expressions.


*/

//Regular Expressions:Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
//Result True

//Regular Expressions:Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
//Result True

//Regular Expressions:Match a Literal String with Different Possibilities 

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
//Result True

//Regular Expressions:Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // i is a flagged used to ignore case 
let result = fccRegex.test(myString);
//Result True

//Regular Expressions:Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Literal String Expression
let result = extractStr.match(codingRegex); // .match method to extract using regex
//Result [coding] --Match Returns an Array

//Regular Expressions:Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; //g flag is used to find the same match more than once, you can use more then one flag i is included in this example
let result = twinkleStar.match(starRegex);
//Result [Twinkle, twinkle]

//Regular Expressions:Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // - . is a wildcard treated like any other character
let result = unRegex.test(exampleStr);
//Result True

//Regular Expressions:Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // [] are for character classes --In this case all vowels
let result = quoteSample.match(vowelRegex);
//Result [] with 25 vowels

//Regular Expressions:Match Letters of the Alphbet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // [a-z] uses a range in a character set --everthing from a - z will be used in find
let result = quoteSample.match(alphabetRegex);
//Result Array with 35 items

//Regular Expressions:Match Number and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; //letters and numbers can be used together in the character classes and there given range
let result = quoteSample.match(myRegex);
//Result Array with 17 items

//Regular Expression:Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou1-5]/gi; // ^ is used for negated character set (in this case excluds any vowel and number 1-5)
let result = quoteSample.match(myRegex);
//Result Array with 9 items

//Regular Expressions:Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // + looks for a character repeated one after the other ex. aa
let result = difficultSpelling.match(myRegex);
//Result Array with 2 items ["ss", "ss"]

//Regular Expressions:Match Character that Occur Zero or More Times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // * looks for characters that occur zero or more times
let result = chewieQuote.match(chewieRegex);
//Result ["Aaaaaaaaaaaaaaaa"]

//Regular Expressions:Find Character with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // ? is lazy matching will smallest sub-string possible to fit the pattern
let result = text.match(myRegex);
//Result <h1> (Note if your testing in chrome on a webpage text is often already declared may through an error)

//Regular Expressions:Find One or More Criminals in a Hunt

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

//Regular Expressions:Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; //Check the search pattern at the beginning of a string
let result = calRegex.test(rickyAndCal);
//Return True

//Regular Expressions:Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Check the search pattern at the end of a string
let result = lastRegex.test(caboose);
//Result True

//Regular Expressions:Match All Letters and Numbers

//Into to Shorthand Character classes

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // shorthand character class for [A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length;
//Result 31

//Regular Expressions:Match Everything But Letters and Numbers


