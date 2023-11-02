function countDs(str) {

    const count = str.toLowerCase().split('d').length - 1;
    return count;


    // let count = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i].toLowerCase() === "d") {
    //         count++;
    //     }
    // }
    // return count;
}

console.log(countDs("My friend Dylan got distracted in school."));
console.log(countDs("Debris was scattered all over the yard."));
console.log(countDs("The rodents hibernated in their den."));



// ➞ 4
// ➞ 3
//  ➞ 3