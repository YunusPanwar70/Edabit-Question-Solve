// Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

// BasicPlan	StandardPlan	PremiumPlan
// ✓	✓	✓	canStream
// ✓	✓	✓	canDownload
// ✓	✓	✓	hasSD
// ✓	✓	hasHD
// ✓	hasUHD
// 1	2	4	numOfDevices
// $8.99	$12.99	$15.99	price

// BasicPlan.hasSD ➞ true
// PremiumPlan.hasSD ➞ true
// BasicPlan.hasUHD ➞ false
// BasicPlan.price ➞ '$8.99'
// PremiumPlan.numOfDevices ➞ 4


class BasicPlan {
    constructor() {
        this.canStream = true,
            this.canDownload = true,
            this.hasSD = true,
            this.hasHD = false,
            this.hasUHD = false,
            this.numOfDevices = 1,
            this.price = '$8.99'
    }
}

class StandardPlan {
    constructor() {
        this.canStream = true,
            this.canDownload = true,
            this.hasSD = true,
            this.hasHD = true,
            this.hasUHD = false,
            this.numOfDevices = 2,
            this.price = '$12.99'
    }
}

class PremiumPlan {
    constructor() {
        this.canStream = true,
            this.canDownload = true,
            this.hasSD = true,
            this.hasHD = true,
            this.hasUHD = true,
            this.numOfDevices = 4,
            this.price = '$15.99'
    }
}

let obj1 = new BasicPlan;
let obj2 = new StandardPlan;
let obj3 = new PremiumPlan;

console.log(obj1.hasSD);
console.log(obj3.hasSD);
console.log(obj1.hasUHD);
console.log(obj1.price);
console.log(obj3.numOfDevices);