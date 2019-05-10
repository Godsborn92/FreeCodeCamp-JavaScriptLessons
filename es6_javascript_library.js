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
