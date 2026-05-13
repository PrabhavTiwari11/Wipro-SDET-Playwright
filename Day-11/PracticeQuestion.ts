// 1. The Generic API Wrapper

// Scenario: You need a reusable function to fetch data that automatically types the response.

// Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.


async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Network request Failed: ' + response.statusText)
    }
    const data: T = await response.json();
    return data;
}

interface Album {
    userId: number,
    id: number,
    title: string
}

async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData<Album>(url);

    console.log(`Album ID: ${album.id}`)
    console.log(`Album Title: ${album.title}`)
}

demo();





// 2. Record Mapping for Configuration

// :

// Scenario: You are managing feature flags or permissions for specific user roles.

// Task: Define an enum Role (Admin, Editor, Guest). Use the Record utility type to create a variable Permission Map where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.




//   // Enum for Roles
// enum Role {
//   Admin = "Admin",
//   Editor = "Editor",
//   Guest = "Guest"
// }

// // Record Utility Type
// // हर Role के लिए boolean value देना जरूरी है
// const PermissionMap: Record<Role, boolean> = {
//   [Role.Admin]: true,
//   [Role.Editor]: true,
//   [Role.Guest]: false
// };

// console.log(PermissionMap);