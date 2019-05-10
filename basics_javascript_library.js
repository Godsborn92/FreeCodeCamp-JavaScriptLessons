// inline comment

/* Multi-line
comment*/

//Declare a variable

var a;

/* Variable Types Include:
    
    undefined
    null
    boolean
    string
    symbol
    number
    object
*/

//Variable assignment

a = 9;
console.log(a);

//Intializing Variable with assignment Operator

var a = 10;

//Camel Case

var rsiEnergyName = "RSI Energy";

//Javascript Mathematic Operators

var addition = 2 + 2;
var subtration = 4 - 2;
var multiplcation = 4 * 2;
var divison = 4 / 2;

console.log(addition);
console.log(subtration);
console.log(multiplcation);
console.log(divison);

//Increment and Decrement of a number

var increment = 5++;
var decrement = 5--;

console.log(increment);
console.log(decrement);

//Decimal Numbers

var decimal = 2.0;

var decimalCalc = 4.4 / decimal;

console.log(decimalCalc);

//Finding a remainder with % also know as the Modulus Operator

var remainder = 5 % 2;

var testRemainder = Math.floor(5 / 2);

console.log(testRemainder);

/*
    Result should be 2 (Quotient)
    2 * 2 = 4
    5 - 2 = 1 (Remainder)
*/

//Compound Assignment with Augmented Addition

var compoundAssign = 5;
compoundAssign += 1;

console.log(compoundAssign);
//Result should be 6

//Compound Assignment with Augmented Subtraction

compoundAssign -= 1;

console.log(compoundAssign);
//Result should be original value 5

//Compound Assignment with Augmented Multiplication

compoundAssign *= 1;

console.log(compoundAssign);
//Result should be original value as well since 5 * 1 = 5

//Compound Assignment with Augmented Division

compoundAssign = 10;
compoundAssign /= 2;

console.log("Result = " + compoundAssign + " (Does result = 5?");
//Result still 5 since compoundAssign was still reassigned 10 and then divided by 2

//String Variable

var firstName = "A Name";
var lastName = "A Last Name";

var fullName = firstName + " " + lastName;
console.log(fullName);
//result Jacob Carr

//Escaping Literal Quotes in Strings

var escapeLiteral = fullName + " said in a recent Facebook post,\"I think that programming is awesome.\"";
console.log(escapeLiteral);
// Result Jacob Carr said in a recent Facebook post, "I think that programming is awesome."

var quoteString = 'Today in a recent press release anthoy scott said "I can see the lakers going to the finals this season."';
//Single Quotes and double quotes can be used in javascript and be used to cancel eachother out

//Escape Sequences in Strings
var escapeSingleQuote = "The single quote option or option\'s";
var escapeDoubleQuote = "\"The Double quote option or option\'s\"";
var escapeBackslash = "follow instructions to network drive J:\\\\";
//should print follow instructions to network drive J:\\
var escapeNewLine = 'follow instructions to network drive J: \n "this section will be on a secound line"';
/* Other examples include:
                    \r - carraiage return (rarely used)
                    \t - tab
                    \b - backspace
                    \f - form feed
*/

//Concatenating String with Plus Operator

var stringConcat = "This is a string " + "connected with another string. ";
stringConcat += "This is yet again another string.";
console.log(stringConcat);
//result This is a string connected with another string. This is yet again another string.

//Variables in Strings

var stringNewConcat = " New sentence to add but as a variable.";
var stringFullConcat = stringConcat + stringFullConcat;
//result should be This is a string connected with another string. This is yet again another string. New sentence to add but as a variable.

//Javascript Length Method
//.length returns a number based on the number of characters in string including spaces.

var stringLength = "This is a string.";
console.log(stringLength.length);
//Result 17

//Bracket Notation (Javascript like most programming languages is Zero-based indexing)

var firstLetterOfLastName = "";
var bracketLastName = "Lovelace";

firstLetterOfLastName = bracketLastName[0];
firstLetterOfLastName += bracketLastName[1];
firstLetterOfLastName += bracketLastName[2];
firstLetterOfLastName += bracketLastName[3];
firstLetterOfLastName += bracketLastName[4];
firstLetterOfLastName += bracketLastName[5];
firstLetterOfLastName += bracketLastName[6];
firstLetterOfLastName += bracketLastName[7];
//Result firstLetterOfLastName should equal bracketLastName Lovelace as a string

