 

 const UserRoles= {
    Admin : "Admin",
    Editor : "Editor",
    Viewer : "Viewer"
 } as const



// UserRoles.Admin = "korim"




// let UserRoles ={
//     Admin = "Admin",
//     Editor = "EDITOR",
//     Viewer = "VIEWER"
// }
const canEdite = (role: (typeof UserRoles)[keyof typeof UserRoles])=>{
    if(role === UserRoles.Admin|| role === UserRoles.Editor){
        return true
    }else{
        return false
    }
}

const isEditePermissable = canEdite(UserRoles.Editor)
console.log(isEditePermissable)



