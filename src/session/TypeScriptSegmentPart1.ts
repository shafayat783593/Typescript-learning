

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




// Interface 

interface Iproduct {
    productName :string;
    price:number
}


const product1:Iproduct= {
    productName:"Pressurs medicine",
    price:10
}




// Generics......
function identity <T>(value:T):T{
    return value
}


//  const data = identity(9)
 const data = identity("shafayat")
console.log(data)




// generics with interface

interface IApiRes<TLLm>{
success:boolean,
data:TLLm
}

const res2:IApiRes<string[]>={
    success:true,
    data:["rice","letils"]
}
// const res1:IApiRes<string>={
//     success:true,
//     data:"rice"

// }



// Constraints............. means badha boundary

interface IPersonal{
    name:string, 
    add:string
}


function getName<T extends IPersonal >(param: T):string{
    return param?.name

}


// keyof

function getProperty<T ,k extends keyof T>(obj: T, key : k){
    return obj[key]  //    obj.name   ||| obj[name]   = value ----> key er  value pabo
}



// enum...............

enum OrderStatus {
    pending,
    shipped,
    delivered,
}

let orderStatus = OrderStatus.delivered

const Status = {
    PENDING:'PENDING',
    SHIPPED:"SHIPPED"
} as const


type StatusCheck= typeof Status[keyof typeof Status]

const  typeBosiy :StatusCheck = "PENDING"

console.log('last',typeBosiy)



// conditional

type IsString<T> = T extends string ? "YES" :"NO";

type A = IsString<string>  //yes

const result : A = "YES"


// mapped

type TReadOnly<T>={
    readonly [k in keyof T]:T [k]
}
type TProductRedonly = TReadOnly<TProduct>

type PartialProduct = Partial<TProduct>

type RequriredProduct = Required<PartialProduct>

type PickProduct = Pick<TProduct, "productName">

type OmitProduct = Omit<TProduct ,"address">
