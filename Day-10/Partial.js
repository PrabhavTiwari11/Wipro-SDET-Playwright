"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const u1 = {
    id: 0,
    name: "Aryan",
    email: "",
    age: 0,
    address: {
        city: "",
        state: "",
        country: "",
        zip: ""
    },
    skills: {
        java: {
            spring: "low"
        }
    }
};
function deepUpdate(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepUpdate(target[key], source[key]));
        }
    }
    return { ...target, ...source };
}
function updateUser(existingUser, updates) {
    return { ...existingUser, ...updates };
}
const updatedUser = updateUser(u1, { email: "xyz@gmail.com", age: 23 });
console.log(updatedUser);
const updates = {
    address: {
        country: "India"
    }
};
const uUser = deepUpdate(u1, { address: {
        country: "India",
        zip: "005"
    }, skills: {
        java: {
            spring: "high"
        }
    } });
// console.log(uUser);
//# sourceMappingURL=Partial.js.map