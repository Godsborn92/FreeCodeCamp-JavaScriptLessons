/*----------------------------------------------------

Introduction to Basic Algorithm Scripting Challenges

------------------------------------------------------*/

/*A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.

To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.

In this section we will learn to solve basic algorithm problems using JavaScript. This will help you improve your problem solving skills and prepare you to later solve more complex problems.
*/

//Basic Algorithm Scripting: Convert Celsius to Fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

convertToF(30); //Result 86

//Basic Algorithm Scripting: Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");
//"olleh"

//Basic Algorithm Scripting: Factorialize a Number

function factorialize(num) {
    let factor = 1;
    for (factor; num >= 1; num--) {
        factor = num * factor;
    }
    return factor;
}

factorialize(5);
//Result 120

function findLongestWordLength(str) {
    let arr = [];
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i].length);
    }
    str = Math.max(...arr);
    return str;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
//Result 6

//Basic Algorithm Scripting: Return Largest Numbers in Arrays

function largestOfFour(arr) {
    // You can do this!
    let largestNuminArray = [];
    for (let i = 0; i < arr.length; i++) {
        let largerNum = Math.max(...arr[i]);
        console.log(largerNum);
        largestNuminArray.push(largerNum);
    }
    return largestNuminArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Result [5, 27 , 39, 1001]

//Basic Algorithm Scripting: Confirm the Ending

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // if (target.length !== 1) {
    return str.includes(target, str.length - target.length);
    //  }
    // return (str.match(/\w$/ig)[0] === target) ? true : false;
}
confirmEnding("Bastian", "n");
//Result true

//Basic Algorithm Scripting: Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
    // repeat after me
    let repeat = num;
    let newStr = "";
    if (num > 0) {
        while (repeat >= 1) {
            console.log(repeat);
            repeat--
            newStr += str;
        }
    }
    return newStr;
}

repeatStringNumTimes("abc", 3);
//Result abcabcabc

//Basic Algorithm Scripting: Truncate a String

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        str = str.slice(0, -(str.length - num)) + "...";
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
//Result "A-tisket..."

//Basic Algorithm Scripting: Finders Keepers

function findElement(arr, func) {
    let num = 0;
    for (num; num < arr.length; num++) {
        if (func(arr[num]) === true) {
            return num = arr[num];
        }

    }
    console.log(num);
    (num === arr.length) ? num = undefined : num;
    return num;
}

findElement([1, 1, 3, 4], num => num % 2 === 0);
//Result 4

//Basic Algorithm Scripting: Boo who

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return (bool === true || bool === false) ? true : false;
}

booWho(null);
//Result false

//Basic Algorithm Scritpting: Title Case a Sentence

