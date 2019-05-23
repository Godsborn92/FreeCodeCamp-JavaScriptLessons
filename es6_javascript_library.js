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
//['JAN', 'FEB', 'MAR', 'APR', 'MAY'] --Comma Seperated List(Cannot choose elements to assign to variables)

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

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const { tomorrow: { max: maxOfTomorrow } } = forecast; // change this line
    // change code above this line
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

//ES6:Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
(() => {
    "use strict";
    [b, a] = [a, b]; //No need of const [b,a] as it will keep the effect of assignment local. const [b,a] = [a,b] will result in the value of a,b as undefined(simple assignment rule left to right).
})();
console.log(a); // should be 6
console.log(b); // should be 8

//ES6:Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [a, b, ...arr] = list; // change this
    // change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

//ES6:Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    "use strict"; // do not change this line

    // change code below this line
    return function half({ max, min }) {
        // use function argument destructuring
        return (stats.max + stats.min) / 2.0;
    };
    // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

//ES6:Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = [`<li class="text-warning">${result.failure[0]}</li>`,
    `<li class="text-warning">${result.failure[1]}</li>`,
    `<li class="text-warning">${result.failure[2]}</li>`];
    // change code above this line

    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

//ES6:Write Concise Object Literal Declarations Using Simple Fields

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
        name,
        age,
        gender
    };
    // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//ES6:Write Concise Declarative Functions with ES6

// change code below this line
const bicycle = {
    gear: 2,
    //setGear: function (newGear) {
    //  "use strict";
    //this.gear = newGear; -- Refactor for shorthand syntax
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//ES6:Use class Syntax to Define a Constructor Function
