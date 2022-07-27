// Is "else" required?
// importance: 4
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
// Will the function work differently if else is removed?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }
// Is there any difference in the behavior of these two variants?

// No, in both examples it checks for a false value and returns the same result.


// Rewrite the function using '?' or '||'
// importance: 4
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

function checkAge(age) {
  age = age > 18 || confirm('Did your parents allow you?')
}

// Make two variants of checkAge:

// Using a question mark operator ?
function checkAge2(age){
  (age > 18) ? true : confirm('Did your parents allow you?')
}
// Using OR ||
function checkAge3(age){
  (age > 18) || confirm('Did your parents allow you?')
}

// Function min(a, b)
// importance: 1
// Write a function min(a,b) which returns the least of two numbers a and b.

function getMinNum (a, b) {
  return (a > b) ? b : a
}

getMinNum (2, 5) == 2 //true
getMinNum (3, -1) == -1 //true
getMinNum (1, 1) == 1 // true

// Function pow(x,n)
// importance: 4
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function calcPowerN (x, n) {
  
}