function convert(hours, minute) {
    let secoundInAhour = 3600;
    let secoundInAminutes = 60;

    let total = hours * secoundInAhour + minute * secoundInAminutes

    return total
}


console.log(convert(1, 3));
console.log(convert(2, 0));
console.log(convert(0, 0));


// ➞ 3780
// ➞ 7200
// ➞ 0