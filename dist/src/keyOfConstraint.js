"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "bike";
const user = {
    id: 222,
    name: "Shafayat",
    address: {
        city: "ctg",
    }
};
// const MyId = userId
const myId = user["id"];
// const MyName= user["name"]
// const Address = user["address"]
// console.log(myId, MyName,Address)
const product = {
    brand: "hp"
};
const student = {
    id: 343,
    class: "five"
};
const getPropertyFormobj = (boj, key) => {
    return boj[key];
};
const result1 = getPropertyFormobj(user, "name");
const result2 = getPropertyFormobj(product, "brand");
const result3 = getPropertyFormobj(student, "id");
//# sourceMappingURL=keyOfConstraint.js.map