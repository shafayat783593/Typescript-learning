"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
};
// UserRoles.Admin = "korim"
// let UserRoles ={
//     Admin = "Admin",
//     Editor = "EDITOR",
//     Viewer = "VIEWER"
// }
const canEdite = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
const isEditePermissable = canEdite(UserRoles.Editor);
console.log(isEditePermissable);
//# sourceMappingURL=asconst.js.map