/*--------------------------------------

Introduction to the Debugging Challenges

----------------------------------------*/
/*Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

You can find Developer tools in your Chrome's menu or Web Console in FireFox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

Here's an example to print 'Hello world!' to the console:

console.log('Hello world!'); -- From FreeCodeCamp
*/



//Debugging:Use the JavaScript Console to Check the Value of a Variable

let a = 5;
let b = 1;
a++;
console.log(a);
//Result 6


let sumAB = a + b;
console.log(sumAB);
//Result 7

//Debugging:Understanding the Differences between the FreeCodeCamp and Browser Console

// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable
console.log(outputTwo);
//Result "This will print to the browser console 2 times"
//       "This will print to the browser console 2 times"

let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once
console.clear();


// Use console.log() to print the outputOne variable
console.log(outputOne);
//Result "Try to get this to log only once to the browser console"

//Debugging:Use typeof to Check the Type of a Variable

let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line
console.log(typeof seven);
//Result number
console.log(typeof three);
//Result string

//Debugging:Catch Misspelled Variable and Function Names

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
//Result Net working capital is 2

//Debugging:Catch Unclosed Parentheses, Brackets, Braces and Quotes

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);
//Result Sum of array values is 6

//Debugging:Catch Mixed Usage of Single and Double Quotes

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
//Result <p>Click here to <a href="#Home">return home</a></p>

//Debugging:Catch Use of Assignment Operator Instead of Equality Operator

let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);
//Result Not equal

//Debugging:Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
console.log(result);
//Result 9

//Debugging:Catch Arguments Passed in the Wrong Order When Calling a Function

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
//Result 8

//Debugging:Catch Off By One Errors When Using Indexing

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    for (let i = 0; i < len; i++) {
        // Do not alter code below this line
        console.log(firstFive[i]);
    }
}

countToFive();
//Result 1,2,3,4,5

//Debugging:Use Caution When Reinitalizing Variable Inside a Loop

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = []; /* <-----  row has been declared inside the outer loop. 
        Now a new row will be initialised during each iteration of the outer loop allowing 
        for the desired matrix. --freeCodeCamp */
        //This was a hard one for me but luckliy freeCodeCamp was there to help
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
/*Result [  [0,0],
            [0,0],
            [0,0]
] */

//Debugging:Prevent Infinite Loops with a Valid Terminal Condition

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}

/*

----------- End of Debugging Section -----------

*/