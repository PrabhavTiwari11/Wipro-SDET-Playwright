"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["SuperUser"] = "SuperUser";
})(Role || (Role = {}));
var Priviledge;
(function (Priviledge) {
    Priviledge["Read"] = "Read";
    Priviledge["Write"] = "Write";
    Priviledge["Delete"] = "Delete";
})(Priviledge || (Priviledge = {}));
let list = []; // any -> anything
function addEmp(emp) {
    list.push(emp);
}
function getEmp(index) {
    console.log(list[index]);
}
addEmp({ id: 10, name: "Aaryan", role: Role.User });
addEmp({ id: "xyz", name: "Arush", role: Role.User });
addEmp({ id: 20, name: "Aman", role: Role.Admin, priviledges: [Priviledge.Read, Priviledge.Write] });
getEmp(0);
getEmp(1);
getEmp(2);
const points = { x: 10, y: 20 };
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, username: "hellion", email: "xyz@example.com" };
// console.log(getProperty(user, "email"));
// console.log(getProperty(user, "username"));
// console.log(getProperty(user, "id"));
//# sourceMappingURL=index.js.map