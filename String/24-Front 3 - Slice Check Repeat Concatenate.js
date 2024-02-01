function frontThree(str) {
    const name = str.slice(0, 3)
    return name.repeat(3)
}

console.log(frontThree("Python"));
console.log(frontThree("Cucumber"));
console.log(frontThree("bioshock"));



// ➞ "PytPytPyt"
// ➞ "CucCucCuc"
// ➞ "biobiobio"