// nullable types

const getUser = (input:string)=>{
if(input){
    console.log(`From  DB ${input}`)
}else{
    console.log("From db all user")
}
}
getUser("shafayat")

// unknown..... call run time a type check hocce .age defined kroa hoy nai 

const discountCalculator = (input:unknown)=>{
if(typeof input=== "number"){
    const discountdPrice = input * 0.1
    console.log(discountdPrice)
}
else if(typeof input === "string"){
    const [discountdPrice] = input.split(" ")
    console.log(Number(discountdPrice)*0.1)
}else{
    console.log("wrong Input")
}
}
discountCalculator(100)
discountCalculator("500 TK")
discountCalculator(null)


// never type  ... not return
const throwError = (msg:string): never=>{
    throw new Error(msg)
}