const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require(".lib/shapes.js");

class Svg {
    constructor(){

    }
}

const questions = [
    {
    type: 'input',
    message: 'Please enter up to 3 letters',
    name: 'Letters',
    },
    {
        type: 'checkbox',
        message: 'What shape would you like to use? Use the space key to select your choice.',
        name: 'Shape',
        choices:['Circle', 'Square', 'Triangle']
        },

        {
            type:'input',
            message: 'What color would you like your text to be? Hexadecimals are accepted.',
            name:'Text'
        },
        {
            type:'input',
            message: 'What color would you like your shape to be? Hexadecimals are accepted.',
            name:'ColorS',
        }
]