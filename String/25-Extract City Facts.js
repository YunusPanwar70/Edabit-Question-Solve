function cityFacts(str) {
    const { name, population, continent } = str;
    return `${name} has a population of ${population} and is situated in ${continent}`
}

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
}));

console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
}));



//   ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//   ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"