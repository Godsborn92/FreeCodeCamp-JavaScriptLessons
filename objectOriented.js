/*----------------------------------------------------

Introduction to Object Oriented Programming Challenges

------------------------------------------------------*/

/*
At its core, software development solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.

As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.

The object structure makes it flexible within a program. Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code.

Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. This section covers object oriented programming principles in JavaScript.
*/

//Object Oriented Programming: Create a Basic JavaScript Object
let dog = {
    name: "charlie",
    numLegs: 4
};

//Object Oriented Programming: Use Dot Notation to Access the Properties of an Object
console.log(dog.name);
// charlie
console.log(dog.numLegs);
// 4

//Object Oriented Programming: Create a Method on an Object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return `This dog has ${dog.numLegs} legs.`; }
};

dog.sayLegs();
//This dog has 4 legs.

//Object Oriented Programming: Make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();
//This dog has 4 legs.

//Object Oriented Programming: Define a Constructor Function
function Dog() {
    this.name = "charlie";
    this.color = "brown";
    this.numLegs = 4;
}

//Object Oriented Programming: Use a Constructor to Create Objects
let hound = new Dog();

//Object Oriented Programming: Extend Constructors to Receive Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Ralph", "Red");
console.log(terrier);
//Dog{name: "Ralph", color: "Red", numLegs: 4}

//Object Oriented Programming: Verify an Object's Constructor with instanceof
/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(6);
myHouse instanceof House;
//True

//Object Oriented Programming: Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);
//["name","numLegs"]

//Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 2;

// Add your code above this line
let beagle = new Dog("Snoopy");

//Object Oriented Programming: Iterate Over all Properties
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for (let props in beagle) {
    if (beagle.hasOwnProperty(props)) {
        ownProps.push(props);
    } else {
        prototypeProps.push(props);
    }
}
console.log(ownProps);
//["name"]
console.log(prototypeProps);
//["numLegs"]

//Object Oriented Programming: Understand the Constructor Property
function Dog(name) {
    this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

//Object Oriented Programming: Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: function () { console.log("munch munch munch"); },
    describe: function () { console.log(`My name is ${this.name}.`); }
};

//Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name;
}

// Modify the code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

//Object Oriented Programming: Understand Where an Object's Prototype Comes From
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);
//True

//Object Oriented Programming: Understand the Prototype Chain
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
//true

//Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself / Principle in programming called Don't Repeat Yourself (DRY)
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

//Object Oriented Programming: Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 

//Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

//Object Oriented Programming: Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

//Object Oriented Programming: Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () { console.log("Woof!"); };

// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

//Object Oriented Programming: Override Inherited Methods
function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function () { return "Alas, this is a flightless bird."; };


// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());
//Alas, this is a flightless bird.

//Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Add your code below this line
let glideMixin = function (obj) {
    obj.glide = function () { console.log("This has the ability to glide."); };
}
glideMixin(bird);
glideMixin(boat);

//Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
    this.getWeight = function () { return weight; };
}
let myBird = new Bird();
console.log(myBird.getWeight());

//Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
})();//IIFE 

//Object Oriented Programming: Use an IIFE to Create a Module
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

/*----------------------------------------------------

End of Introduction to Object Oriented Programming Challenges

------------------------------------------------------*/