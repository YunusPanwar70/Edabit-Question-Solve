// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
// Write a function that takes in a name and returns a name tag, that should read:

// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:

// "Hi! I'm a guest."

function greeting(name) {
  if (GUEST_LIST.hasOwnProperty(name)) {
    return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
  } else {
    return "Hi! I'm a guest."
  }
}
console.log(greeting("Randy"));
console.log(greeting("Sam"));
console.log(greeting("Monti"));

// ➞ "Hi! I'm Randy, and I'm from Germany."
// ➞ "Hi! I'm Sam, and I'm from Argentina."
// ➞ "Hi! I'm a guest."