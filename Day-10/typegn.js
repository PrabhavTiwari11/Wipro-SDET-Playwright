"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function format(input) {
    if (typeof input === "string") {
        return input.toUpperCase(); // narrowed 'string'
    }
    return input.toFixed(2); // narrowed 'number'
}
function move(animal) {
    if ("fly" in animal) {
        animal.fly(); // narrowed to 'Bird'
    }
    else {
        animal.swim(); // narrowed to 'Fish'
    }
}
function isValidBird(bird) {
    return bird && typeof bird.species === "string";
}
const b1 = { fly: () => { }, species: "aerial" };
if (isValidBird(b1)) {
    console.log(b1.species); // narrowed to 'Bird'
}
//# sourceMappingURL=typegn.js.map