//String Immutability - In javascript String values are immutable, which mean that they cannot be altered once created
/* var myStr = "Bob";
        myStr[0] = "J"; //Result Job but not possible since string is immutable
*/
//Corret String Method
var myStr = "Bob";
myStr = "Jobs";
//Result Job

//Bracket Notation Nth Character
var thirdLetterOflastName = myStr[2];
//Result b

//Bracket Notation Last Character
var lastLetterOfLastName = myStr[myStr.length - 1];
//Result s

//Bracket Notation Nth-to-Last Character
var nthToLastChar = myStr[myStr.length - 2];
//Result b is the second to last character in string

/*--------------------------------------

Next Step on freeCodeCamp is Word Blanks Exersise    

----------------------------------------*/

//Creat a Mad Libs style fill in the blank

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    var sentence = "In the early morning sun the " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " as they chased there prey to the ends of the horizon.";
    result = sentence;
    return result;
}

wordBlanks("dog", "big", "ran", "quickly");

//Storing Multiple Values in an Array

var taxInfo = ["Single", "Married", 0, 1, 2];

//Nested Array in an Array

var updatedTaxInfo = [["Single", 0, 1], ["Married", 0, 1, 2]];

//Access Array Data with Indexes

var simpleArray = taxInfo[0];
//Result Single

//Modify Array

taxInfo[0] = "Single/Seperated";
//Result taxInfo = [Single/Seperated, Married, 0 , 1, 2]

//Multi-Dimensional Arrays with Indexes

var multiArray = updatedTaxInfo[1][0];

//Array Manipulation

//push Method - Append data to the end of an array
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);
//Result [["John", 23], ["cat", 2], ["dog", 3]]

//pop Method - Removes last value from array and stores value if assigned to a variable
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
//Result ["dog", 3]
console.log(myArray);
//Result [["John", 23], ["cat", 2]

//shift Method - Is just like pop() except it removes the first element of the Array
var removedFirstItem = myArray.shift();
console.log(removedFirstItem);
//Result ["John", 23]
console.log(myArray.length);
//Result 1

//unshift Method - Is just like push() except it adds an element to the beginning of an Array
myArray.unshift("Steve");
console.log(myArray);
//Result ["Steve", ["cat", 2]]

//Shopping List Array Exercise

var myList = [];
var veggies = [["Broccoli", 10], ["Corn", 7], ["Pea Bag", 1]];
var produce = [["Eggs", 12], ["Milk", 1]];
var sweets = ["Chocolate Bar", 2];

myList.push(veggies[0]);
myList.push(veggies[1]);
myList.push(veggies[2]);
console.log(myList);
//Result [["Broccoli", 10], ["Corn", 7], ["Pea Bag", 1]]
myList.unshift(produce[0]);
myList.push(produce[1]);
console.log(myList);
//Result [["Eggs", 12], ["Milk", 1]],["Broccoli", 10], ["Corn", 7], ["Pea Bag", 1]]
myList.push(sweets);
console.log(myList);
//Result [["Eggs", 12], ["Milk", 1]],["Broccoli", 10], ["Corn", 7], ["Pea Bag", 1],["Chocolate Bar", 2]]

//Fucntions

//Infamous Hello world function "Javascript"
function functionName() {
    console.log("Hello World");
}

//invoke function by using its name with parentheses
functionName();

//Passing values to Functions with Arguments

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5);
//Result 5

//Global Scope and Functions
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oppsGlobal;
    }
    console.log(output);
}

//Local Scope and Functions
function myLocalScope() {
    'use strict';
    var myVar = "Test"; // Variable defined local to function
    console.log(myVar);
}
myLocalScope();
//Result Test

//console.log(myVar); Result Error Uncaught ReferenceError: myVar is not defined

//Global vs. Local Scope in Functions
var someVar = "Hat";
function myFun() {
    var someVar = "Head"; // Local Variable will take precedence over the global variable
    return someVar;
}

myFun();
//Result Head

//Return a Value from a Function with return

function plusThree(num) {
    return num + 3;
}

var answer = plusThree(5);
//Result 8

