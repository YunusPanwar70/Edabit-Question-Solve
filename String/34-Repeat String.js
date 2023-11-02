function repeatString(txt, n) {

    if (typeof txt !== 'string') {
        return "Not A String !!";
    }

    return txt.repeat(n);
}

console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));
console.log(repeatString(1990, 7));



// ➞ "MubashirMubashir"
// ➞ "MattMattMatt"
// ➞ "Not A String !!"