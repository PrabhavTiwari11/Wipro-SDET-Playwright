"use strict";
// 1. The Generic API Wrapper
Object.defineProperty(exports, "__esModule", { value: true });
// Scenario: You need a reusable function to fetch data that automatically types the response.
// Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network request Failed: ' + response.statusText);
    }
    const data = await response.json();
    return data;
}
async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData(url);
    console.log(`Album ID: ${album.id}`);
    console.log(`Album Title: ${album.title}`);
}
demo();
// 2. Record Mapping for Configuration
// :
// Scenario: You are managing feature flags or permissions for specific user roles.
// Task: Define an enum Role (Admin, Editor, Guest). Use the Record utility type to create a variable Permission Map where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.
// Enum for Roles
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Editor"] = "Editor";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
// Record Utility Type
// हर Role के लिए boolean value देना जरूरी है
const PermissionMap = {
    [Role.Admin]: true,
    [Role.Editor]: true,
    [Role.Guest]: false
};
console.log(PermissionMap);
//# sourceMappingURL=PracticeQuestion.js.map