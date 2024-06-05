// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

function reverseCase(str) {
    return str.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));
console.log(reverseCase("sPoNtAnEoUs"));
// ➞ "hAPPY bIRTHDAY"
// ➞ "many thanks"
// ➞ "SpOnTaNeOuS"