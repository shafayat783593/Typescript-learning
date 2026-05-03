// dynamically geralize ............. Generic

type GenericArray<T> = Array<T>



// const friends:string[]=["Mr.X","shafayat","korim"]

const friends: GenericArray<string>=["Mr.X","shafayat","korim"]

// const rollNumbers: number[]=[2,7,11]
const rollNumbers:GenericArray<number>=[2,7,11]

// const isEligibleList :boolean = [true,false,true]
const isEligibleList :GenericArray<boolean> = [true,false,true]







// function .....
// const sqrFun = (value:number)=>{
// return value*value
// }

// sqrFun(4)

type Coordinates<X,Y> = [X,Y]

const coordinates1: Coordinates<string,number> =["20",20]
const coordinates2:Coordinates<string,number> =["20",20]


type User = {name:string,age:number}


// genirce object 

const userList:GenericArray<User > = [
    {
        name:"Shafayat",
        age:22

    },
    {
        name:"korim",
        age:25
    }
]
