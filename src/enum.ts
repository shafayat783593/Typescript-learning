// enum

// set of fixed string leteral  



// type UserRole = "Admin"|"Editor"| "Viewer"


// enum
enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}
const canEdite = (role:UserRoles)=>{
    if(role === UserRoles.Admin|| role === UserRoles.Editor){
        return true
    }else{
        return false
    }
}

const isEditePermissable = canEdite(UserRoles.Editor)
console.log(isEditePermissable)