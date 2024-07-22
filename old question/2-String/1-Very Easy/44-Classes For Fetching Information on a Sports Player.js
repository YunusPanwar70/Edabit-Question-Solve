// Create a class that takes the following four arguments for a particular football player:
// 
// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"
// Examples
// p1 = new Player("David Jones", 25, 175, 75)
class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getAge() {
        return `${this.name} is age ${this.age}`
    }
    getHeight() {
        return `${this.name} is ${this.height}cm`
    }
    getWeight() {
        return `${this.name} is ${this.weight}kg`
    }
}
const p1 = new Player('David Jones', 25, 175, 75)
console.log(p1.getAge());
console.log(p1.getHeight());
console.log(p1.getWeight());

// ➞ "David Jones is age 25"
// ➞ "David Jones is 175cm"
// ➞ "David Jones weighs 75kg"