//Understanding Undefined Value returned from a Function
var sum = 0;
function addFive() {
    sum = sum + 5;
}

var returnedValue = addFive();
console.log(sum);
//Result 5

//Function Assignment with a returned Value
var proccessed = 0;

function proccessArg(num) {
    return (num + 3) / 5;
}

var proccessed = proccessArg(7);
//Result 2

//Function queue - an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

//Adds a item to the end of array and return the number removed from the beginning of array
function nextInLine(arr, item) {
    arr.push(item);
    return item = arr.shift();
}

var queueArray = [1, 2, 3, 4, 5];
var nextInQueue = nextInLine(queueArray, 6);
console.log(nextInQueue);
//Result 1
console.log(queueArray);
//Result [2,3,4,5,6]

//Boolean Values - Data Type - True or False (Light swith concept True = On(0), False = Off(1))

var myTrueBoolean = true;
var myFalseBoolean = false;

//Conditional Logic with If Statements

//Pseudocode

/* if(condition is true){
    statement is executed
}
*/

//Logical test for true with response
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

var sevenGreatorThanSix = trueOrFalse(7 > 6);
console.log(sevenGreatorThanSix);
//Result Yes, that was true

/*--------------------------------------

Next Step on freeCodeCamp is Comparison with the Equality Operator    

----------------------------------------*/

//Comparison with the Equality Operator

//Type Coercion

/* 1 == 1 // true
   1 == 2 // false
   1 == '1' // true
   1 == '3' // false
*/

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
//Result is "Not Equal"
//testEqual(12) Result is "Equal"

//Comparison with the Strict Equality Operator

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict("7");
//Result "Not Equal";
// testStrict(7); Result "Equal"

//More Examples

function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");
//Result "Equal"

//Comparison with the Inequality Operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal"
    }
    return "Equal";
}

testNotEqual(10);
//Result "Not Equal"

//Comparison with the Strict Inequality Operator

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);
//Result "Not Equal"

//Comparison with the Greater than Operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);
//Result "10 or Under"

//Comparison with the Greater Than or Equal to Operator

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);
//Result "10 or Over"

//Comparison with the less Operator

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);
//Result "Under 25"

//Comparison with the Less Than or Equal to Operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);
//Result "Smaller Than or Equal to 12"

/*--------------------------------------

Next Step on freeCodeCamp is Comparison with the logical And Operator    

----------------------------------------*/

//Comparison with the Logical And Operator

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(10);
//Result "No"

//Comparison with the Logical Or Operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);
//Result Outside

//Else Statements

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}

testElse(4);
//Result "5 or Smaller"

//Else If Statments

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10"
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);
//Result "Between 5 and 10"

//Logical Order in If Else Statements

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);
//Result Less than 10

//Chaining If Else Statements

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

testSize(7);
//Result "Small"

//Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes <= par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
}

golfScore(5, 4);
//Result "Birdie"

//Selecting from Many Option with Switch Statements

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

caseInSwitch(1);
//Result "alpha"

//Adding a Default Option in Switch Statements

function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;

        default:
            answer = "stuff";
            break;
    }
    return answer;
}

switchOfStuff(1);
//Result "stuff"

//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }
    return answer;
}

sequentialSizes(1);
//Result "Low"

/*--------------------------------------

Next Step on freeCodeCamp is Replacing If Else Chains with Switch

----------------------------------------*/

//Replacing If Else Chains with Switch

function chainToSwitch(val) {
    var answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
    }

    return answer;
}

chainToSwitch(7);
//Result "Ate Nine"

//Returning Boolean Values from Functions

function isLess(a, b) {
    return a < b;
}

isLess(10, 15);
//Result True

//Return Early Pattern for Functions

