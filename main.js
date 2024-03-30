#! user/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        message: "enter first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "enter second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "select one of the operators to from operation",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
// console.log(answer)
// conditional statement 
if (answer.operator === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("invalid operator");
}
