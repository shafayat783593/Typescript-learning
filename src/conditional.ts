// conditional type : je type er ekta condition apply kore type create kora jai
// conditional type er syntax : T extends U ? X : Y
// jodi T type U type er sub type hoi tahole X type return korbe na hole Y type return korbe

type A = null
type B = undefined
type C = A extends number ? true : B extends undefined ? true : false




type RichPeoplesVehicle  ={
    bike:string;
    car:string;
    ship:string
}


type CheckVehicle <T> = T extends keyof RichPeoplesVehicle ? true :false


type HasBike = CheckVehicle<"bike">
// type HasBike = CheckVehicle<"ff">