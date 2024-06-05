// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.

class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.fullname = `${first} ${last}`;
        this.email = `${first.toLowerCase()}.${last.toLowerCase()}@company.com`;
    }
}
const emp1 = new Employee("John", "Smith");
console.log(emp1.fullname); // ➞ "John Smith"
console.log(emp1.email);    // ➞ "john.smith@company.com"

const emp2 = new Employee("Mary", "Sue");
console.log(emp2.fullname); // ➞ "Mary Sue"
console.log(emp2.email);    // ➞ "mary.sue@company.com"

const emp3 = new Employee("Antony", "Walker");
console.log(emp3.fullname); // ➞ "Antony Walker"
console.log(emp3.email);    // ➞ "antony.walker

// emp1.fullname ➞ "John Smith"
// emp2.email ➞ "mary.sue@company.com"
// emp3.firstname ➞ "Antony"