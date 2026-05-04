"use strict";
// enum
Object.defineProperty(exports, "__esModule", { value: true });
// set of fixed string leteral  
// type UserRole = "Admin"|"Editor"| "Viewer"
// enum
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
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
//# sourceMappingURL=enum.js.map