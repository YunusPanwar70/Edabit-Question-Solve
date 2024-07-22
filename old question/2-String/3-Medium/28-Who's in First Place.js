// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

function firstPlace(road) {
    let firstCar = null;
    for (let i = 0; i < road.length; i++) {
        if (road[i] !== '=') {
            firstCar = road[i]
        }
    }
    return firstCar
}
console.log(firstPlace("====b===O===e===U=A=="));
console.log(firstPlace("e==B=Fe"));
console.log(firstPlace("proeNeoOJGnfl"));
// ➞ "A"
// ➞ "e"
// ➞ "l"

// Notes
// Return "No car available" if there is no car on the road and "No road available" if there is no road.