 

//  const UserRoles= {
//     Admin : "Admin",
//     Editor : "Editor",
//     Viewer : "Viewer"
//  } as const



// UserRoles.Admin = "korim"




enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}
const canEdite = (role: keyof typeof UserRoles)=>{
    if(role === UserRoles.Admin|| role === UserRoles.Editor){
        return true
    }else{
        return false
    }
}

const isEditePermissable = canEdite(UserRoles.Editor)
console.log(isEditePermissable)