// Alias .......................

type User = {
    name :string;
    age:number;

}
// interface :work on object type :array,object , function 
interface IUser {
    name:string;
    age:number;
}

type Role = {
    role:"admin" | "user"
}

type UserWithRole = User & Role



interface IUserWithRole extends IUser{
    role:"admin" | "user";

}

const user1 :IUserWithRole = {
    name :"shafayat",
    age:30,
    role:"admin"
}
const user2 :IUser = {
    name :"korimg",
    age:45
}


// alice
type isAdmin= boolean

const isAdmin:isAdmin  = true



// INTERFACE...........................





type Add = (num1:number,num2:number)=>number
const add :Add = (num1, num2)=> num1+ num2


interface IAdd {
    (num1:number,num2:number):number
    
}
const adds :IAdd = (num1, num2)=> num1+ num2





// type Friends = string[]
//  const fiiends:Friends = ["A","B","C"]
     


interface  IFriends{
    [index:number]:string
}

 const fiiend:IFriends = ["A","B","C"]