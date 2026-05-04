


// Task 1: The "Optional" Shopping Cart.........................................

type CartItem = {
name: string;
price: number;
quantity?: number;
};

// const calculateTotal=({price, quantity=1 }:CartItem)=>{
//     return price*quantity
// }

function calculateTotal(item: CartItem) {
  const { price, quantity = 1 } = item;

  return price * quantity;
}
const item = {
    name:"book",
    price:24,
    // quantity:4
}

console.log(calculateTotal(item))

