// This includes packages needed for this application which are the file system, inquire package, and the pathway for the generate logo. 
const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('../generateLogo.js');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three caharacters for your logo.',
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Pick a text color you will like for your logo.',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape for your logo.',
      },
      {
        type: 'list',
        name: 'shapeColor',
        message: 'Pick a color for your shape.',
      },
];

// This is the function to write the svg file for the logo.

