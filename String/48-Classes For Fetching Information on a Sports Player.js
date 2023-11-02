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
        return `${this.name} is ${this.height}`
    }

    getWeight() {
        return `${this.name} weight ${this.weight}`
    }
}

const p1 = new Player("David Jones", 25, 175, 75)

console.log(p1.getAge());
console.log(p1.getHeight());
console.log(p1.getWeight());

// ➞ "David Jones is age 25"
// ➞ "David Jones is 175cm"
// ➞ "David Jones weighs 75kg"