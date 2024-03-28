#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomnumber = Math.floor(Math.random() * 7 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "please guess a number between 1-7",
    }
]);
if (answer.userguessnumber === randomnumber) {
    console.log(chalk.green.bold("Congratulation you guess right number,"));
}
else {
    console.log(chalk.red.bold("Oh! badluck please try again"));
}
;
