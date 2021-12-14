console.log("I'm ready!");

// Iteration 1: Names and Input
// 1.1
const hacker1 = "Tuca";
// 1.1
console.log(`The driver's name is ${hacker1}`);
// 1.3
const hacker2 = "Bertie";
// 1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
const space = '';
for (const character of hacker1) {
  space += character.toUpperCase() + ' ';
}
space = space.trim();
console.log(space);
// 3.2
const newNavString = hacker2.split("").reverse().join("");
console.log(newNavString);
// 3.3
