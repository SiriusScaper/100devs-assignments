// Example of a function declaration

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)


// Same as above, but uses a Function Expression
let sayHi = function() { // (1) create
  alert( "Hello" );
};

let func = sayHi;