function abTest(a, b) {
    if (a < 0 || b < 0) {

        return;
    } else

        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
//Result should return a number

//Counting Cards

var count = 0;

function countingCards(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;

    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

countingCards(2); countingCards(7); countingCards('K'); countingCards('A');
//Result -1 Hold

//Build Javascript Objects

var myDog = {
    "name": "Pairie",
    "legs": 4,
    "tails": 1,
    "friends": ["cats", "dogs"]
};

console.log(myDog);
//Result {name: "Pairie", legs: 4, tails: 1, friends: Array(2)}

//Accessing Object Properties with Dot Notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
//Result hatValue = "ballcap"
var shirtValue = testObj.shirt;
//Result shirtValue = "jersey"

//Accessing Object Properties with Bracket Notation

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
//Result entreeValue = "hamburger"
var drinkValue = testObj["the drink"];
//Result drinkValue = "water"

//Accessing Object Properties with Variables

var someObj = {
    propName: "John"
};
function propPrefix(str) {
    var s = "prop";
    return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);
//Result player = "Montana"

//Updating Object Properties

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
console.log(myDog);
//Result myDog{"name": "Happy Coder","legs": 4,"tails": 1,"friends": ["freeCodeCamp Campers"]}

//Add New Properties to a JavaScript Object

myDog.bark = "woof";
console.log(myDog);
//Result myDog{"name": "Happy Coder","legs": 4,"tails": 1,"friends": ["freeCodeCamp Campers"], "bark": "woof"}

//Delete Properties from a JavaScript Object

delete myDog.tails;
console.log(myDog);
//Result myDog{"name": "Happy Coder","legs": 4,"friends": ["freeCodeCamp Campers"], "bark": "woof"}

//Using Objects for Lookups

//Reverse Alphabet lookup
var alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    4: "W",
    5: "V",
    6: "U",
    7: "T",
    8: "S",
    9: "R",
    10: "Q",
    11: "P",
    12: "O",
    13: "N",
    14: "M",
    15: "L",
    16: "K",
    17: "J",
    18: "I",
    19: "H",
    20: "G",
    21: "F",
    22: "E",
    23: "D",
    24: "C",
    25: "B",
    26: "A",

};

alpha[2]; //"Y"
alpha[24]; //"C"

var value = 2;
alpha[value]; //"Y"

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];


    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("charlie");
//Reuslt "Chicago"

//Testing Objects for Properties

var myObJ = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObJ.hasOwnProperty(checkProp)) {
        return myObJ[checkProp];
    } else {
        return "Not Found";
    }
}

checkObj("gift");
//Result "Pony"

//Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Pink Floyd",
        "title": "Wish You Were Here",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

//Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunck": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
//Result "maps"

//Accessing Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
//Result "pine"

//Record Collection
// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        collection[id][prop] = value;
    } else if (prop === "tracks" && value !== "") {
        if (collection[id].hasOwnProperty("tracks")) {
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = [];
            collection[id][prop].push(value);
        }
    } else if (value === "") {
        delete collection[id][prop];
    }

    return collection;
}

// Alter values below to test your code
var newRecords = updateRecords(5439, "artist", "ABBA");
// var newRecords = updateRecords(5439, "tracks", "Take a Chance on Me");
// var newRecords = updateRecords(2548, "artist", "");
// var newRecords = updateRecords(1245, "tracks", "Addicted to Love");
// newRecords = updateRecords(2468, "tracks", "Free");
// var newRecords = updateRecords(2548, "tracks", "");
// var newRecords = updateRecords(1245, "album", "Riptide");

//Test
console.log(newRecords);
//Result 5439{album: "ABBA Gold", artist: "ABBA"}

//Iterate with JavaScript While Loops

var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

//Iterate with JavaScript For Loops

var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);
//Result myArray[1,2,3,4,5]

//Iterate Odd Numbers with a For Loop

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);
//Result myArray[1,3,5,7,9]

//Count Backwards with a For Loop

var myArray = [];
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);
//Result myArray[9,7,5,3,1]

//Iterate through an Array with a For Loop

var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
    total += myArr[i];
}

//Result myArr[2,3,4,5,6] ( 2 + 3 + 4 + 5 + 6 ) total = 20;

//Nesting For Loops
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Iterate with JavaScript Do...While Loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++
} while (i < 10);
//Result [11]

//Profile Lookup

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        console.log(i);
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {

                return "No such property";
            }
        }
    }
    return "No such contact";
}


// Change these values to test your function
lookUpProfile("Akira", "likes");
//Return array

//Generate Random Fraction with JavaScript

function randomFraction() {

    return Math.random();
}
//Random Fraction 0 or between 0 and 1 

//Generate Random Whole numbers with JavaScript

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

//Generate Random Whole numbers within a range

