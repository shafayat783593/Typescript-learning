"use strict";
// Function 
Object.defineProperty(exports, "__esModule", { value: true });
// arow function ,normal function
// function add(num1:number ,sum2:number): number{
//     return  num1 + sum2;
// }
// add(12,"34")
const addsum = (num1, sum2) => {
    return num1 + sum2;
};
addsum(12, 34);
// object => function =>method
const poorUser = {
    name: "shafayat",
    balance: 5000,
    addBlance(value) {
        const totalBlance = this.balance += value;
        return totalBlance;
    }
};
poorUser.addBlance(500);
// callback function 
const arr = [1, 4, 6];
const sqrArray = arr.map((element) => {
    return element * element;
});
//# sourceMappingURL=function.js.map