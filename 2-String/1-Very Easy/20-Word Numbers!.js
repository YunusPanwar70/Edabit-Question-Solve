// Create a function that returns a number, based on the string provided.Here is a list of all digits:

function word(str) {
    switch (str) {
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        case 'ten':
            return 0;
        default:
            'Enter a default value';
    }
}
console.log(word("one"));
console.log(word("two"));
console.log(word("nine"));
// ➞ 1
// ➞ 2 
// ➞ 9