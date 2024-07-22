function filterStateNames(arr,type) {
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
      if(type === "abb" && arr[i].length <= 2){
        res.push(arr[i])
      }else if (type === "full" && arr[i].length > 2){
        res.push(arr[i])
      }
    }
    return res
}
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"));
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"));
// ➞ ["CA", "NY"]
// ➞ ["Arizona", "Nevada"]
// ➞ ["MT", "NJ", "TX", "ID", "IL"]
// ➞ []