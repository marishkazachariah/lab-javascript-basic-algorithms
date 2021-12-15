console.log("I'm ready!");
// 1.1
const hacker1 = "Tuca";
// 1.1
console.log(`The driver's name is ${hacker1}`);
// 1.3
const hacker2 = "Bertie";
// 1.4
console.log(`The navigator's name is ${hacker2}`);
// 2.1
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// 3.1
var space = '';
for (const character of hacker1) {
  space += character.toUpperCase() + ' ';
}
// 3.2
const newNavString = hacker2.split("").reverse().join("");
console.log(newNavString);
// 3.3
const lexOrder = hacker1.localeCompare(hacker2);
// console.log(lexOrder);
if (lexOrder === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (lexOrder === -1) {
  console.log("The driver's name goes first")
} else {
  console.log("What?! You both have the same name?");
}
// Bonus 1
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra commodo nunc id tempus. Praesent ornare mollis nisl, vitae pulvinar dolor sodales at. In odio dui, ultricies ultricies fringilla eu, aliquam nec ipsum. Donec ut blandit risus, a hendrerit sem. In sed varius urna, eget egestas elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pharetra lacinia mi sit amet dignissim. Suspendisse sit amet varius turpis. Curabitur sed dapibus felis. Curabitur ac leo pulvinar mauris vestibulum placerat. Aliquam pretium odio ut magna volutpat volutpat. Proin aliquam enim a neque pretium rutrum. Pellentesque rhoncus tincidunt pretium. Morbi ut tellus eu lorem blandit efficitur ut vitae tellus. Praesent finibus massa sem, ac interdum urna placerat pellentesque. Etiam ac molestie elit. Quisque laoreet dictum ipsum, at tempus lectus scelerisque quis. Nam ante ante, condimentum et ipsum in, sodales ultricies leo. Quisque ac nunc a dolor rutrum interdum sed quis libero. Etiam vitae mauris vitae lorem luctus placerat nec eget diam. Etiam lobortis sodales mauris. Donec rutrum bibendum justo, vel molestie massa tempor vitae. Duis diam ligula, sodales vitae hendrerit et, elementum in quam. Sed consectetur lacus libero, at suscipit nulla egestas a. Phasellus id ante orci. Nunc eu mi ipsum. Quisque posuere fermentum vestibulum. Nunc et ultrices dui. Etiam porttitor felis in sollicitudin rhoncus. Etiam id iaculis nisi, in facilisis mi. Praesent vehicula blandit sem, sagittis fermentum sapien posuere a. Maecenas fermentum ultrices lacus nec dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sollicitudin ultrices scelerisque. Morbi tempus tellus quis dapibus vehicula.`
// count the number of words in the string.
// console.log(lorem.length);
let wordCount = 1;
for (let i = 0; i < lorem.length - 1; i++) {
    if (lorem[i] === ' ') {
        wordCount++;
    }
}
console.log(wordCount);
// count the number of times the Latin word "et" appears.
function count(str, find) {
    return (str.split(find)).length - 1;
}
count(lorem, "et"); 
// Bonus 2
const phraseToCheck = "taco cat";
function isPalindrome(str) {
    // remove whitespace
    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    // reverse the word and then check if it is the same as the original
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    if (reversed === str) {
        console.log('it is a palindrome');
    } else {
        console.log('not a palindrome');
    }
}
isPalindrome(phraseToCheck)
