// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
function societyName(arr) {
return names.map(name => name.charAt(0)).sort().join('');
}
console.log(societyName(["Adam", "Sarah", "Malcolm"]));
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));
// ➞ "AMS"
// ➞ "CHLN"
// ➞ "CJMPRR"
