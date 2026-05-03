type User= { id:number,
 name:{
    firstName:string,
    lastName:string

},
gender:"male"|"female",
contactNo:string,
address:{
    division:string,
    city:string

}}


const user1:User ={
id:343,
name:{
    firstName:"shafayat",
    lastName:"hosan",

},
gender:"male",
address:{
    city:"chattogram",
    division:"chattogram"
},
contactNo:"23042304"

}

console.log(user1)



const user2:User ={
id:343,
name:{
    firstName:"korim",
    lastName:"hosan",

},
gender:"male",
address:{
    city:"chattogram",
    division:"chattogram"
},
contactNo:"01890486365"

}


type isadmin = true
const isadmin :isadmin= true


type Name = string
const myName:Name= "korim"




// function

type addFunc = (num1:number,num2:number)=>number

const add:addFunc = (num1 ,num2)=>{
    return num1+num2
}

console.log(add(5,4))


