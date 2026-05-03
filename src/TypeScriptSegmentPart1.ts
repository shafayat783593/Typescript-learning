

let shopName:string = "Rohim store"

let totalProducts:number = 50;
let isOpen:boolean = true
let rating:null = null
let discount:undefined = undefined


// nonPrimative

let products:string[]=["Rice","Oil","Salt"]
let prices:number[]=[40,50,3,]

const product :{
    name:"shafayat";
    price:number;
    category:'grocery'|"electronics",
    discount?:number
}={
    name:"shafayat",
    price:60,
    category:"grocery",

}

// void

// function voids():void{
// console.log("This is void")
// }



function calculateTotal(price:number,Quantity:number):number{
    return price*Quantity
}
console.log(calculateTotal(59,3))



//  rest op.

function totalCard(...prices:number[]){
return prices.reduce((sum ,prices)=> {
    return sum+prices

250})
}

// spread
const newProducts = [...products, "musterd Oil"]

// destructuring




const buyer :{ name:string,address:string,contact:number}= {
    name:"korim",
    address:"Dhaka",
    contact:32094309483
}
const {name,contact}=buyer;
console.log(name)



type TProduct={
    productName:string,
    price:number,
    address:{
        thana:"Zorargong",
        zipcode:number
    }

}

const item:TProduct={
productName:"Water",
price:334,
address:{
    thana:"Zorargong",
    zipcode:3324
}
}


//   
type TPaymentMethod= "bkash"|"rocket"|"nagad"|"mcash"
let payment:TPaymentMethod= "bkash"

type TUser = {
    name:string;

}
type Tseller= TUser & {
    shopName:string
}

const SellerName:Tseller={
    name:'Shafayat',
    shopName:"koki"
}

// Ternary, Nullish , optionla chaning

const stock = 0;

// ternary
const Prcstatus = stock>0?"available":"out of stock"

// nullish 

// const discountPrice = products.discount??0;

// optionla chaninng

// const sellerName = products?.name;


// 
let userInput: unknown;
function processInput(input:unknown){
    // (userInput as string).toUpperCase()
    if(typeof input==="string"){
        input.toLocaleUpperCase()
    }
}

// 

function throwError(msg:string):never{
    throw new Error(msg)
}


