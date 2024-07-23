#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.blue("********WELCOME!******"));
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.Select == "staff") {
            console.log(chalk.green("You Approach the staff room, Please feel free to ask any question."));
        }
        else if (ans.Select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.yellow(`Hello, I am ${name.name}, Nice to meet you!`));
                console.log(chalk.red("New Student Added"));
                console.log(chalk.magenta("Current student list:"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.yellow(`Hello, I am ${student.name}, Nice to see you again!`));
                console.log(chalk.magenta("Existing student list:"));
                console.log(persons.students);
            }
        }
        else if (ans.Select == "exit") {
            console.log(chalk.red("Exiting the program..."));
            process.exit();
        }
    } while (true);
};
programStart(persons);
