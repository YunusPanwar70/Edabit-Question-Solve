// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.

function pingPong(arr, char) {

}
console.log(pingPong(["Ping!"], true));
console.log(pingPong(["Ping!", "Ping!"], false));
console.log(pingPong(["Ping!", "Ping!", "Ping!"], true));
// ➞ ["Ping!", "Pong!"]
// ➞ ["Ping!", "Pong!", "Ping!"]
// ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]

// Notes
// You will always return the ball (i.e. the Pongs are yours).
// Player 1 serves the ball and makes Ping!.
// Return an array of strings.