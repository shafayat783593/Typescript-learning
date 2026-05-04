"use strict";
// Task 1: The "Optional" Shopping Cart.........................................
Object.defineProperty(exports, "__esModule", { value: true });
// const calculateTotal=({price, quantity=1 }:CartItem)=>{
//     return price*quantity
// }
function calculateTotal(item) {
    const { price, quantity = 1 } = item;
    return price * quantity;
}
const item = {
    name: "book",
    price: 24,
    // quantity:4
};
console.log(calculateTotal(item));
//# sourceMappingURL=MasteringTypeScript.js.map