"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let shopName = "Rohim store";
let totalProducts = 50;
let isOpen = true;
let rating = null;
let discount = undefined;
// nonPrimative
let products = ["Rice", "Oil", "Salt"];
let prices = [40, 50, 3,];
const product = {
    name: "shafayat",
    price: 60,
    category: "grocery",
};
// void
// function voids():void{
// console.log("This is void")
// }
function calculateTotal(price, Quantity) {
    return price * Quantity;
}
console.log(calculateTotal(59, 3));
//  rest op.
function totalCard(...prices) {
    return prices.reduce((sum, prices) => {
        return sum + prices;
        250;
    });
}
// spread
const newProducts = [...products, "musterd Oil"];
// destructuring
const buyer = {
    name: "korim",
    address: "Dhaka",
    contact: 32094309483
};
const { name, contact } = buyer;
console.log(name);
const item = {
    productName: "Water",
    price: 334,
    address: {
        thana: "Zorargong",
        zipcode: 3324
    }
};
let payment = "bkash";
const SellerName = {
    name: 'Shafayat',
    shopName: "koki"
};
// Ternary, Nullish , optionla chaning
const stock = 0;
// ternary
const Prcstatus = stock > 0 ? "available" : "out of stock";
// nullish 
// const discountPrice = products.discount??0;
// optionla chaninng
// const sellerName = products?.name;
// 
let userInput;
function processInput(input) {
    // (userInput as string).toUpperCase()
    if (typeof input === "string") {
        input.toLocaleUpperCase();
    }
}
// 
function throwError(msg) {
    throw new Error(msg);
}
const product1 = {
    productName: "Pressurs medicine",
    price: 10
};
// Generics......
function identity(value) {
    return value;
}
//  const data = identity(9)
const data = identity("shafayat");
console.log(data);
const res2 = {
    success: true,
    data: ["rice", "letils"]
};
function getName(param) {
    return param?.name;
}
// keyof
function getProperty(obj, key) {
    return obj[key]; //    obj.name   ||| obj[name]   = value ----> key er  value pabo
}
// enum...............
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["pending"] = 0] = "pending";
    OrderStatus[OrderStatus["shipped"] = 1] = "shipped";
    OrderStatus[OrderStatus["delivered"] = 2] = "delivered";
})(OrderStatus || (OrderStatus = {}));
let orderStatus = OrderStatus.delivered;
const Status = {
    PENDING: 'PENDING',
    SHIPPED: "SHIPPED"
};
const typeBosiy = "PENDING";
console.log('last', typeBosiy);
//# sourceMappingURL=TypeScriptSegmentPart1.js.map