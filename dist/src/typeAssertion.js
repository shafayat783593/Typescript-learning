"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "shafayat";
const kgToGramConvater = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Concvated output is ${Number(value) * 1000}`;
    }
};
const result1 = kgToGramConvater(3);
const result2 = kgToGramConvater("2 kg");
console.log(result1);
console.log(result2);
try {
}
catch (error) {
    console.log(error.massage);
}
//# sourceMappingURL=typeAssertion.js.map