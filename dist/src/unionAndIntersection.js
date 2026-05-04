"use strict";
// union | 
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "User") {
        return "User Dshboard";
    }
    else {
        return "Guest Dashboard";
    }
};
getDashboard("admin");
const Shafayat = {
    name: "shafayat",
    id: "33322",
    designation: "chattogram",
    teamSize: 34,
    phoneNo: "01993e4434",
};
console.log(Shafayat);
//# sourceMappingURL=unionAndIntersection.js.map