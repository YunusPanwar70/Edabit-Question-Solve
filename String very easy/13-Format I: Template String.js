// One

const a = "John";
const b = "Joe";
const c = "Jack";
const template = `Their names were: ${a}, ${b} and ${c} `;

console.log(template);

// ➞ "Their names were:  John,  Joe  and  Jack.";

// Two

const name = "John";

const hello = `hello, my name is ${name}.`;

console.log(hello);

// ➞ "hello, my name is John.";

// Three

const age = 12;

const gen = `Hello, you are ${age < 18 ? 'young' : 'old'}.`;

console.log(gen);

// ➞ "Hello, you are young."