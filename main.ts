#! user/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "enter first number",
        type: "number",
        name: "firstNumber"},
        { 
            message: "enter second number",
            type: "number",
            name: "secondNumber"},
            {
                message: "select one of the operators to from operation",
                type: "list",
                name: "operator",
                choices: [ "+", "-", "*", "/"],
            },
]);
// console.log(answer)

// conditional statement 
if(answer.operator === "+" ) {
    console.log(answer.firstNumber + answer.secondNumber)
} else if(answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber)
} else if(answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber)
}else if(answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber)
}else{
    console.log("invalid operator")
}





