function stutter(str) {
    const a = str.slice(0, 2);
    return `${a}... ${a}... ${str}`
}

console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("outstanding"));


// ➞ "in... in... incredible?"
// ➞ "en... en... enthusiastic?"
// ➞ "ou... ou... outstanding?"