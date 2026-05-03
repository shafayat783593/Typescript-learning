// union | 

type UserRole = "admin"|"User"|"guest"

const getDashboard = (role:UserRole)=>{
    if(role ==="admin"){
        return "Admin Dashboard"
    }
    else if (role === "User"){
        return "User Dshboard"
    }
    else{
        return "Guest Dashboard"
    }

}


getDashboard("admin")


// intersection

type Employee = {
    id:string;
    name:string;
    phoneNo:string;

}
type Manager = {
   designation:string
   teamSize:number

}
type EmployeeManager= Employee & Manager

const Shafayat: EmployeeManager= {
    name:"shafayat",
    id:"33322",
    designation:"chattogram",
  teamSize:34,
    phoneNo:"01993e4434",


}
console.log(Shafayat)