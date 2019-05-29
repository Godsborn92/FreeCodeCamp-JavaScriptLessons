/*----------------------------------------------------

Introduction to the Basic Data Structure Challenges

------------------------------------------------------*/

/*Data can be stored and accessed in many different ways, both in Javascript and other languages. This section will teach you how to manipulate arrays, as well as access and copy the information within them. It will also teach you how to manipulate and access the data within Javascript objects, using both dot and bracket notation. When you're done with this section, you should understand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose. --freeCodeCamp */

//Basic Data Structures: Use an Array to Store a Collection of Data

let yourArray = ["This is my string value", 1, true, undefined, 0]; //--Define your own array with 5 items
console.log(yourArray.length);
//Result 5

//Basic Data Structures: Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
// change code below this line
myArray[1] = "not b anymore";
//change code above this line
console.log(myArray);
//Result ["a", "not b anymore", "c", "d"]

//Basic Data Structures: Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    // change code below this line
    arr.push(7, 'VIII', 9);
    arr.unshift('I', 2, 'three');
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
//Result ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9]

//Basic Data Structures: Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
//Result ['challenge', 'complete']

//Basic Data Structures: Remove Items Using splice()

function sumOfTen(arr) {
    // change code below this line
    arr.splice(1, 2); //-- Take out [5,1] in array so .reduce adds array to 10
    // change code above this line
    return arr.reduce((a, b) => a + b);  //---MDN Reduce Method 
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
//Result 10

//Basic Data Structures: Add Item Using splice()

function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // change code above this line
    return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
//Result ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']

//Basic Data Structures: Copy Array Items Using slice()

function forecast(arr) {
    // change code below this line
    arr = arr.slice(2, 4); // copy ['warm','sunny'] from exsisting array to new array
    return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//Result ['warm', 'sunny']

//Basic Data Structures: Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // change code below this line
        newArr.push(arr.slice([...arr])); //Using two method calls with a spread operator
        // change code above this line
        num--;
    }
    return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
//Result [true, false, true, true , false, true]

//Basic Data Structures: Combine Arrays with the Spread Operator

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
    return sentence;
}

// do not change code below this line
console.log(spreadOut());
//Result ['learning','to', 'code', 'is', 'fun']

//Basic Data Structures: Check For the Presence of an Element With indexOf()

function quickCheck(arr, elem) {
    // change code below this line
    return (arr.indexOf(elem) != -1) ? true : false; //Use of Ternary Operators
    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
//Result false

//Basic Data Structures: Iterate Through All an Array's Items Using for Loops

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        };
    };

    // change code above this line
    return newArr;
};

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Basic Data Structures: Create complex multi-dimensional arrays

let myNestedArray = ['level 1',
    ['level 2'],
    [
        ['level 3'], ['deep']
    ],
    [
        [
            ['level 4'], ['deeper']
        ],
        [
            [
                ['level 5'], ['deepest']
            ]
        ]
    ]
];

//Basic Data Structures:Add Key-Value Pairs to Javascript Objects

