// Map ek JS method hai jo ek Array ke har Element par ek function apply kar ke new Array banata hai jis me function ki return value hoti hai

function multiplyValue(num) {
    return num.map(elem => elem * 2)
}
console.log(multiplyValue([1, 2, 3, 4, 5]));

function fruitsName(fruit) {
    return fruit.map(upper => upper.toUpperCase())
}
console.log(fruitsName(['apple', 'banana', 'cherry']));

function smallFruit(fruits) {
    return fruits.map((str) => str.toLowerCase())
}
console.log(smallFruit(['APPLE', 'BANANA', 'CHERRY']));