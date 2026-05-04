"use strict";
// mapped types
Object.defineProperty(exports, "__esModule", { value: true });
const arrayOfNum = [1, 2, 3, 4, 5];
const arrayOfString = ["1", "2", "4"];
const arrayOfStringUsingMap = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);
const user = {
    id: 443
};
user["id"];
//  T >>> {height:string;width:string}
//  {height:string;width:string}  T["width"]: number
const area1 = {
    height: "34",
    width: 4324
};
//# sourceMappingURL=mapped.js.map