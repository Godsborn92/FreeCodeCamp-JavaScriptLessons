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

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// change code above this line

console.log(foods);
/*Result foods{ apples: 25,
                oranges: 32,
                plums: 28,
                bananas: 13,
                grapes: 35,
                strawberries: 27
            }*/

//Basic Data Structures:Modify an Object Nested Within an Object

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);
/*Result userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 45
    }
}*/

//Basic Data Structures: Access Property Names with Bracket Notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
    // change code below this line
    return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

//Basic Data Structures: Use the delete Keyword to Remove Object Properties

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// change code below this line
delete foods.plums;
delete foods.strawberries;
delete foods.oranges;
// change code above this line

console.log(foods);
/*Result foods = {
    apples: 25,
    bananas: 13,
    grapes: 35
}*/

//Basic Data Structures: Check if an Object has a Property

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // change code below this line
    return (obj.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')) ? true : false;
    // change code above this line
}

console.log(isEveryoneHere(users));
//Result true

//Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {
    // change code below this line
    let userCount = 0;
    for (let user in obj) {
        //console.log(user);
        if (obj[user].online === true) {
            userCount++;
        }
    }
    return userCount;
    // change code above this line
}

console.log(countOnline(users));
//Result 2

//Basic Data Structures: Generate an Array of All Object Keys with Object.keys()

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(obj);
    // change code above this line
}

console.log(getArrayOfUsers(users));
// ['Alan','Jeff','Sarah','Ryan']

//Basic Data Structures: Modify an Array Stored in an Object

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // change code below this line  
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // change code above this line
}

console.log(addFriend(user, 'Pete'));
//Result ['Sam','Kira','Tomo','Pete']

/*

----------- End of Basic Data Structures Section -----------

*/