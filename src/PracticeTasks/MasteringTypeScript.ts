


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



type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };








// .............................................


type Employee = Person & JobDetails

function getProfile(employee: Employee):string{
 return `Name: ${employee.name}, Role: ${employee.role}`;  
}
const emp = {
  name: "Shafayat",
  age: 25,
  role: "Developer",
  salary: 50000,
};
getProfile(emp)




type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

function getZipCode(user: UserResponse): string {
  return user.info?.address?.zipCode ?? "00000";
}


const userData={
  info:{
    data:{
      name:"shafayat"
    },
    address:{
     zipCode:"3094"
    }
  }
}

console.log(
getZipCode(userData))



let secretValue: unknown = "typescript is awesome";

let upperValue  = (secretValue as string).toLocaleUpperCase()
console.log(upperValue)