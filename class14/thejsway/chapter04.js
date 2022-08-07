// Coding time!
// Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.

// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
let carousel = 1;
while (carousel <= 10){
  console.log(carousel);
  carousel++
}

for (carousel = 1; carousel <= 10; carousel++){
  console.log(carousel);
}
// When it's done, improve it so that the number of turns is given by the user.

let turns = prompt();

for (carousel = 1; carousel <= turns; carousel++ ){
  console.log(carousel);
}

let carousel1 = 1 ;
let turns1 = prompt();

while (carousel <= turns) {
  console.log(carousel);
  carousel++
}


// Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }
// This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
// This program must show exactly 10 numbers including the first one, not 11 numbers!

for (let i = 1; i <= 10; i++){
  i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`)
}

let num = prompt()

for (let i = num; i <= 10; i++){
  i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`)
}


// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

let num1 = 101

while (num1 > 100) {
  num1 = prompt("Enter a number less than or equal to 100")
}

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let num2 = 101;

while (num2 > 100 || num2 < 50) {
  num2 = prompt("Enter a number less than 100, but greater than 50")
}

// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

let num3 = prompt()

for (i = num3; i > 1; i--) {
  let divisable = num3 / i
  let remainder = num3 % i
  if (remainder === 0 && i !== num3 && i !== divisable && i > divisable) {
    console.log(`${i} * ${divisable} = ${num3}`)
  }
}

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
let num4 = prompt()

while (num4 > 9 || num4 < 2) {
  num4 = prompt()
  for (i = num4; i > 1; i--) {
    let divisable = num4 / i
    let remainder = num4 % i
    if (remainder === 0 && i !== num4 && i !== divisable && i > divisable) {
      console.log(`${i} * ${divisable} = ${num4}`)
    }
  } 
}

// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let text = prompt()

while (text != "no" || text != "yes"){
  text = prompt("Neither yes, nor no")
}

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
for (i = 1; i < 100; i++) {
  // When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    // It shows "Buzz" instead if the number is divisible by 5 and not by 3.
    console.log("Buzz")
  } else if (i % 3 === 0) {
    // It shows "Fizz" instead if the number is divisible by 3.
    console.log("Fizz")
  } else {
    console.log(i);
  }
}

