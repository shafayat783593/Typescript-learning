"use strict";
// nullable types
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (input) => {
    if (input) {
        console.log(`From  DB ${input}`);
    }
    else {
        console.log("From db all user");
    }
};
getUser("shafayat");
// unknown..... call run time a type check hocce .age defined kroa hoy nai 
const discountCalculator = (input) => {
    if (typeof input === "number") {
        const discountdPrice = input * 0.1;
        console.log(discountdPrice);
    }
    else if (typeof input === "string") {
        const [discountdPrice] = input.split(" ");
        console.log(Number(discountdPrice) * 0.1);
    }
    else {
        console.log("wrong Input");
    }
};
discountCalculator(100);
discountCalculator("500 TK");
discountCalculator(null);
// never type  ... not return
const throwError = (msg) => {
    throw new Error(msg);
};
//# sourceMappingURL=nullableknonwnNaver.js.map