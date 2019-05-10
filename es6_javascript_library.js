/*--------------------------------------

Introduction to the ES6 Challenges

----------------------------------------*/

//ES6: Explore Difference Between the var and let Keywords
let catName;
let quote;
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();
//Undefined

//ES6: Compare Scopes of the var and let Keywords
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
//Result function scope

//ES6:Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    "use strict";

    // change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // change code above this line

}
printManyTimes("freeCodeCamp");

//freeCodeCamp is cool!

//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    // change code below this line

    // s = [2, 5, 7]; <- this is invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    // change code above this line
}
editInPlace();
// s = [2,5,7]

//Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line

    Object.freeze(MATH_CONSTANTS);
    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Function will throw type error but PI = 3.14 with Object.freeze

//ES6:Use Arrow Functions to Write Concise Anonymous Functions
//var magic = function() {
//    "use strict";
//    return new Date();
//  }; -- Rewrite with arrow function

const magic = () => {
    "use strict";
    return new Date();
};

//or

const magic = () => new Date();

//ES6:Write Arrow Functions with Parameters

//var myConcat = function(arr1, arr2) {
//    "use strict";
//    return arr1.concat(arr2);
//  }; --Rewrite with arrow function

const myConcat = (arr1, arr2) => arr1.concat(arr2);
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
//1,2,3,4,5

//ES6:Write Higher Order Arrow Functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    // change code below this line
    const squaredIntegers = arr.filter(x => x === Math.floor(x) && x > 0).map(x => x * x);
    // change code above this line
    return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
//Result [16,1764,36]

//ES6:Set Default Parameters for your Functions

const increment = (function () {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

//ES6:Use the Rest Operator with Function Parameters
const sum = (function () {
    "use strict";
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6

//ES6:Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    "use strict";
    arr2 = [...arr1]; // change this line
})();
console.log(arr2);
//['JAN', 'FEB', 'MAR', 'APR', 'MAY']

//ES6:Use Destructuring Assignment to Assign Variable from Objects
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

//ES6:Use Destructuring Assignment to Assign Variable from Nested Objects

