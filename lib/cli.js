const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { Circle, Triangle, Square } = require("./shapes");
const SVG = require('./svg');
const { error } = require('console');


class CLI{
    run(){
        return inquirer.prompt(
            [
                {
                    type: 'input',
                    message: 'Please enter up to 3 letters',
                    name: 'text',
                },
                {
                    type: 'list',
                    message: 'What shape would you like to use? Use the space key to select your choice.',
                    name: 'shapeType',
                    choices: ['Circle', 'Square', 'Triangle']
                },
            
                {
                    type: 'input',
                    message: 'What color would you like your text to be? Hexadecimals are accepted.',
                    name: 'cletters'
                },
                {
                    type: 'input',
                    message: 'What color would you like your shape to be? Hexadecimals are accepted.',
                    name: 'color',
                }
            ]
        )
        .then(({text, shapeType, cletters, color}) => {

            let shape;
            switch (shapeType) {
                case "Circle":
                    shape = new Circle();
                    break;
    
                case "Square":
                    shape = new Square();
                    break;
    
                default:
                    shape = new Triangle();
                    break;
            }
            shape.setColor(color);
            const svg = new SVG();
            svg.setText(text, cletters);
            svg.setShape(shape);
            return writeFile("logo.svg", svg.render());
        })
        .then(()=> {
            console.log("Generated logo")
        })
        .catch((error) => {
            console.log(error);
            console.log("Something went wrong-please try again");
        })
    }}

module.exports = CLI;