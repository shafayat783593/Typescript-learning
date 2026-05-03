

// keyOfConstraint
type RichPeplesVehicle = {
    car:string,
    cng:string,
    bike:string

}


type MyVehicle1 = "bike" | "car" | "cng"

type MyVehicle2 = keyof RichPeplesVehicle;

const myVehicle: MyVehicle2="bike";




type User ={
    id:number,
    name:string,
    address:{
city:string
    }
}

const user:User = {
    id:222,
    name:"Shafayat",
    address:{
        city:"ctg",

    }
}


// const MyId = userId

const myId = user["id"]

// const MyName= user["name"]
// const Address = user["address"]
// console.log(myId, MyName,Address)


const product = {
    brand:"hp"
}

const student ={
    id:343,
    class:"five"
}

const getPropertyFormobj =<X> (boj:X, key:keyof X )=>{
return boj[key]
}

const result1 = getPropertyFormobj(user,"name")

const result2 = getPropertyFormobj(product,"brand" )
const result3 = getPropertyFormobj(student,"id" )


