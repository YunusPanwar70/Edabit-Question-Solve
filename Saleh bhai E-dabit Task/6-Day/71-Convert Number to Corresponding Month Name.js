function monthName(num) {
    switch (num) {
        case 1:
            return 'January'
        case 2:
            return 'February'
        case 3:
            return 'March'
        case 4:
            return 'April'
        case 5:
            return 'May'
        case 6:
            return 'June'
        case 7:
            return 'July'
        case 8:
            return 'August'
        case 9:
            return 'September'
        case 10:
            return 'October'
        case 11:
            return 'Novmber'
        case 12:
            return 'December'
        default:
            return 'Enter valid month'
    }
}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));
// ➞ "March"
// ➞ "December"
// ➞ "June"/