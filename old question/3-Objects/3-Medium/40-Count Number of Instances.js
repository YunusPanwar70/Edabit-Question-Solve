// Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.

// Examples
u1 = new User("johnsmith10")
User.userCount 

u2 = new User("marysue1989")
User.userCount 

u3 = new User("milan_rodrick")
User.userCount 

// ➞ 1
// ➞ 2
// ➞ 3

// Make sure that the usernames are accessible via the instance attribute username.

u1.username 
u2.username 
u3.username 
Notes

// ➞ "johnsmith10"
// ➞ "marysue1989"
// ➞ "milan_rodrick"

// Feel free to check out the resources provided in the Resources tab for some helpful information on JavaScript classes!