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

function titleCase(str) {
    let regex = /(^|\s)\S/g;
    str = str.toLowerCase();
    console.log(str.match(regex));
    str = str.replace(regex, (firstLetter) => firstLetter.toUpperCase());
    return str;
}

titleCase("i'm a little tea pot");
//Result I'm A Little Tea Pot

//Basic Algorithm Scripting: Slice and Splice

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let sliced = arr1.slice(); //make a copy of arr1
    let spliced = arr2.slice(); // make a copy of arr2
    spliced.splice(n, 0, ...sliced);
    return spliced;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//Result [4,1,2,3,5,6]

//Basic Algorithm Scripting: Falsy Bouncer

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let newArr = arr.filter(arrValue => (arrValue === false) ? false : (arrValue === 0) ? false : (arrValue === null) ? false : (Number.isNaN(arrValue) !== false) ? false : (arrValue === undefined) ? false : (arrValue === "") ? false : true);
    console.log(newArr);
    return newArr;
}

bouncer([7, "ate", "", false, 9]);
//Result [7, "ate", 9]

//Basic Algorithm Scripting: Where do I Belong

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let comparisonNum = 0;
    let newIndex = arr.sort((a, b) => a > b).findIndex(value => (value >= num) ? comparisonNum = value : comparisonNum);
    (comparisonNum > num) ? arr.splice(newIndex, 0, num) : undefined;
    console.log(comparisonNum);
    console.log(newIndex);
    console.log(arr);

    return num = newIndex;
}

getIndexToIns([40, 60, 70], 50);
//This my attempt at solving the problem mind the spaghetti code. I wanted to also to console log the changed arr with the added number in its correct index

//This was more so the solution I was looking for ---From freeCodeCamp

function getIndexToIns(arr, num) {
    // sort and find right index
    var index = arr.sort((curr, next) => curr > next)
        .findIndex((currNum) => num <= currNum);
    // Returns proper answer
    return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500); // This Solution from freeCodeCamp however also suffered the same errors from the running tests 
//Result 2

//Final Solution for Where do I belong (kept it simple)
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num)
            return a;
    }

    return arr.length;
}
getIndexToIns([40, 60, 70], 50);
//Result 1

//Basic Algorithm Scripting: Mutations
