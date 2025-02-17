// In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.

// To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:

// weight on planetA / gravitational force of planetA * gravitational force of planetB

// Planet	m/s²
// Mercury	3.7
// Venus	8.87
// Earth	9.81
// Mars	3.711
// Jupiter	24.79
// Saturn	10.44
// Uranus	8.69
// Neptune	11.15
// Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.

function spaceWeights(planetA, weight, planetB) {

}
console.log(spaceWeights("Earth", 1, "Mars"));
console.log(spaceWeights("Earth", 1, "Jupiter"));
console.log(spaceWeights("Earth", 1, "Neptune"));
// ➞ 0.38
// ➞ 2.53
// ➞ 1.14

// Notes
// N/A