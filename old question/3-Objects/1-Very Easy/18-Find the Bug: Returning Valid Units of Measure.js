// There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.

// The return value should be a Boolean.

function hasValidUnitOfMeasure(product = {}) {
    const { unitOfMeasure, comment } = product
    return (comment || unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
}
console.log(hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" }));
console.log(hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" }));
console.log(hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false }));
console.log(hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" }));
// ➞ true
// ➞ false
// ➞ false
// ➞ false