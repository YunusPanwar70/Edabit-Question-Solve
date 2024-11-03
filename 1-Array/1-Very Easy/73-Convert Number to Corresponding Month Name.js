// Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

function monthName(n) {
    switch (n) {
        case 1: return 'January';
        case 2: return 'February';
        case 3: return 'March';
        case 4: return 'April';
        case 5: return 'May';
        case 6: return 'June';
        case 7: return 'July';
        case 8: return 'August';
        case 9: return 'September';
        case 10: return 'Octomber';
        case 11: return 'November';
        case 12: return 'December';
        default: return 'Enter Valid Number';
    }
}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));
// ➞ "March"
// ➞ "December"
// ➞ "June"

// Notes
// You can expect only integers ranging from 1 to 12 as test input.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.