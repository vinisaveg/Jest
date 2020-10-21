"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGivenInfo = exports.getMyName = exports.myCar = exports.reduce = exports.sum = void 0;
// sum numbers
exports.sum = (num1, num2) => {
    return num1 + num2;
};
// reduce numbers
exports.reduce = (num) => {
    return num - 1;
};
exports.myCar = {
    doors: 2,
    name: "Tesla Model S",
};
exports.getMyName = (name) => {
    return new Promise((resolve, reject) => {
        if (name === "vinicius") {
            resolve({
                name,
            });
        }
        else {
            reject({
                error: "Failed to get my name!",
            });
        }
    });
};
// Testing truthy values
const infos = [
    "I am 24 YO",
    "I live in Brasil",
    "I Love music",
    "Tech is my thing. I try at least...",
];
exports.checkGivenInfo = (info) => {
    if (infos.includes(info))
        return true;
    return false;
};
