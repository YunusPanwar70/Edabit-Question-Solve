// Write a function that returns the number of users in a chatroom based on the following rules:
// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n > 2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:
// "user1, user2 and 3 more online"

function chatroomStatus(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == []) {
            return 'no one online'
        }
        else {
            return arr[i] + ' online'
        }
    }
};
console.log(chatroomStatus([]));
console.log(chatroomStatus(["paRIE_to"]));
console.log(chatroomStatus(["s234f", "mailbox2"]));
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));
// ➞ "no one online"
// ➞ "paRIE_to online"
// ➞ "s234f and mailbox2 online"
// ➞ "pap_ier44, townieBOY and 4 more online"