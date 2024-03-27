#! /usr/bin/env node

import inqurier from "inquirer";
//1 generate a random number using math.random
//2 user input for guessung number
//3 compare user input with computer generated number and show result

const randomNumber: number = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

const answers =await inqurier.prompt([
    {
        name : "numberInput",
        type: "number",
        message: "please guess a number",
},
]);

if (answers.numberInput === randomNumber) {
    console.log("congratulations! you guess the right number.");

}else {
    console.log("you guess the wrong number.");
}